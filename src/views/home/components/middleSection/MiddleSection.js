import ArticleList from 'components/article/articleList/ArticleList';

const MiddleSection = ({ articles }) => {
  return ( 
    <div className="middle-section">
      <ArticleList articles={articles} showDescription={true} />
    </div>
  );
}
 
export default MiddleSection;