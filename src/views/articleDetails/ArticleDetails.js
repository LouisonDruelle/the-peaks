import './ArticleDetails.css';
import useFetch from "../../hooks/useFetch";

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const ArticleDetails = () => {
  const articleId = window.location.pathname.slice(10);
  const API_URL_TO_FETCH_SINGLE_ARTICLE = `${API_URL}${articleId}?show-fields=all&api-key=${API_KEY}`;

  const { data: article, error, isLoading } = useFetch(API_URL_TO_FETCH_SINGLE_ARTICLE);

  return ( 
    <div className="article-details">
      { error && <div>{ error }</div> }
      { isLoading && <div>Loading...</div> }
      { article && 
        <div className="article-container">
          <div className="article-content">
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