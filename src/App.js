import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout'
import RepoViewer from './components/RepoViewer'

function App({ data }) {
  return (
    <Layout pageTitle="Repositories">
      <RepoViewer data={data} />
    </Layout>
  );
}

export default App;
