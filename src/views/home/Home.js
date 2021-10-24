import './Home.css';
import useFetch from "../../hooks/useFetch";
import ArticleList from "../../components/article/articleList/ArticleList";

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const Home = () => {
  const { error, isLoading, data: articles } = useFetch(`${API_URL}search?api-key=${API_KEY}`);

  return ( 
    <div className="home">
      { error && <div>{ error }</div> }
      { isLoading && <div>Loading...</div> }
      { articles && <ArticleList articles={articles} /> }
    </div>
  );
}
 
export default Home;