import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Loader from 'components/loader/Loader';
import Header from 'components/header/Header';
import TopSection from './components/topSection/TopSection';
import MiddleSection from './components/middleSection/MiddleSection';
import BottomSection from './components/bottomSection/bottomSection';
  
const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const Home = () => {
  const [filter, setFilter] = useState('newest');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  }

  const API_URL_TO_FETCH_HOME_ARTICLES = `${API_URL}search?order-by=${filter}&show-fields=all&page-size=8&api-key=${API_KEY}`;
  const API_URL_TO_FETCH_HOME_SPORT_ARTICLES = `${API_URL}search?section=sport&order-by=${filter}&show-fields=all&page-size=3&api-key=${API_KEY}`;

  const { data: articles, error: errorArticles, isLoading: isLoadingArticles } = useFetch(API_URL_TO_FETCH_HOME_ARTICLES);
  const { data: sportArticles, error: errorSportArticles, isLoading: isLoadingSportArticles } = useFetch(API_URL_TO_FETCH_HOME_SPORT_ARTICLES);

  return ( 
    <div className="home">
      { errorArticles && <div>{ errorArticles }</div> }
      { errorSportArticles && <div>{ errorSportArticles }</div> }
      { (isLoadingArticles || isLoadingSportArticles) && <Loader /> }
      { (articles && sportArticles && !isLoadingArticles && !isLoadingSportArticles) && 
        <>
          <Header title='Top stories' value={filter} handleFilterChange={handleFilterChange} />
          <TopSection articles={articles.slice(0, 5)}/>
          <MiddleSection articles={articles.slice(-3)}/>
          <BottomSection articles={sportArticles}/>
        </>
      }
    </div>
  );
}
 
export default Home;