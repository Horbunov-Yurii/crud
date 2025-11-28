
// import {getIceApi} from "./api/getIceApi";
// import {createItemsMarkup} from "./createMarkup/createIceMarkup";
// import { openModal } from "./createMarkup/openModal";
// import { postIceApi } from "./api/postIceApi";
// import { delIceApi } from "./api/delIceApi";
// import { updateIceApi } from "./api/updateIceAps";



// const listRef = document.querySelector(".js-list");

// const formRef = document.querySelector(".modal-form");
// const backdrop = document.querySelector(".backdrop");

//  formRef.addEventListener("submit", (e) => {
//    e.preventDefault();
//    const { id, name, type, calories, price, description } =
//      e.currentTarget.elements;
//    const data = {
//      name: name.value.trim(),
//      type: type.value.trim(),
//      calories: calories.value.trim(),
//      price: price.value.trim(),
//      description: description.value.trim(),
//    };

//    // Якщо id є — це UPDATE
//    const request = id.value ? updateIceApi(id.value, data) : postIceApi(data);

//    request
//      .then(() => getIceApi())
//      .then((res) => {
//        listRef.innerHTML = createItemsMarkup(res);
//        formRef.reset();
//        formRef.elements.id.value = ""; // очистити id
//        backdrop.style.opacity = "0";
//        backdrop.style.pointerEvents = "none";
//      })
//      .catch((err) => console.log("Error:", err));

//    // postIceApi(data)
//    //   .then(() => {
//    //     // коли POST завершився — робимо GET
//    //     return getIceApi();
//    //   })
//    //   .then((res) => {
//    //     listRef.innerHTML = createItemsMarkup(res);
//    //     formRef.reset();
//    //     backdrop.style.opacity = "0";
//    //     backdrop.style.pointerEvents = "none";
//    //   })
//    //   .catch((err) => console.log("Error:", err));
//  });


// //  видалення елементів

// listRef.addEventListener("click", (evt)=>{
//   if (evt.target.dataset.action === "delete") {
//     const itemId = evt.target.closest("LI").id;
//     delIceApi(itemId)
//       .then(() => {
//         // коли DELETE завершився — робимо GET
//         return getIceApi();
//       })
//       .then((res) => {
//         listRef.innerHTML = createItemsMarkup(res);
//       })
//       .catch((err) => console.log("Error:", err));
//   }

//   // оновлення елементів
//   if (evt.target.dataset.action === "edit") {

//     if (evt.target.dataset.action === "edit") {
  
//   const li = evt.target.closest("LI");
//   currentEditId = li.id; // ← зберегли id

//   formRef.elements.name.value = li.querySelector("h2").textContent;
//   formRef.elements.type.value = li.querySelectorAll("p")[0].textContent;
//   formRef.elements.calories.value = li.querySelectorAll("p")[1].textContent;
//   formRef.elements.price.value = li.querySelectorAll("p")[2].textContent;
//   formRef.elements.description.value = li.querySelectorAll("p")[3].textContent;

//   openModal();
    
//     //  const li = evt.target.closest("LI");

//     //  const id = li.id;
//     //  const name = li.querySelector("h2").textContent;
//     //  const type = li.querySelectorAll("p")[0].textContent;
//     //  const calories = li.querySelectorAll("p")[1].textContent;
//     //  const price = li.querySelectorAll("p")[2].textContent;
//     //  const description = li.querySelectorAll("p")[3].textContent;

//     //  // заповнюємо форму
//     //  formRef.elements.id.value = id;
//     //  formRef.elements.name.value = name;
//     //  formRef.elements.type.value = type;
//     //  formRef.elements.calories.value = calories;
//     //  formRef.elements.price.value = price;
//     //  formRef.elements.description.value = description;

//     //  // відкриваємо модалку
//     //  backdrop.style.opacity = "1";
//     //  backdrop.style.pointerEvents = "auto";

       

//   }
// })







// getIceApi().then((res) => listRef.innerHTML = createItemsMarkup(res));

// openModal();

//======================================================
//======================================================
//======================================================

// import { getIceApi } from "./api/getIceApi";
// import { createItemsMarkup } from "./createMarkup/createIceMarkup";
// import { openModal } from "./createMarkup/openModal";
// import { postIceApi } from "./api/postIceApi";
// import { delIceApi } from "./api/delIceApi";
// import { updateIceApi } from "./api/updateIceAps";

// const listRef = document.querySelector(".js-list");
// const formRef = document.querySelector(".modal-form");
// const backdrop = document.querySelector(".backdrop");

