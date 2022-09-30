const ulMain = document.getElementById("ulMain")
const inserirValorModal = document.getElementById("inserirValorModal")
const butsDiv = document.querySelectorAll(".butDiv1")
const valorTotal = document.getElementById("valorTotal")



const criaCards = (arr) => arr.map(x => {
    // ulMain.innerHTML = ""
    let li = document.createElement("li")
    let p1 = document.createElement("p")
    let section = document.createElement("section")
    let p2 = document.createElement("p")
    let but = document.createElement("button")
    let img = document.createElement("img")

    p1.innerText = `R$ ${Math.trunc(x.value)},00`
    if(x.categoryID == 0){
        p2.innerText = "Entrada"
    }
    else{
        p2.innerText = "Saída"
    }
    img.src = "./assets/img1.jpg"
    but.id = x.id

    li.classList.add("valores")
    li.classList.add("flex")
    li.classList.add("align")
    li.classList.add("justifyBet")
    section.classList.add("secLixo")
    section.classList.add("flex")
    section.classList.add("gap16")
    p2.classList.add("pValores")
    but.classList.add("butLi")

    but.appendChild(img)
    section.append(p2, but)
    li.append(p1, section)
    ulMain.appendChild(li)

})
//criaCards(insertedValues)


const butdiv = Array.from(butsDiv)
butdiv.map(x => {
    x.addEventListener("click", function(){
        if(x.id == "entradas"){
            const entradas = insertedValues.filter(x => {
                if(x.categoryID == 0){
                    return x
                }
            })
            let somaValores = entradas.value
            valorTotal.innerText = `R$ ${somaValores}`
            ulMain.innerHTML = ""
            criaCards(entradas)
        }
        else if(x.id == "saidas"){
            const saidas = insertedValues.filter(x => {
                if(x.categoryID == 1){
                    return x
                }
            })
            let somaValores = saidas.value
            valorTotal.innerText = `R$ ${somaValores}`
            ulMain.innerHTML = ""
            criaCards(saidas)
        }
        else{
            let somaValores = insertedValues.value
            valorTotal.innerText = `R$ ${somaValores}`
            ulMain.innerHTML = ""
            criaCards(insertedValues)
        }
    })
})



let butLi = document.querySelectorAll(".butLi")
let butLi2 = Array.from(butLi)

let contador = 3

inserirValorModal.addEventListener("click", function(){
    const entradaModal = document.getElementById("entrada")
    const saidaModal = document.getElementById("saida")
    const valor = document.getElementById("valor")

    contador ++
    
    const obj = {
        id: contador,
        value: Number(valor.value),
    }
    if(entradaModal.checked == true){
        obj.categoryID = 0
    }
    else{
        obj.categoryID = 1
    }

    ulMain.innerHTML = ""
    insertedValues.push(obj)
    modal.classList.remove("apareceModal")
    criaCards(insertedValues)
})




butLi2.map(x => {
    x.addEventListener("click", function(event){
        let li = event.path[3]
        li.remove()
    })
})




