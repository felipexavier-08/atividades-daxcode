console.clear()

function repeticao(valor, repet){

    let arrretorno = []

    for(let i=0; i<repet; i++){

        arrretorno.push(valor)
    }

    return arrretorno

}
const repetir = repeticao("Felipe",5)

console.log(repetir)