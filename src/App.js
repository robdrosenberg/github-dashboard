import logo from './logo.svg';
import './App.css';
import NewIssue from './components/NewIssue'
import RepoViewer from './components/RepoViewer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App({ data }) {
  return (
    <Router>
      <Switch>
        <Route path="/new-issue">
          <NewIssue />
        </Route>
        <Route path="/">
          <RepoViewer data={data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
