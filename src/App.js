import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from "react";
import Navbar from 'components/navbar/Navbar';
import Home from 'views/home/Home';
import ArticleDetails from 'views/articleDetails/ArticleDetails';
import Bookmarks from 'views/bookmarks/Bookmarks';
import ArticleSearch from 'views/articleSearch/ArticleSearch';
import Footer from 'components/footer/Footer';
import Toast from 'components/toast/Toast';

function App() {
  const [searchText, setSearchText] = useState('');
  const [bookmarks, setBookmarks] = useState([]);
  const [toastClass, setToastClass] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleSearchText = (inputText) => {

    setSearchText(inputText);
  }

  const handleAddBookmark = (article) => {

    const updateBookmarks = [
      ...bookmarks,
      article
    ];

    setBookmarks(updateBookmarks);
    setToastClass('success');

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 1000);
  }

  const handleRemoveBookmark = (article) => {

    setBookmarks(bookmarks.filter(item => item.id !== article.id));
    setToastClass('alert');

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 1000);
  }

  return (
    <Router>
      <div className="App">
        <Navbar
          searchText={searchText}
          handleSearchText={handleSearchText}
        />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/articles/:id">
              <ArticleDetails
                bookmarks={bookmarks}
                handleAddBookmark={handleAddBookmark}
                handleRemoveBookmark={handleRemoveBookmark}
              />
            </Route>
            <Route path="/search">
              <ArticleSearch searchText={searchText} />
            </Route>
            <Route path="/bookmarks">
              <Bookmarks bookmarks={bookmarks} />
            </Route>
          </Switch>
        </div>
        { showToast && <Toast toastClass={toastClass} /> }
        <Footer />
      </div>
    </Router>
  );
}

export default App;
