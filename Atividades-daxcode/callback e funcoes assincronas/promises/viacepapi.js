console.clear()

const buscarEndereco = async () => {
    const cep = 42800935

    try{

    const request = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    if(request.status!= 200) throw new Error ("Jogando para o catch")
    const dados = await request.json()
    console.log(dados)

    }catch(error){
        console.log("Deu erro")
    }
   
}

buscarEndereco()