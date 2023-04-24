import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { IProfile } from "../interfaces/IProfile";
import { IPost } from "../interfaces/IPost";
import { dummieProfile } from "./../dummieData/profile";

import { getPosts, getProfile } from './../services/mainService';


export const useFfapp = () => {
  const navigate = useNavigate();

  const [logged, setLogged] = useState<string | null>();
  const [errorMsg, setErrorMsg] = useState<string | null>();
  const [profileData, setProfileData] = useState<IProfile>(dummieProfile);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [iniPosts, setIniPosts] = useState<IPost[]>([]);
  
  const handleLogin = (token:string | false, userId:string | false) => {
    if (token) {
      setLogged(token);
      navigate("/");
    }
  }

  const handleSection = (section:string) => {
    switch (section) {
      case "home":
        navigate('/');
      break;
      case "profile":
        navigate('/profile');
      break;
    }
  }

  const handleProfile = (token:string) => {
    getProfile(token)
    .then((result) => {
      setProfileData(result.data);
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

  return {
    logged,
    setLogged,
    errorMsg, setErrorMsg,
    profileData, setProfileData,
    posts, setPosts,
    iniPosts, setIniPosts,
    handleLogin,
    handleSection,
    handleProfile,
    handlePosts,
    handleSearch
  }
}