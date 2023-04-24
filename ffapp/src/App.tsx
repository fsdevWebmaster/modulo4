import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Login, Navbar, PostsList, Search } from './components';
import Profile from './components/profile';
import { useFfapp } from './hooks/useFfapp';

function App() {
  const { logged, setLogged, handleLogin, profileData, posts, setPosts,
          handleSection, handleProfile, handlePosts, handleSearch } = useFfapp();


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLogged(token);
      handleProfile(token);
      handlePosts(token);
    }
    else {
      setLogged(null);
    }
  }, []);

  useEffect(() => {
    if (logged) {
      setLogged(logged);
      handleProfile(logged);
      handlePosts(logged);
    }
  }, [logged]);

  useEffect(() => {
    if (posts.length > 0) {
      setPosts(posts);
    }
  }, [posts]);
  
  
  return (
    <>
    { logged && 
      <Navbar 
        onLogoClick={ () => handleSection('home') } 
        onProfileClick={ () => { handleSection('profile') } }
      />
    }
      <div className="container p-4">
        { logged &&
          <Search onSearch={ (strSearch) => handleSearch(strSearch) } />
        }
        <Routes>
          <Route path='/' element={ <PostsList posts={ posts } /> } />
          <Route path='/profile' element={ <Profile 
              avatar={ profileData.avatar } 
              username={ profileData.username }
              bio={ profileData.bio }
            /> } 
          />
          <Route path='/login' element={ <Login onLoginComplete={ (token, userId) => { handleLogin(token, userId) } } /> } />
        </Routes>
      </div>
    </>
  );
}

export default App;
