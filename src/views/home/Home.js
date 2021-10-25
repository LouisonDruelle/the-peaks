import './Home.css';
import useFetch from "../../hooks/useFetch";
import MiddleSection from './components/middleSection/MiddleSection';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL_TO_FETCH_HOME_ARTICLES = `${API_URL}search?order-by=newest&show-fields=all&page-size=8&api-key=${API_KEY}`;

const Home = () => {
  const { error, isLoading, data: articles } = useFetch(API_URL_TO_FETCH_HOME_ARTICLES);

  return ( 
    <div className="home">
      { error && <div>{ error }</div> }
      { isLoading && <div>Loading...</div> }
      { articles && 
        <>
          <MiddleSection articles={articles.slice(-3)}/>
        </>
      }
    </div>
  );
}
 
export default Home;