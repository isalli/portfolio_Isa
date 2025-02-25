import './UsesSection.css';
import PropTypes from 'prop-types';
import UsesCard from '../UsesCard/UsesCard.jsx';


const UsesSection = ({ items }) => {
  return (
    <section className="uses-section">
      <div className="uses-section__content">
        {items.map((group, index) => (
          <div key={index} className="uses-section__group">
            <h2>{group.groupName}</h2>
            <div className="uses-section__group-content">
              {group.items.map((item, index) => (
                <UsesCard key={index} title={item.title} content={item.description} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

UsesSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      groupName: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string,
        })
      ),
    })
  ),
};

UsesSection.defaultProps = {
  items: [],
};
export default UsesSection;
