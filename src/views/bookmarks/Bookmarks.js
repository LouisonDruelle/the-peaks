import './Bookmarks.css';
import Header from 'components/header/Header'
import ArticleList from 'components/article/articleList/ArticleList';

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="bookmarks">
      <Header title='All bookmark' />
      <ArticleList articles={bookmarks} />
    </div>
  );
}
 
export default Bookmarks;