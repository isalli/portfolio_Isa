import Link from 'next/link';
import PropTypes from 'prop-types';
import './Navbar.css';
function Navbar({ options, children }) {
  return (
    <nav data-testid="nav" className={'navbar'}>
      <ul data-testid="ul">
        {options?.map((option, index) => (
          <li key={index} data-testid={'li' + index} >
            <Link data-testid={'link' + index} className="link" href={option.path}>
              {option.label}
              {children}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Navbar;
