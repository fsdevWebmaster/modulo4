
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Login, Navbar, PostsList, Search } from './components';
import { useEffect, useState } from 'react';

function App() {

  const [logged, setLogged] = useState<boolean>(false);

  const handleLogin = (resp:any) => {
    setLogged(resp);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLogged(true);
    }
    else {
      setLogged(false);
    }
  }, []);
  

  return (
    <>
      { logged 
        ?
        <>
          <Navbar />
          <div className="container p-4">
            <Search />
            <PostsList />
          </div>
        </>
        :
        <Login onLoginComplete={ (resp:any) => { handleLogin(resp) } } />
      }
    </>
  );
}

export default App;
