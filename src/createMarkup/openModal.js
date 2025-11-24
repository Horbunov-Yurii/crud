const openModalBtn = document.querySelector(".open");
const backdrop = document.querySelector(".backdrop");

export const openModal =()=> {
    openModalBtn.addEventListener("click", ()=>{
    backdrop.style.opacity = "1"
    backdrop.style.pointerEvents = "auto"
})
}

