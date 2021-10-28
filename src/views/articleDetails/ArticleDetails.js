import './ArticleDetails.css';
import useFetch from "../../hooks/useFetch";
import Loader from 'components/loader/Loader';
import bookmarkIcon from 'assets/icons/bookmark-icon.svg'

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

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
          <div className="article-content">
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
            <h1>{article.fields.headline}</h1>
            { article.fields.trailText && <div dangerouslySetInnerHTML={{__html: article.fields.trailText}} /> }
            { article.fields.body && <div dangerouslySetInnerHTML={{__html: article.fields.body}} /> }
          </div>
          <div className="article-image">
            { article.fields.main && <div dangerouslySetInnerHTML={{__html: article.fields.main}} /> }
          </div>
        </div>
      }
    </div>
  );
}
 
export default ArticleDetails;