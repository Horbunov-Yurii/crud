
import {getIceApi} from "./api/getIceApi";
import {createItemsMarkup} from "./createMarkup/createIceMarkup";
import { openModal } from "./createMarkup/openModal";

openModal()
const listRef = document.querySelector(".js-list");


const formRef = document.querySelector(".modal-form");
formRef.addEventListener("submit", (e)=>{
    e.preventDefault()
     const { name, type, calories, price, description } =
       e.currentTarget.elements;
      const data = {
        name: name.value.trim(),
        type: type.value.trim(),
        calories: calories.value.trim(),
        price: price.value.trim(),
        description: description.value.trim(),
      };
    formRef.reset()
    console.log(data);
    
})


getIceApi().then((res) => listRef.innerHTML = createItemsMarkup(res));

