import './Navbar.css';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const Navbar = ({ searchText, handleSearchText }) => {
  const history = useHistory();

  const handleSearch = (inputText) => {

    handleSearchText(inputText);
    history.push('/search');
  }

  return (
    <div className="navbar">
      <Link to='/'>
        <img className="navbar__logo" src={logo} alt="logo the peaks" />
      </Link>
      <input
        type="text"
        placeholder="Search all news"
        value={searchText}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}
 
export default Navbar;