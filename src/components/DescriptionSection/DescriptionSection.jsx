import './DescriptionSection.css';
import PropTypes from 'prop-types';

const DescriptionSection = ({ title, experiences }) => {
  return (
    <div  className="description-section">
      <h2>{title}</h2>
      <ul>
        {experiences.map((experience, index) => (
          <li key={index}>
            <p>{experience}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

DescriptionSection.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string.isRequired,
      organization: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      startYear: PropTypes.number.isRequired,
      endYear: PropTypes.number || null,
    })
  ),
};

DescriptionSection.defaultProps = {
  experiences: [],
};

export default DescriptionSection;
