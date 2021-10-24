import MainTitle from "../../title/mainTitle/MainTitle";

const ArticleList = ({ articles }) => {
  return (
    <div className="article-list">
      <MainTitle title='Top stories' />

      {articles.map(article => (
        <div className="article-preview" key={article.id} >
          {article.webTitle}
        </div>
      ))}
    </div>
  );
}
 
export default ArticleList;