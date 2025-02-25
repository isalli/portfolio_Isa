import './ProjectCard.css';
import PropTypes from 'prop-types';

const ProjectCard = ({ logo, name, content, link, showLogo = true, showLinks = true }) => {
  return (
    <div data-testid="projectCard" className="project-card">
      <div>
      {showLogo && <img data-testid="projectCardLogo" src={logo} alt="Company name Logo" className="project-card-logo" />}
        <h2 data-testid="projectCardName">{name}</h2>
      </div>
      <div>
       <p>{content}</p>
       {showLinks &&
        <a data-testid="projectCardLink" href={link[0]} target="_blank" rel="noreferrer">
          <img src="/linkedin.png" alt="iconsmind" />
        </a>}
        {showLinks &&
        <a data-testid="projectCardLink" href={link[1]} target="_blank" rel="noreferrer">
          <img src="/twitter.png" alt="iconsmind" />
        </a>}
        {showLinks &&
        <a data-testid="projectCardLink" href={link[2]} target="_blank" rel="noreferrer">
          <img src="/social.png" alt="iconsmind" />
        </a>}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
};

ProjectCard.defaultProps = {
  link: '#',
};
export default ProjectCard;
