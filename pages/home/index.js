const ulMain = document.getElementById("ulMain")
const inserirValorModal = document.getElementById("inserirValorModal")
const butsDiv = document.querySelectorAll(".butDiv1")
const valorTotal = document.getElementById("valorTotal")


const criaCards = (arr) => arr.map(element => {
    // ulMain.innerHTML = ""
    let li = document.createElement("li")
    let p1 = document.createElement("p")
    let section = document.createElement("section")
    let p2 = document.createElement("p")
    let but = document.createElement("button")
    let img = document.createElement("img")

    p1.innerText = `R$ ${Math.trunc(element.value)},00`
    if(element.categoryID == 0){
        p2.innerText = "Entrada"
    }
    else{
        p2.innerText = "Saída"
    }
    img.src = "./assets/img1.jpg"
    but.id = element.id

    li.classList.add("valores")
    li.classList.add("flex")
    li.classList.add("align")
    li.classList.add("justifyBet")
    section.classList.add("secLixo")
    section.classList.add("flex")
    section.classList.add("gap16")
    p2.classList.add("pValores")
    but.classList.add("butLi")

    but.addEventListener("click", function(){
        const id = arr.indexOf(element)
        arr.splice(id, 1)
        ulMain.innerHTML = ""
        criaCards(arr)
        soma(arr)
    })
    soma(arr)
    but.appendChild(img)
    section.append(p2, but)
    li.append(p1, section)
    ulMain.appendChild(li)

})
criaCards(insertedValues)


    

const butdiv = Array.from(butsDiv)
butdiv.map(but => {
    but.addEventListener("click", function(){
        if(but.id == "entradas"){
            const entradas = insertedValues.filter(callback => {
                return callback.categoryID == 0
            })
            soma(entradas)
            ulMain.innerHTML = ""
            criaCards(entradas)
            
        }
        else if(but.id == "saidas"){
            const saidas = insertedValues.filter(callback => {
                return  callback.categoryID == 1
                    
                
            })
            soma(saidas)
            ulMain.innerHTML = ""
            criaCards(saidas)
        }
        else{
            soma(insertedValues)
            ulMain.innerHTML = ""
            criaCards(insertedValues)
        }
    })
})


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
    const valoresTotal = insertedValues.reduce((num1, num2) => num1 + num2.value, 0)
    valorTotal.innerText = `R$ ${Math.trunc(valoresTotal)},00`
    criaCards(insertedValues)
})



function soma(arr){
    const total = arr.reduce((num1, num2) => num1 + num2.value, 0) 
    valorTotal.innerText = `R$ ${Math.trunc(total)},00`
}




