const submitBtn = document.querySelector(".submit")
const mainSec =document.querySelector(".mainSec")
const thankU = document.querySelector(".thankU")
const btns = document.querySelectorAll(".btn")
const rating =document.querySelector(".rating")


btns.forEach((btn)=> {
    btn.addEventListener("click", ()=>{
        rating.textContent = btn.innerHTML
    })
})

    


submitBtn.addEventListener("click", function(){
mainSec.classList.add("hidden")
thankU.classList.remove("hidden")
})