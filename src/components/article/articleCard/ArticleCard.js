import './ArticleCard.css';
import logo from '../../../assets/logo.svg';

const ArticleCard = ({ image, headline, description, showDescription }) => {
  return (
    <div className="article-card">
      {
        image && headline ? <img className="article-card__image" src={ image } alt={ headline } />
        : <img className="article-card__logo" src={logo} alt="logo the peaks" />
      }
      <div className="article-preview">
        { headline && <h3 className={`article-preview__title ${description && showDescription ? "text-overflow-on-two-lines" : "text-overflow-on-four-lines"}`}>{ headline }</h3> }
        { description && showDescription && <div className="article-preview__description text-overflow-on-two-lines" dangerouslySetInnerHTML={{__html: description}} /> }
      </div>
    </div>
  );
}
 
export default ArticleCard;