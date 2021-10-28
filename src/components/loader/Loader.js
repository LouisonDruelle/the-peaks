import './Loader.css';
import loader from 'assets/loader.svg';

const Loader = () => {
  return (  
    <div className="loader">
      <img className="loader__image" src={loader} alt="loader" />
    </div>
  );
}
 
export default Loader;