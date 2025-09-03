console.clear()

function executarOperacao(a){

    return a*2

}
function Callback(a, fn){
    return fn(a)

}

console.log(Callback(3, executarOperacao))