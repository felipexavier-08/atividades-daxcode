console.clear()

let array1 = [1, 2, 3, 4, 5]

function retorno(array){
    let primeiro = array[0]
    let ultimo = array[array.length - 1]
    return [primeiro, ultimo]
}

console.log(retorno(array1))