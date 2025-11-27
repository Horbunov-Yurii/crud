export const createItemsMarkup = (array) => {
  const item = array
    .map(({ id, name, type, calories, price, description, image }) => {
      return `<li class="js-item" id="${id}">
    <img src="${image}" alt="${name}">
    <h2>${name}</h2>
    <p>${type}</p>
    <p>${calories}</p>
    <p>${price}</p>
    <p>${description}</p>
    <button class="delete-btn" data-action="delete" type="button">Delete</button>
    <button class="delete-btn" data-action="edit" type="button">Edit</button>
</li>`;
    })
    .join("");

  return item;
};
