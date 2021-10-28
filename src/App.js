import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from "react";
import Navbar from 'components/navbar/Navbar';
import Home from 'views/home/Home';
import ArticleDetails from 'views/articleDetails/ArticleDetails';
import Bookmarks from 'views/bookmarks/Bookmarks';

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddBookmark = (article) => {

    const updateBookmarks = [
      ...bookmarks,
      article
    ];

    setBookmarks(updateBookmarks);
  }

  const handleRemoveBookmark = (article) => {

    setBookmarks(bookmarks.filter(item => item.id !== article.id));
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
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
            <Route path="/bookmarks">
              <Bookmarks bookmarks={bookmarks} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
