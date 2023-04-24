import axios from "axios"
const baseUrl = "https://three-points.herokuapp.com";

export const getLogin = (username:string, password:string) => {
  return axios.post(
    `${ baseUrl }/api/login`,
    { username, password }
  )
}

export const getProfile = ( token:string ) => {
  if (localStorage.getItem("userId")) {
    const userId = localStorage.getItem("userId")
    return axios.get(
      `${ baseUrl }/api/users/${userId}`,
      { headers: { 'Authorization': `Bearer ${ token }` } }
    )
  }

  return axios.get(
    `${ baseUrl }/api/users/me`,
    { headers: { 'Authorization': `Bearer ${ token }` } }
  )
}

export const getPosts = ( token:string ) => {
  return axios.get(
    `${ baseUrl }/api/posts`,
    { headers: { 'Authorization': `Bearer ${ token }` } }
  )
}

export const updateLikes = ( token:string, postId:string ) => {
  return axios.get(
    `${ baseUrl }/api/posts/${postId}/like`,
    { headers: { 'Authorization': `Bearer ${ token }` } }
  )
}