// // -------------------------
// // ID елемента, який редагуємо
// // -------------------------
// let currentEditId = null;

// // ===================================
// //        SUBMIT (CREATE / UPDATE)
// // ===================================
// formRef.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const { name, type, calories, price, description } = formRef.elements;

//   const data = {
//     name: name.value.trim(),
//     type: type.value.trim(),
//     calories: calories.value.trim(),
//     price: price.value.trim(),
//     description: description.value.trim(),
//   };

//   let request;

//   if (currentEditId) {
//     // UPDATE
//     request = updateIceApi(currentEditId, data);
//   } else {
//     // CREATE
//     request = postIceApi(data);
//   }

//   request
//     .then(() => getIceApi())
//     .then((res) => {
//       listRef.innerHTML = createItemsMarkup(res);
//       formRef.reset();
//       currentEditId = null; // ⬅ після update обовʼязково очищаємо
//       closeModal();
//     })
//     .catch((err) => console.log("Error:", err));
// });

// // ===================================
// //           DELETE & EDIT
// // ===================================
// listRef.addEventListener("click", (evt) => {
//   // ---------------- DELETE ----------------
//   if (evt.target.dataset.action === "delete") {
//     const itemId = evt.target.closest("LI").id;

//     delIceApi(itemId)
//       .then(() => getIceApi())
//       .then((res) => {
//         listRef.innerHTML = createItemsMarkup(res);
//       })
//       .catch((err) => console.log("Error:", err));
//   }

//   // ---------------- EDIT ----------------
//   if (evt.target.dataset.action === "edit") {
//     const li = evt.target.closest("LI");

//     // зберігаємо id редагованого елемента
//     currentEditId = li.id;

//     // заповнюємо форму
//     formRef.elements.name.value = li.querySelector("h2").textContent;
//     formRef.elements.type.value = li.querySelectorAll("p")[0].textContent;
//     formRef.elements.calories.value = li.querySelectorAll("p")[1].textContent;
//     formRef.elements.price.value = li.querySelectorAll("p")[2].textContent;
//     formRef.elements.description.value =
//       li.querySelectorAll("p")[3].textContent;

//     openModal();
//   }
// });

// // ===================================
// //             РЕНДЕР ПРИ СТАРТІ
// // ===================================
// getIceApi().then((res) => {
//   listRef.innerHTML = createItemsMarkup(res);
// });

// // ===================================
// //           ФУНКЦІЯ ЗАКРИТТЯ МОДАЛКИ
// // ===================================
// function closeModal() {
//   backdrop.style.opacity = "0";
//   backdrop.style.pointerEvents = "none";
// }

// // відкриття модалки
// openModal();


//==================================================================
//==================================================================
//==================================================================

import { getIceApi } from "./api/getIceApi";
import { createItemsMarkup } from "./createMarkup/createIceMarkup";
import { postIceApi } from "./api/postIceApi";
import { delIceApi } from "./api/delIceApi";
import { updateIceApi } from "./api/updateIceAps";

const listRef = document.querySelector(".js-list");
const formRef = document.querySelector(".modal-form");
const backdrop = document.querySelector(".backdrop");
const openModalBtn = document.querySelector(".open"); // ⬅ Додаємо реф на кнопку відкриття

// -------------------------
// ID елемента, який редагуємо
// -------------------------
let currentEditId = null;

// ===================================
//        ФУНКЦІЇ ВІДКРИТТЯ / ЗАКРИТТЯ
// ===================================

/**
 * Функція для безпосереднього відкриття модалки
 */
function openModalHandler() {
  // ⬅ Нова чиста функція
  backdrop.style.opacity = "1";
  backdrop.style.pointerEvents = "auto";
}

/**
 * Функція для безпосереднього закриття модалки
 */
function closeModal() {
  backdrop.style.opacity = "0";
  backdrop.style.pointerEvents = "none";
}

// ===================================
//          ІНІЦІАЛІЗАЦІЯ ОБРОБНИКА КНОПКИ 'OPEN'
// ===================================
openModalBtn.addEventListener("click", openModalHandler); // ⬅ Використовуємо нову функцію

// ===================================
//        SUBMIT (CREATE / UPDATE)
// ===================================
formRef.addEventListener("submit", (e) => {
  e.preventDefault();

  const { name, type, calories, price, description } = formRef.elements;

  const data = {
    name: name.value.trim(),
    type: type.value.trim(),
    calories: calories.value.trim(),
    price: price.value.trim(),
    description: description.value.trim(),
  }; 

 
  let request;

  if (currentEditId) {
    //update
    request = updateIceApi(currentEditId, data);
  } else {
    // CREATE
    request = postIceApi(data);
  }

  request
    .then(() => getIceApi())
    .then((res) => {
      listRef.innerHTML = createItemsMarkup(res);
      formRef.reset();
      currentEditId = null;
      closeModal();
    })
    .catch((err) => console.log("Error:", err));
});

