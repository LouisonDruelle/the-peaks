import './ArticleSearch.css';
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Loader from 'components/loader/Loader';
import Header from 'components/header/Header';
import ArticleList from 'components/article/articleList/ArticleList';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const ArticleSearch = ({ searchText }) => {
  const [filter, setFilter] = useState('newest');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  }

  const API_URL_TO_FETCH_ARTICLE_FROM_SEARCH = `${API_URL}search?order-by=${filter}&show-fields=all&q=${searchText}&api-key=${API_KEY}`;

  const { data: articles, error, isLoading } = useFetch(API_URL_TO_FETCH_ARTICLE_FROM_SEARCH);

  return (  
    <div className="article-search">
      { error && <div>{ error }</div> }
      { isLoading && <Loader /> }
      { articles && 
        <>
          <Header title='Search results' filter={filter} handleFilterChange={handleFilterChange} />
          <ArticleList articles={articles} />
        </>
      }
    </div>
  );
}
 
export default ArticleSearch;