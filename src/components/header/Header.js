import './Header.css';
import { useHistory } from 'react-router-dom';
import MainTitle from 'components/title/mainTitle/MainTitle';
import bookmarkIcon from 'assets/icons/bookmark-icon.svg'

const Header = ({ title, value, handleFilterChange }) => {
  const history = useHistory();
  
  return ( 
    <div className="header">
      <MainTitle text={title} />
      <div className="header-container">
        { title !== 'All bookmark' && <button className="header__bookmark-button" onClick={() => history.push('/bookmarks')}>
          <img className="header__bookmark-icon" src={bookmarkIcon} alt="bookmark icon" />
          view bookmark
        </button>
        }
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