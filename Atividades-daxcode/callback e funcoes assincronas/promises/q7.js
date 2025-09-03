const myPromise = new Promise((resolve, reject) => {

    const pessoa ={

        nome: "carlos"

    }
    resolve(pessoa)
})

myPromise.then((Response) => {
    console.log(Response.nome)
})