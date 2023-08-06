import { baseUrl, handleResponse } from "./api";

export const signUp = ({ name, avatar, email, password }) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  }).then(handleResponse)
  .then((res)=> res);
};

export const updateProfile = ({ name, avatar}) => {
  return fetch(`${baseUrl}/users/me/profile`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar}),
  }).then(handleResponse);
};

export const signIn = ({ email, password }) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({ email, password }),
  }).then(handleResponse)
  .then((data)=>{
    if(data){
      localStorage.getItem("jwt",data.token)
      return data
    }
  })
};


export const checkToken = (token) => {
    return fetch(`${baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    .then(handleResponse).then((data)=>data)
  }