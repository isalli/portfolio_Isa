import './SmallProjectCard.css';
import PropTypes from 'prop-types';

const SmallProjectCard = ({ logo, name, content, link, showLogo = true, showLinks = true }) => {
  return (
    <div data-testid="projectCard" className="sproject-card">
      <div>
      {showLogo && <img data-testid="projectCardLogo" src={logo} alt="Company name Logo" className="sproject-card-logo" />}
        <h2 data-testid="projectCardName">{name}</h2>
      </div>
      <div>
       <p>{content}</p>
       {showLinks &&
        <a data-testid="projectCardLink" href={link} target="_blank" rel="noreferrer">
          <img src={'/link.png'} className={'imageIcon'}/>{name}</a>}
      </div>
    </div>
  );
};

SmallProjectCard.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
};

SmallProjectCard.defaultProps = {
  link: '#',
};

export default SmallProjectCard;
