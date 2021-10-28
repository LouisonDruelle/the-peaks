import './ArticleCard.css';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';

const ArticleCard = ({ articleSize="m", id, image, headline, description, showImage=true, showDescription }) => {
  return (
    <Link className={'article-card-' + articleSize} to={`/articles/${id}`}>
      { showImage && image && headline && <img className="article-card__image" src={ image } alt={ headline } /> }
      { (showImage && !image) && <img className="article-card__logo" src={logo} alt="logo the peaks" /> }
      <div className={'article-preview' + (articleSize === 'xs' ? '-xs' : '')}>
        { headline && <h3 className={`article-preview__title ${description && showDescription ? "text-overflow-on-two-lines" : "text-overflow-on-four-lines"}`}>{ headline }</h3> }
        { showDescription && description && showImage && <div className="article-preview__description text-overflow-on-two-lines" dangerouslySetInnerHTML={{__html: description}} /> }
      </div>
    </Link>
  );
}
 
export default ArticleCard;