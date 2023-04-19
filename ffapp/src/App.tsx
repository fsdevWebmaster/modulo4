
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Login, Navbar, PostsList, Search } from './components';
import { useEffect, useState } from 'react';
import Profile from './components/profile';
import { getPosts, getProfile } from './services/mainService';
import { dummieProfile } from './dummieData/profile';
import { IProfile } from './interfaces/IProfile';
import { IPost } from './interfaces/IPost';

function App() {
  const [logged, setLogged] = useState<boolean>(false);
  const [section, setSection] = useState('home');
  const [errorMsg, setErrorMsg] = useState<string | null>();
  const [profileData, setProfileData] = useState<IProfile>(dummieProfile)
  const [posts, setPosts] = useState<IPost[]>([]);
  const [iniPosts, setIniPosts] = useState<IPost[]>([]);

  const handleLogin = (resp:any) => {
    setLogged(resp);
  }

  const handleSection = (section:string) => {
    setSection(section);
  }

  const handleProfile = (token:string) => {
    getProfile(token)
    .then((result) => {
      
      console.log("profile result:", result);


    }).catch((err) => {
      setErrorMsg(`Api response: ${err.response.data.message}`);
      console.log("Error getting profile:", err.response.data.message);
    });
  }

  const handlePosts = (token:string) => {
    getPosts(token)
      .then((result) => {
        const { data } = result;
        setPosts(data);
        setIniPosts(data);
      }).catch((err) => {
        console.log("Error getting posts:", err);
      });
  }

  const handleSearch = (strSearch:string) => {
    if (strSearch) {
      const found = iniPosts.filter(item => item.text.includes(strSearch));
      if (found.length > 0) {
        setPosts(found);
      }
    }
    else {
      setPosts(iniPosts);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLogged(true);
      handleProfile(token);
      handlePosts(token);
    }
    else {
      setLogged(false);
    }
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      setPosts(posts);
    }
  }, [posts]);
  
  
  return (
    <>
      { logged 
        ?
        <>
          <Navbar 
            onLogoClick={ () => handleSection('home') } 
            onProfileClick={ () => { handleSection('profile') } }
          />
          { section === 'home'
            ?
              <div className="container p-4">
                { posts.length > 0
                  ?
                    <>
                        <Search onSearch={ (strSearch) => handleSearch(strSearch) } />
                        <PostsList posts={ posts } />
                    </>
                  :
                  <p className='alert alert-info'>Loading...</p>
                }
              </div>
            :
              <div className="container mt-5">
                { errorMsg && 
                  <p className="alert alert-danger">
                    { errorMsg }
                  </p>    
                }
                <Profile 
                  avatar={ profileData.avatar } 
                  username={ profileData.username }
                  bio={ profileData.bio }
                />
              </div>
          }
        </>
        :
        <Login onLoginComplete={ (resp:any) => { handleLogin(resp) } } />
      }
    </>
  );
}

export default App;
