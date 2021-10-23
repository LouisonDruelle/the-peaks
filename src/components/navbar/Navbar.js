import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to='/'>
        <img className="navbar__logo" src={logo} alt="logo the peaks" />
      </Link>
    </div>
  );
}
 
export default Navbar;