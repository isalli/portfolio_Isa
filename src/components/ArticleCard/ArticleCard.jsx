import './ArticleCard.css';
import PropTypes from 'prop-types';
//comentario
function ArticleCard({ date, title, content, link }) {
  return (
    <article data-testid={'articleCard'} className="article-card">
      <div className="article-card-header">
        <time data-testid={'articleCardDate'}>{date}</time>
        <h2 data-testid={'articleCardTitle'}>{title}</h2>
      </div>
      <p data-testid={'articleCardContent'}>{content}</p>
      <a data-testid={'articleCardLink'} href={link}>
       {'Read article >'}
      </a>
    </article>
  );
}

ArticleCard.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
};

ArticleCard.defaultProps = {
  link: '#',
};

export default ArticleCard;
