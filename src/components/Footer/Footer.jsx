import './Footer.css';
import PropTypes from 'prop-types';

const Footer = ({ links }) => {
  const year = new Date().getFullYear();

  return (
    <footer data-testid={'footer'} className={'footer'}>
      <ul>
        {links.map((link, index) => (
          <li data-testid={'footerLink' + index} key={index}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
      <p data-testid={'footerContent'}>© {year + ' Isabel Lee. All rights reserved.'}</p>
    </footer>
  );
};

Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

Footer.defaultProps = {
  links: [],
};

export default Footer;