// ===================================
//           DELETE & EDIT
// ===================================
listRef.addEventListener("click", (evt) => {
  // ---------------- DELETE ----------------
  if (evt.target.dataset.action === "delete") {
    const itemId = evt.target.closest("LI").id;

    delIceApi(itemId)
      .then(() => getIceApi())
      .then((res) => {
        listRef.innerHTML = createItemsMarkup(res);
      })
      .catch((err) => console.log("Error:", err));
  } // ---------------- EDIT ----------------

  if (evt.target.dataset.action === "edit") {
    const li = evt.target.closest("LI"); // зберігаємо id редагованого елемента

    currentEditId = li.id; // заповнюємо форму

    formRef.elements.name.value = li.querySelector("h2").textContent;
    formRef.elements.type.value = li.querySelectorAll("p")[0].textContent;
    formRef.elements.calories.value = li.querySelectorAll("p")[1].textContent;
    formRef.elements.price.value = li.querySelectorAll("p")[2].textContent;
    formRef.elements.description.value =
      li.querySelectorAll("p")[3].textContent;

    openModalHandler(); // ⬅ Викликаємо нову функцію, яка відкриває модалку
  }
});

// ===================================
//             РЕНДЕР ПРИ СТАРТІ
// ===================================
getIceApi().then((res) => {
  listRef.innerHTML = createItemsMarkup(res);
});


//===============================================================
//===============================================================
//===============================================================

// import { getIceApi } from "./api/getIceApi";
// import { createItemsMarkup } from "./createMarkup/createIceMarkup";
// import { openModal } from "./createMarkup/openModal";
// import { postIceApi } from "./api/postIceApi";
// import { delIceApi } from "./api/delIceApi";
// import { updateIceApi } from "./api/updateIceAps";

// const listRef = document.querySelector(".js-list");
// const formRef = document.querySelector(".modal-form");
// const backdrop = document.querySelector(".backdrop");

// // -------------------------
// let currentEditId = null;
// // -------------------------

// // ===================================
// //        SUBMIT (CREATE / UPDATE)
// // ===================================
// formRef.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const { name, type, calories, price, description } = formRef.elements;

//   const data = {
//     name: name.value.trim(),
//     type: type.value.trim(),
//     calories: calories.value.trim(),
//     price: price.value.trim(),
//     description: description.value.trim(),
//   };

//   let request;

//   if (currentEditId) {
//     request = updateIceApi(currentEditId, data);
//   } else {
//     request = postIceApi(data);
//   }

//   request
//     .then(() => getIceApi())
//     .then((res) => {
//       listRef.innerHTML = createItemsMarkup(res);
//       formRef.reset();
//       currentEditId = null;
//       closeModal();
//     })
//     .catch((err) => console.log("Error:", err));
// });

// // ===================================
// //           DELETE & EDIT
// // ===================================
// listRef.addEventListener("click", (evt) => {
//   const action = evt.target.dataset.action;

//   if (!action) return;

//   // --------------------- DELETE --------------------
//   if (action === "delete") {
//     const itemId = evt.target.closest("LI").id;

//     delIceApi(itemId)
//       .then(() => getIceApi())
//       .then((res) => {
//         listRef.innerHTML = createItemsMarkup(res);
//       })
//       .catch((err) => console.log("Error:", err));
//   }

//   // --------------------- EDIT ----------------------
//   if (action === "edit") {
//     const li = evt.target.closest("LI");

//     currentEditId = li.id;

//     const ps = li.querySelectorAll("p");

//     formRef.elements.name.value = li.querySelector("h2").textContent;
//     formRef.elements.type.value = ps[0].textContent;
//     formRef.elements.calories.value = ps[1].textContent;
//     formRef.elements.price.value = ps[2].textContent;
//     formRef.elements.description.value = ps[3].textContent;

//     openModal();
//   }
// });

// // ===================================
// //             РЕНДЕР ПРИ СТАРТІ
// // ===================================
// getIceApi().then((res) => {
//   listRef.innerHTML = createItemsMarkup(res);
// });

// // ===================================
// //             closeModal()
// // ===================================
// function closeModal() {
//   backdrop.style.opacity = "0";
//   backdrop.style.pointerEvents = "none";
// }