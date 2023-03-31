import * as enums from '../utils/enums/Questao'

class Questao {
  materia: enums.Materia
  resposta: enums.Resposta
  apostila: number
  id: number
  setor: string
  aula: number
  aval?: enums.Aval

  constructor(
    materia: enums.Materia,
    resposta: enums.Resposta,
    apostila: number,
    id: number,
    setor: string,
    aula: number,
    aval?: enums.Aval
  ) {
    this.materia = materia
    this.resposta = resposta
    this.apostila = apostila
    this.id = id
    this.aval = aval
    this.setor = setor
    this.aula = aula
  }
}

export default Questao
