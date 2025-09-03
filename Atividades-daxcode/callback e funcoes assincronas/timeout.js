const fn3 = () => {

    console.log("fn3")

}
const fn2 = () => {

    console.log("fn2")
    fn3()

}
const fn1 = () => {

    setInterval(() => console.log("SetTimeout de Fn1"), 30)
    console.log("fn1")
    fn2()

}
const main = () => {

    fn1()

}

main()