console.clear()

const array1 = [10, 70, 22, 45]


function tudoPar(array){

    let pares = []

    for(let i=0; i<array.length;i++){

        if(i%2 == 0 && array[i] %2 == 0){


            pares.push(array[i])

        }
        
    }

    return pares

}

let retorno = tudoPar(array1)

console.log(retorno)