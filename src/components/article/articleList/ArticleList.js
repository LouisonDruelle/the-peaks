import './ArticleList.css';
import ArticleCard from "../articleCard/ArticleCard";

const ArticleList = ({ articles, showDescription=false }) => {
  return (
    <div className="article-list">
      {articles.map((article) => (
        <ArticleCard 
          image={article.fields.thumbnail}
          headline={article.fields.headline}
          description={article.fields.trailText}
          showDescription={showDescription}
          key={article.id}
        />
      ))}
    </div>
  );
}
 
export default ArticleList;