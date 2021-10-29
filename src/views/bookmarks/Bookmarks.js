import './Bookmarks.css';
import Header from 'components/header/Header'
import ArticleList from 'components/article/articleList/ArticleList';

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="bookmarks">
      <Header title='All bookmark' />
      { bookmarks.length === 0
        ? <h2 className="bookmarks-empty">You didn't save any article yet</h2>
        : <ArticleList articles={bookmarks} />
      }
      
    </div>
  );
}
 
export default Bookmarks;