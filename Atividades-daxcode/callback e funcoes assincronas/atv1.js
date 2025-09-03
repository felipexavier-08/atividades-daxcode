function multiplicar(n1, n2){

    return(n1*n2)

}
function dividir(n1, n2){

    return(n1/n2)

}
function subtrair(n1, n2){

    return(n1-n2)

}
function restoDivisao(n1, n2){

    return(n1%n2)

}
function somar(n1, n2){

    return(n1+n2)

}
function exponenciacao(n1, n2){

    return(n1*n2)

}

function callback(a, b, fn){

    return fn(a,b)

}

const soma = callback(30, 10, somar)
const subtracao = callback(30, 10, subtrair)
const multiplicacao = callback(30, 10, multiplicar)
const divisao = callback(30, 10, dividir)
const exponenciacao1 = callback(30, 10, exponenciacao)
const restodaDivisao = callback(30, 10, restoDivisao)

console.log(soma)
