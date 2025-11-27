
import {getIceApi} from "./api/getIceApi";
import {createItemsMarkup} from "./createMarkup/createIceMarkup";
import { openModal } from "./createMarkup/openModal";
import { postIceApi } from "./api/postIceApi";
import { delIceApi } from "./api/delIceApi";



const listRef = document.querySelector(".js-list");

const formRef = document.querySelector(".modal-form");
const backdrop = document.querySelector(".backdrop");

 formRef.addEventListener("submit", (e) => {
   e.preventDefault();
   const { name, type, calories, price, description } =
     e.currentTarget.elements;
   const data = {
     name: name.value.trim(),
     type: type.value.trim(),
     calories: calories.value.trim(),
     price: price.value.trim(),
     description: description.value.trim(),
   };

    postIceApi(data)
      .then(() => {
        // коли POST завершився — робимо GET
        return getIceApi();
      })
      .then((res) => {
        listRef.innerHTML = createItemsMarkup(res);
        formRef.reset();
        backdrop.style.opacity = "0";
        backdrop.style.pointerEvents = "none";
      })
      .catch((err) => console.log("Error:", err));
 });


//  видалення елементів

listRef.addEventListener("click", (evt)=>{
  if (evt.target.dataset.action === "delete") {
    const itemId = evt.target.closest("LI").id;
    delIceApi(itemId)
      .then(() => {
        // коли DELETE завершився — робимо GET
        return getIceApi();
      })
      .then((res) => {
        listRef.innerHTML = createItemsMarkup(res);
      })
      .catch((err) => console.log("Error:", err));
  }

  // оновлення елементів
  if (evt.target.dataset.action === "edit") {
    
       backdrop.style.opacity = "1";
       backdrop.style.pointerEvents = "auto";

       

  }
})







getIceApi().then((res) => listRef.innerHTML = createItemsMarkup(res));

openModal();