console.clear()

function dobro(a){

    return a*2

}
function executarOperacao(a, fn){
    return fn(a)

}

console.log(executarOperacao(3, dobro))