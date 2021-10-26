import './ArticleDetails.css';
import useFetch from "../../hooks/useFetch";

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const ArticleDetails = () => {
  const articleId = window.location.pathname.slice(10);
  const API_URL_TO_FETCH_SINGLE_ARTICLE = `${API_URL}${articleId}?api-key=${API_KEY}`;

  const { data: article, error, isLoading } = useFetch(API_URL_TO_FETCH_SINGLE_ARTICLE);

  return ( 
    <div className="article-details">
      { error && <div>{ error }</div> }
      { isLoading && <div>Loading...</div> }
      { article && 
        <h2>{article.webTitle}</h2>
      }
    </div>
  );
}
 
export default ArticleDetails;