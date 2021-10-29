import './Toast.css';

const Toast = ({ toastClass }) => {

  return (
    <div className="toast">
      { toastClass === 'success' && <div className="toast-message success">saved to bookmarks</div> }
      { toastClass === 'alert' && <div className="toast-message alert">removed from bookmarks</div> }
    </div>
  );
}
 
export default Toast;