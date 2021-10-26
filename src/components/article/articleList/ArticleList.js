import './ArticleList.css';
import { Link } from 'react-router-dom';
import ArticleCard from "../articleCard/ArticleCard";

const ArticleList = ({ articles, showDescription=false }) => {
  return (
    <div className="article-list">
      {articles.map((article) => (
        <Link to={`/articles/${article.id}`} key={article.id}>
          <ArticleCard 
            image={article.fields.thumbnail}
            headline={article.fields.headline}
            description={article.fields.trailText}
            showDescription={showDescription}
          />
        </Link>
      ))}
    </div>
  );
}
 
export default ArticleList;