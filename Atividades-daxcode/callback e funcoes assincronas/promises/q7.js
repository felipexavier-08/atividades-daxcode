

const myPromise = new Promise((resolve) => {


    setTimeout(() => {
    
        const pessoa ={

            nome: "carlos"
            }
        resolve(pessoa)
        })

    }, 1000);
 

myPromise.then((Response) => {
    console.log(Response)
})