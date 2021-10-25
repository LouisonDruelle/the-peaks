import './Header.css';
import MainTitle from 'components/title/mainTitle/MainTitle';
import bookmarkIcon from 'assets/icons/bookmark-icon.svg'

const Header = ({ title, value, handleFilterChange }) => {
  return ( 
    <div className="header">
      <MainTitle text={title} />
      <div className="header-container">
        <button className="header__bookmark-button">
          <img className="header__bookmark-icon" src={bookmarkIcon} alt="bookmark icon" />
          view bookmark
        </button>
        <select className="header__filter-select" name='filter' value={value} onChange={handleFilterChange}>
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
          <option value="relevance">Most Popular</option>
        </select>
      </div>
    </div>
  );
}
 
export default Header;