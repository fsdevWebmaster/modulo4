
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, PostsList, Search } from './components';

function App() {
  return (
    <>
      <Navbar />

      <div className="container p-4">
        <Search />
        <PostsList />
      </div>
    </>
  );
}

export default App;
