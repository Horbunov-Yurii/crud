export const createItemsMarkup = (array) => {
  const item = array
    .map(({ id, name, type, calories, price, description, image }) => {
      return `<li class="js-item">
    <img src="${image}" alt="${name}">
    <h2>${name}</h2>
    <p>${type}</p>
    <p>${calories}</p>
    <p>${price}</p>
    <p>${description}</p>
</li>`;
    })
    .join("");

  return item;
};
