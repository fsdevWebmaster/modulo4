import { useEffect, useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, PostsList, Search } from './components';
import { dummiePosts } from './dummieData/database/posts';
import { dummieProfile } from './dummieData/profile';
import { IPost } from './interfaces/IPost';
import { Profile } from './components/profile';

function App() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [section, setSection] = useState<string>('home');

  const handleSearch = (value:string) => {
    if (value) {
      const found = dummiePosts.filter(item => item.text.includes(value));
      setPosts(found);
    }
  }

  useEffect(() => {
    setPosts(dummiePosts);
  }, []);
  

  return (
    <>
      <Navbar 
        onLogoClick={ (sect) => setSection(sect) } 
        onProfileClick={ (sect) => setSection(sect) }/>

      <div className="container p-4">
        { section === 'home' 
          ? 
            <>
              <Search onSearch={ (value) => handleSearch(value)} />
              <PostsList posts={ posts } />
            </>
          :
            <Profile 
              avatar={ dummieProfile.avatar } 
              username={ dummieProfile.username } 
              bio={ dummieProfile.bio } />
        }
      </div>
    </>
  );
}

export default App;
