import './ArticleCard.css';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';

const ArticleCard = ({ articleSize="m", id, image, headline, description, showImage=true, showDescription, index }) => {
  return (
    <Link className={'article-card-' + articleSize  + (articleSize === 's' && index === 1 ? ' yellow-border' : '')} to={`/articles/${id}`}>
      { showImage && image && headline && <img className="article-card__image" src={ image } alt={ headline } /> }
      { (showImage && !image) && <img className="article-card__logo" src={logo} alt="logo the peaks" /> }
      <div className={'article-preview' + (articleSize === 'xs' ? '-xs' : '') + (articleSize === 'xs' && index === 3 ? ' green-border' : '')  + (articleSize === 's' ? '-s' : '') }>
        { headline && <div className={'article-preview__title' + (articleSize === 's' || (articleSize === 'm' && !showDescription) ? ' text-overflow-on-three-lines' : '') + (articleSize === 'l' || (articleSize === 'm' && showDescription) ? ' text-overflow-on-two-lines' : '') + (articleSize === 'xs' ? ' text-overflow-on-four-lines' : '')}>{ headline }</div> }
        { showDescription && description && showImage && <div className="article-preview__description text-overflow-on-two-lines" dangerouslySetInnerHTML={{__html: description}} /> }
      </div>
    </Link>
  );
}
 
export default ArticleCard;