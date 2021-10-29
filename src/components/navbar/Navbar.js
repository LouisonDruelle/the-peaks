import './Navbar.css';
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";
import logo from '../../assets/logo.svg';
import searchIcon from 'assets/icons/search-icon.svg'

const Navbar = ({ searchText, handleSearchText }) => {
  const ref = useRef();
  const history = useHistory();
  
  const [isSearchInputOpen, setIsSearchInputOpen] = useState(false)
  
  useEffect(() => {
    const checkIfClickedOutside = e => {

      if (isSearchInputOpen && ref.current && !ref.current.contains(e.target)) {
        setIsSearchInputOpen(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isSearchInputOpen])

  const handleSearch = (inputText) => {

    handleSearchText(inputText);
    history.push('/search');
  }

  return (
    <div className="navbar">
      <Link to='/'>
        <img className="navbar__logo" src={logo} alt="logo the peaks" />
      </Link>
      {
        isSearchInputOpen
        ? <input
            className="navbar__search-input"
            type="text"
            placeholder="Search all news"
            value={searchText}
            onChange={(e) => handleSearch(e.target.value)}
            ref={ref}
          />
        : <button className="navbar__search-button" onClick={() => setIsSearchInputOpen(true)}>
            <img className="navbar__search-button-icon" src={searchIcon} alt="bookmark icon" />
          </button>
      }
    </div>
  );
}
 
export default Navbar;