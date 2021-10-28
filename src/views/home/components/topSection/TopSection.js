import './TopSection.css';
import ArticleCard from 'components/article/articleCard/ArticleCard';


const TopSection = ({ articles }) => {

  return (  
    <div className="top-section">
      <div className="top-section__main-article">
        <ArticleCard
          articleSize="l"
          id={articles[0].id}
          image={articles[0].fields.thumbnail}
          headline={articles[0].fields.headline}
          description={articles[0].fields.trailText}
          showDescription={true}
          key={articles[0].id}
        />
      </div>
      <div className="top-section__wrapper">
        {articles.slice(1).map((article, index) => (
          <div className="top-section__container" key={article.id}>
            {index < 2 
              ? <ArticleCard
                  articleSize="s"
                  id={article.id}
                  image={article.fields.thumbnail}
                  headline={article.fields.headline}
                  description={article.fields.trailText}
                  showDescription={false}
                />
              : <ArticleCard
                  articleSize="xs"
                  id={article.id}
                  showImage={false}
                  headline={article.fields.headline}
                  description={article.fields.trailText}
                  showDescription={false}
                />
            }
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default TopSection;