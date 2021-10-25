import ArticleList from 'components/article/articleList/ArticleList';
import Subtitle from 'components/title/subtitle/Subtitle'

const bottomSection = ({ articles }) => {
  return ( 
    <div className="bottom-section">
      <Subtitle text='Sports' />
      <ArticleList articles={articles} />
    </div>
  );
}
 
export default bottomSection;