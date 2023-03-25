import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, PostsList, Search } from './components';
import { dummiePosts } from './dummieData/database/posts';

function App() {
  return (
    <>
      <Navbar />

      <div className="container p-4">
        <Search />

        <PostsList posts={ dummiePosts } />
      </div>
    </>
  );
}

export default App;
