import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from 'components/navbar/Navbar';
import Home from 'views/home/Home';
import ArticleDetails from 'views/articleDetails/ArticleDetails';

function App() {
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
              <ArticleDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
