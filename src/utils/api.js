export const baseUrl =
  "http://localhost:3001";

export function handleResponse(res) {
  if (res.ok) {
    console.log(res.err)
    return res.json();
    
  }
  // if the server returns an error, reject the promise
  return Promise.reject(`Error: ${res.status}`);
}

const getToken = (token) =>{
  if(token){
    const currentToken = localStorage.getItem(token);
    console.log(currentToken)
    return currentToken; 
  }else{
      console.error("No token in storage")
      return null
    }
  }


export const getItemList = () => {
  return fetch(`${baseUrl}/items`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken("jwt")}`,
    
    },
  }).then(handleResponse);
};

export const addItem = (name, weather, imageUrl) => {
  
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken("jwt")}`,
    },
    body: JSON.stringify({
      name,
      weather,
      imageUrl,
    }),
  }).then(handleResponse);
};

export const deleteItem = (id) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken("jwt")}`,
    },
  }).then(handleResponse);
};

export const updateUser = (data) =>{
  return fetch(`${baseUrl}/items/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken("jwt")}`,
    },
    body: JSON.stringify(data)
  }).then(handleResponse)

}

export const addCardLike = (id) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken("jwt")}`,
    },
  }).then(handleResponse);
};

export const removeCardLike = (id) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken("jwt")}`,
    },
  }).then(handleResponse);
};