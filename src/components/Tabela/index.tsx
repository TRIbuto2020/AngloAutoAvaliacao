import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { acertar, errar } from '../../store/reducers/questoes'
import { Linha, Table } from './styles'
import * as enums from '../../utils/enums/Questao'
import BotaoProx from '../BotaoProx'

const contador: number[] = []

const Tabela = () => {
  const questoes = useSelector((state: RootReducer) => state.questoes.itens)
  const dispatch = useDispatch()

  return (
    <Table>
      <thead>
        <tr>
          <th>Numero</th>
          <th>Sua resposta</th>
          <th>Matéria</th>
          <th>Apostila</th>
          {/* <th>Sua Avaliação</th> */}
        </tr>
      </thead>
      <tbody>
        {questoes.map((questao) => (
          <Linha materia={questao.materia} key={questao.id}>
            <td>{questao.id}</td>
            <td>
              <select
                onChange={(evento) => {
                  const jaRespondeu = contador.indexOf(questao.id)
                  if (
                    jaRespondeu !== -1 &&
                    evento.target.value === enums.Resposta.NONE
                  ) {
                    contador.splice(jaRespondeu, 1)
                  } else if (jaRespondeu === -1) {
                    contador.push(questao.id)
                  }
                  console.log(contador)
                  console.log(questoes.length)

                  if (evento.target.value === questao.resposta) {
                    dispatch(acertar(questao))
                  } else {
                    dispatch(errar(questao))
                  }
                }}
              >
                <option value={enums.Resposta.NONE}>
                  {enums.Resposta.NONE}
                </option>
                <option value={enums.Resposta.A}>{enums.Resposta.A}</option>
                <option value={enums.Resposta.B}>{enums.Resposta.B}</option>
                <option value={enums.Resposta.C}>{enums.Resposta.C}</option>
                <option value={enums.Resposta.D}>{enums.Resposta.D}</option>
              </select>
            </td>
            <td>{questao.materia}</td>
            <td>{questao.apostila}</td>
          </Linha>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={4}>
            {contador.length == questoes.length && (
              <BotaoProx destino="/Avaliação" />
            )}
          </td>
        </tr>
      </tfoot>
    </Table>
  )
}

export default Tabela
