let e=document.querySelector(".js-list");fetch("http://localhost:3000/iceCreams").then(e=>e.json()).then(i=>e.innerHTML=i.map(({id:e,name:i,type:t,calories:p,price:s,description:c,image:l})=>`<li class="js-item">
    <img src="${l}" alt="${i}">
    <h2>${i}</h2>
    <p>${t}</p>
    <p>${p}</p>
    <p>${s}</p>
    <p>${c}</p>
</li>`).join(""));
//# sourceMappingURL=crud.418d6e2e.js.map
