const baseUrl =
  "https://my-json-server.typicode.com/kelishapitts/se_project_react";

export function handleResponse(res) {
  if (res.ok) {
    return res.json();
  }
  // if the server returns an error, reject the promise
  return Promise.reject(`Error: ${res.status}`);
}

export const getItemList = () => {
  return fetch(`${baseUrl}/items`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(handleResponse);
};

export const addItem = ({ name, weather, imageUrl }) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
    },
  }).then(handleResponse);
};
