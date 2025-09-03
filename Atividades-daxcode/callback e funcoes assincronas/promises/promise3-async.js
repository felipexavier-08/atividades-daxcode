console.clear()

const fazerLogin = () =>{

    return promise = new Promise((resolve) =>{

        setTimeout(() => {console.log("Login Feito"), resolve()}, 1000)

    })

}

const adicionarProdutoCarrinho = () =>{

    return promise = new Promise((resolve) =>{

        setTimeout(() => {console.log("Produto adicionado ao carrinho"), resolve()}, 3000)

    })

}

const fecharCompra = () =>{

    return promise = new Promise((resolve) =>{

        setTimeout(() => {console.log("Compra fechada"), resolve()}, 500)

    })

}



async function executar(){

    console.log("aguardando...")
    await fazerLogin()
    await adicionarProdutoCarrinho()
    await fecharCompra()

}

executar()