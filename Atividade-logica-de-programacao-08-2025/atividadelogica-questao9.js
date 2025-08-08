function despesa(array) {
    let arrdespesa = 0

    for (let i = 0; i < array.length; i++) {
        arrdespesa += array[i].preco
    }

    return arrdespesa
}

let produto1 = {
    nome: "produto1",
    preco: 50,
    categoria: "produtos"
}
let produto2 = {
    nome: "produto2",
    preco: 30,
    categoria: "produtos"
}

let produtos = [produto1, produto2]

console.log(`${produto1.preco} + ${produto2.preco} = `,despesa(produtos))
