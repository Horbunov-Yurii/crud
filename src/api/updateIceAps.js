export const updateIceApi = (id, iceCream) => {
    const option = {
      method: "PUT",
      body: JSON.stringify(iceCream),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };
  return fetch(`http://localhost:3001/iceCreams/${id}`,option).then((res) => res.json());
};
