
import PropTypes from 'prop-types';
import './Header.css';
import Navbar from '../Navbar/Navbar';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';


function Header({ children ,options }) {
  return (
    <section position="static" className={'header'}>
      <div className={'div'}></div>
      <div className={'div2'}>       <Navbar options={options} />
              </div>
      <div className={'div'}><ThemeSwitcher />{children}</div>
    </section>
  );
}

Header.propTypes = {
  children: PropTypes.node,
};
export default Header;
