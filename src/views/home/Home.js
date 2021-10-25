import './Home.css';
import useFetch from "../../hooks/useFetch";
import MiddleSection from './components/middleSection/MiddleSection';
import BottomSection from './components/bottomSection/bottomSection';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL_TO_FETCH_HOME_ARTICLES = `${API_URL}search?order-by=newest&show-fields=all&page-size=8&api-key=${API_KEY}`;
const API_URL_TO_FETCH_HOME_SPORT_ARTICLES = `${API_URL}search?section=sport&order-by=newest&show-fields=all&page-size=3&api-key=${API_KEY}`;

const Home = () => {
  const { error: errorArticles, isLoading: isLoadingArticles, data: articles } = useFetch(API_URL_TO_FETCH_HOME_ARTICLES);
  const { error: errorSportArticles, isLoading: isLoadingSportArticles, data: sportArticles } = useFetch(API_URL_TO_FETCH_HOME_SPORT_ARTICLES);

  return ( 
    <div className="home">
      { errorArticles && <div>{ errorArticles }</div> }
      { errorSportArticles && <div>{ errorSportArticles }</div> }
      { (isLoadingArticles || isLoadingSportArticles) && <div>Loading...</div> }
      { (articles && sportArticles) && 
        <>
          <MiddleSection articles={articles.slice(-3)}/>
          <BottomSection articles={sportArticles}/>
        </>
      }
    </div>
  );
}
 
export default Home;