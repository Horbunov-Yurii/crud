let e=document.querySelector(".open"),t=document.querySelector(".backdrop");e.addEventListener("click",()=>{t.style.opacity="1",t.style.pointerEvents="auto"});let r=document.querySelector(".js-list"),i=document.querySelector(".modal-form");i.addEventListener("submit",e=>{e.preventDefault();let{name:t,type:r,calories:l,price:c,description:o}=e.currentTarget.elements,n={name:t.value.trim(),type:r.value.trim(),calories:l.value.trim(),price:c.value.trim(),description:o.value.trim()};i.reset(),console.log(n)}),fetch("http://localhost:3001/iceCreams").then(e=>e.json()).then(e=>r.innerHTML=e.map(({id:e,name:t,type:r,calories:i,price:l,description:c,image:o})=>`<li class="js-item">
    <img src="${o}" alt="${t}">
    <h2>${t}</h2>
    <p>${r}</p>
    <p>${i}</p>
    <p>${l}</p>
    <p>${c}</p>
</li>`).join(""));
//# sourceMappingURL=crud.48c8207b.js.map
