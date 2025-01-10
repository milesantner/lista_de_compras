/*innerText (propriedade) Just the text content of the element and all its children*/
let nome = prompt("Digite seu nome")
let paragrafo = document.getElementById("paragrafo") /*document é objeto*/ 
paragrafo.innerText = nome 

/*innerHTML The text content of the element, including all spacing and inner HTML tags(volta tag como texto)*/
const outro = prompt("Agora digite uma tag com texto") /*const é um valor que não pode ser alterado*/ 
let outroParagrafo = document.getElementById("outroParagrafo")
outroParagrafo.innerHTML = outro

function alteraP(){
    let n = prompt("Digite o valor que você deseja colocar no texto:")
    let pa = document.getElementById("paragrafo")
    pa.innerText = n
}

function addHabito(){
    const text = prompt("Digite o seu hábito")
    let list = document.getElementById("lista")
    let novoElementoLi = document.createElement("li") /*creatElement is a function*/
    novoElementoLi.innerText = text
    list.append(novoElementoLi) 
}