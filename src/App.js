import logo from './logo.svg';
import './App.css';
import NewIssue from './components/NewIssue'
import RepoViewer from './components/RepoViewer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/new-issue/:repoID" component={NewIssue}>
        </Route>
        <Route path="/" component={RepoViewer}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
