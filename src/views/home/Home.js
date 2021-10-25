import './Home.css';
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Header from 'components/header/Header'
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
      { (isLoadingArticles || isLoadingSportArticles) && <div>Loading...</div> }
      { (articles && sportArticles) && 
        <>
          <Header title='Top stories' filter={filter} handleFilterChange={handleFilterChange} />
          <MiddleSection articles={articles.slice(-3)}/>
          <BottomSection articles={sportArticles}/>
        </>
      }
    </div>
  );
}
 
export default Home;