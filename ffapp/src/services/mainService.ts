import axios from "axios"
const baseUrl = "https://three-points.herokuapp.com";

export const getLogin = (username:string, password:string) => {
  return axios.post(
    `${ baseUrl }/api/login`,
    { username, password }
  )
}

export const getProfile = ( token:string ) => {
  return axios.get(
    `${ baseUrl }/api/users/${ '621bfef9621cd815d4c12388' }`,
    { headers: { 'Authorization': `Bearer ${ token }` } }
  )
}

export const getPosts = ( token:string ) => {
  return axios.get(
    `${ baseUrl }/api/posts`,
    { headers: { 'Authorization': `Bearer ${ token }` } }
  )
}


