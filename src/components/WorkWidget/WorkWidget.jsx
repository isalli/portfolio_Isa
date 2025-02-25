import './WorkWidget.css';
import PropTypes from 'prop-types';

const WorkWidget = ({ title, content, experiences }) => {
  return (
    <div data-testid="workWidget" className="work-widget">
      <h2 data-testid="workWidgetTitle">
      <img src={'/work.png'} className={'imageIcon'}/>{title}</h2>
      <p data-testid="workWidgetContent">{content}</p>
      <ul>
        {experiences.map((experience, index) => (
          <li data-testid={'workWidgetItem' + index} key={index}>
            <div className="work-item">
              <img data-testid={'workWidgetItemLogo' + index} src={experience.logo} alt={'Item ' + index + ' Logo'} />
              <div className="work-widget-item-content">
                <h3 data-testid={'workWidgetItemTitle' + index}>{experience.organization}</h3>
                <div className="work-item-content-details">
                  <p data-testid={'workWidgetItemContent' + index}>{experience.jobTitle}</p>
                  <span data-testid={'workWidgetItemDates' + index}>
                    { experience.startYear} - {experience.endYear || 'Present'}
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

WorkWidget.propTypes = {
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

WorkWidget.defaultProps = {
  experiences: [],
};

export default WorkWidget;
