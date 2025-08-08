console.clear()

function removerPropriedade(obj, prop) {
  const copia = { ...obj } 
  delete copia[prop]       
  return copia
}

const original = { nome: "Felipe", idade: 17, cidade: "Camaçari" }
const novo = removerPropriedade(original, "idade")

console.log('Novo objeto: ', novo)     
console.log('Objeto Original: ', original) 
