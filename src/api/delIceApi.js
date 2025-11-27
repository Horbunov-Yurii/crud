export const delIceApi = (id) => {
  return fetch(`http://localhost:3001/iceCreams/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
};
