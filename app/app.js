console.log("estou funcionando!");

//Arrays são Listas
// const produtos = ["Fire Stick", "Kindle", "Capa Kindle", "Echo Dot"];
// console.log(produtos);

// //Podemos acessar os elementos por seus índices
// let produtoFavorito = produtos[0];
// console.log(produtoFavorito);

//TEmos métodos/funções para manipular/alterar os Arrays.

// produtos[0] = "Alexa";
// console.log(produtos);

//Push adiciona um item no final do Array
// produtos.push("Alexa");
// console.log(produtos);

// //Pop exclui o ultimo item do Array e retorna este item que pode ser armazenado em uma variável
// let itemExcluido = produtos.pop();
// console.log(produtos);
// console.log(itemExcluido);

// //Unshift -> Adiciona um item no início do Array e "empurra" os outros itens para o próximo indice
// produtos.unshift("Alexa");
// console.log(produtos, "Unshift");


// //Shift -> Exclui um item do início do Array
// itemExcluido = produtos.shift();
// console.log(produtos, "Shift");
// console.log(itemExcluido, "itemExcluido")

// //Delete
// delete produtos[1];
// console.log(produtos, "Shift");


// produtos.splice(1,1);
// console.log(produtos, "Splice");

// produtos.splice(1, 1, "Kindle", "Alexa");
// console.log(produtos, "Splice 2");

// produtos[1] = "Batata";


//sintaxe da matriz
const matriz = [["Array 1"], ["Array 2"]];

// const pedido = [["Fire Stick", "Kindle", "Capa Kindle", "Echo Dot"],[360.05, 379.05, 69, 331.55]];
// console.log(pedido);

// console.log(`O item ${pedido[0][0]} custa ${pedido[1][0]}`);

const pedido = [["Fire Stick", 360.05],["Kindle", 379.05],["Capa Kindle", 69],["Echo Dot", 331.55]];

//Nome é indice 0
console.log(pedido[1][0]);

//Preço é indice 1
console.log(pedido[1][1]);


// const boletim = [["Português", 5, 7, 6, 8],[],[],[],[],[]]

// console.log(boletim[0][]);

//RESPOSTA DO RAFAEL -> GABARITO
const boletim=[["Português",5,7,6,8],["Matemática",5,5,4,4],["História",6,7,8,9],["Geografia",7,6,5,5],["Ciências",8,8,9,9]]
console.log(boletim[0][0]);


//Strings no fundo, também são Arrays
let item1 = "Fire Stick";
console.log(item1[0]);
console.log(item1[4]);
console.log(item1);

let arrayString = Array.from(item1);
console.log(arrayString);
arrayString.splice(4,1,"_");
let stringAlterada = arrayString.toString();
console.log(stringAlterada);


//Objetos;
const obj1 = {
    nome : "Fire Stick",
    preco: 360.05,
    cor: "preto",
    qtde: 1
}
const obj2 = {
    nome : "Kindle",
    preco: 299.05,
    cor: "preto",
    qtde: 2
}
const obj3 = {
    nome : "Capa Kindle",
    preco: 69,
    cor: "preto",
    qtde: 1
}
const obj4 = {
    nome : "Echo Dot",
    preco: 270.55,
    cor: "preto",
    qtde: 1
}


const carrinho = [];
console.log(carrinho);
carrinho.push(obj1, obj2, obj3);
console.log(carrinho);
carrinho.push(obj4);
console.log(carrinho);

const frete = {
    valor : 33.00
}

carrinho.push(frete);
console.log(carrinho);


//Loops

//loop while

//variavel auxiliar
let cont = 0;

let novoArray = []

while(cont<=557){

    console.log(cont);
    cont++ //incremento do loop

    novoArray.push(cont);

}

console.log(novoArray);

//Loop for
for(i=0; i<330; i++){
    console.log(novoArray[i]);
}

let lista = document.createElement('ol');

console.log(lista);


//Exibir o nome de TODOS os itens do meu carrinho.
for(i=0; i<(carrinho.length-1); i++) {
    console.log(carrinho[i].nome);

    let novoLi = document.createElement('li')
    novoLi.innerText = carrinho[i].nome;

    lista.appendChild(novoLi);
}

document.querySelector('body').appendChild(lista);









