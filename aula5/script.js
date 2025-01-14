let listaDeCompras = []

function addItem(){
    let itemInput = document.getElementById("item")
    let qntdInput = document.getElementById("qntd")

    if(itemInput.value.trim() === ""){ /*texto vazio, trim tira todos os espaços vazios*/
        return
    }

    let newItem = {
        id: Date.now(),
        nome: itemInput.value, /*pega o valor que a pessoa digitou*/
        qntd: qntdInput.value || 1,
        comprado: false
    }
    listaDeCompras.push(newItem)
    saveData()
    updateInterface()

    itemInput.value = ""
    qntdInput.value = ""
    itemInput.focus()
}

function removeItem(id){
    listaDeCompras = listaDeCompras.filter((item) => item.id != id)
    saveData()
    updateInterface()
}

function cleanList(){
    listaDeCompras = []
    saveData()
    updateInterface()
}

function updateInterface(){
    let lista = document.querySelector(".list")
    lista.innerHTML = " "

    for(let i=0; i<listaDeCompras.length; i++){
        let item = document.createElement("li") /*? if : else*/
        item.innerHTML = `
        <input type='checkbox' onchange="toggleItem(${listaDeCompras[i].id})"${listaDeCompras[i].comprado ? "checked" : ""}/> 
        <p>${listaDeCompras[i].nome} x ${listaDeCompras[i].qntd}</p>
        <button onclick="removeItem(${listaDeCompras[i].id})">X</button>`
        lista.append(item) /*append() is used to add HTML content or an element to the end of an existing element, in this case to the end of the list*/
    }
}

function toggleItem(id){
    const item = listaDeCompras.find(item => item.id == id)
    item.comprado = !item.comprado
    saveData()
}

function cleanBoughts(){
    listaDeCompras = listaDeCompras.filter((item) => item.comprado != true)
    saveData()
    updateInterface()
}

/* toggleItem, tipo um interruptor, checkbox*/

document.getElementById("item").addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addItem()
    }
})

document.getElementById("qntd").addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addItem()
    }
})

function loadData(){
    const data = localStorage.getItem("listaDeCompras")
    
    if(data){
        listaDeCompras = JSON.parse(data) /*Use the JavaScript function JSON.parse() to convert text into a JavaScript object*/
        updateInterface()
    }
}

function saveData(){
    localStorage.setItem("listaDeCompras", JSON.stringify(listaDeCompras)) /*locastorage, memória local do navegador (fica até limpar), stringify transfroma array em texto, JSON is a format for storing and transporting data. JSON is often used when data is sent from a server to a web page, sessionstorage apaga depois de fechar a aba*/
}

loadData()