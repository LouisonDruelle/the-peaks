import './ArticleDetails.css';
import useFetch from "../../hooks/useFetch";
import Loader from 'components/loader/Loader';
import bookmarkIcon from 'assets/icons/bookmark-icon.svg'
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import advanced from 'dayjs/plugin/advancedFormat';


const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advanced);

const ArticleDetails = ({ bookmarks, handleAddBookmark, handleRemoveBookmark }) => {

  let articleIsInBookmarks = false;
  const articleId = window.location.pathname.slice(10);
  const API_URL_TO_FETCH_SINGLE_ARTICLE = `${API_URL}${articleId}?show-fields=all&api-key=${API_KEY}`;

  const { data: article, error, isLoading } = useFetch(API_URL_TO_FETCH_SINGLE_ARTICLE);

  if (article) {
    articleIsInBookmarks = bookmarks.find(bookmark => bookmark.id === article.id);
  }

  return ( 
    <div className="article-details">
      { error && <div>{ error }</div> }
      { isLoading && <Loader /> }
      { article && 
        <div className="article-container">
          <div className="article-header">
            { articleIsInBookmarks
              ? <button className="header__bookmark-button" onClick={() => handleRemoveBookmark(article)}>
                  <img className="header__bookmark-icon" src={bookmarkIcon} alt="bookmark icon" />
                  Remove bookmark
                </button>
              : <button className="header__bookmark-button" onClick={() => handleAddBookmark(article)}>
                  <img className="header__bookmark-icon" src={bookmarkIcon} alt="bookmark icon" />
                  Add bookmark
                </button>
            }
            { article.webPublicationDate && <div className="article-details__date">{ dayjs(article.webPublicationDate).tz().format('ddd DD MMM YYYY H.mm z') }</div> }
            { article.fields.headline && <h1 className="article-details__title">{article.fields.headline}</h1> }
            { article.fields.trailText && <div className="article-details__intro" dangerouslySetInnerHTML={{__html: article.fields.trailText}} /> }
          </div>
          <div className="article-content">
            { article.fields.body && <div className="article-details__content" dangerouslySetInnerHTML={{__html: article.fields.body}} /> }
            { article.fields.main && <div className="article-image" dangerouslySetInnerHTML={{__html: article.fields.main}} /> }
          </div>
        </div>
      }
    </div>
  );
}
 
export default ArticleDetails;