const butHeader = document.getElementById("butAddNovoValor")
const modal = document.getElementById("modal")
const butCloseModal = document.getElementById("butCloseModal")
const butCloseModal2 = document.getElementById("butCloseModal2")

butHeader.addEventListener("click", function(){
    modal.classList.add("apareceModal")
})

butCloseModal.addEventListener("click", function(){
    modal.classList.remove("apareceModal")
})
butCloseModal2.addEventListener("click", function(){
    modal.classList.remove("apareceModal")
})