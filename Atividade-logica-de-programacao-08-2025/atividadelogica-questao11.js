console.clear()

function maiorMedia(alunos) {
  let maior = 0
  let nomeDoMelhor = ""

  for (let aluno of alunos) {
    let soma = 0
    for (let nota of aluno.notas) {
      soma += nota
    }
    let media = soma / aluno.notas.length

    if (media > maior) {
      maior = media
      nomeDoMelhor = `${aluno.nome} ${aluno.sobrenome}`
    }
  }

  return [nomeDoMelhor, maior]
}

const alunos = [
  { nome: "Aluno1", sobrenome: "sobrenome1", idade: 25, notas: [9, 10, 9, 10] },
  { nome: "Aluno2", sobrenome: "sobrenome2", idade: 32, notas: [7, 7, 8, 7] }
]

console.log(maiorMedia(alunos))