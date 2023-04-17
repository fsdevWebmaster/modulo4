import axios from "axios"


export const getLogin = (username:string, password:string) => {
  return axios.post(
    "https://three-points.herokuapp.com/api/login",
    { username, password }
  )
}


