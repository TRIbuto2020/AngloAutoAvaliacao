import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import * as enums from '../../utils/enums/Questao'
import { numQuest } from '../../data/prova'
import { Ajuda, BotNext, Quest } from './styles'
import { alteraStatus } from '../../store/reducers/questoes'
import BotaoProx from '../BotaoProx'

const AvalQuestao = () => {
  const dispatch = useDispatch()
  const questCertas = useSelector((state: RootReducer) => state.questoes.certas)
  const [questaoNumero, setQuestaoNumero] = useState(1)

  const [estaCerta, setEstaCerta] = useState(
    questCertas.find((questao) => questao.id === questaoNumero)
  )

  const [questao, setQuestao] = useState(
    useSelector((state: RootReducer) => state.questoes.itens[questaoNumero - 1])
  )

  const [ajudaAberta, setAjudaAberta] = useState(false)
  const [avaliado, setAvaliado] = useState(enums.Aval.NONE)

  const proxQuest = useSelector(
    (state: RootReducer) => state.questoes.itens[questaoNumero]
  )

  return (
    <>
      <Quest certo={estaCerta ? true : false}>
        <h3>
          {questaoNumero} - {questao.materia}
        </h3>
        {estaCerta ? <h4>Correta!</h4> : <h4>Errada...</h4>}
        <div>
          <p>
            Sua Avaliação<button onClick={() => setAjudaAberta(true)}>?</button>
          </p>
        </div>
        <select
          value={avaliado}
          onChange={(event) =>
            setAvaliado(event.target.value as enums.Aval.NONE)
          }
        >
          <option value={enums.Aval.NONE}>{enums.Aval.NONE}</option>
          <option value={enums.Aval.I}>{enums.Aval.I}</option>
          <option value={enums.Aval.II}>{enums.Aval.II}</option>
          <option value={enums.Aval.III}>{enums.Aval.III}</option>
          <option value={enums.Aval.IV}>{enums.Aval.IV}</option>
        </select>

        {questaoNumero < numQuest ? (
          <BotNext
            disabled={avaliado !== enums.Aval.NONE ? false : true}
            onClick={() => {
              const questNova = {
                id: questao.id,
                aval: avaliado
              }
              dispatch(alteraStatus(questNova))
              if (questaoNumero < numQuest) {
                setQuestaoNumero(questaoNumero + 1)
                setEstaCerta(
                  questCertas.find(
                    (questao) => questao.id === questaoNumero + 1
                  )
                )
                setQuestao(proxQuest)

                setAvaliado(enums.Aval.NONE)
              } else if (questaoNumero === numQuest) {
                alert('foiiii')
              }
            }}
          >
            Próxima Questão
          </BotNext>
        ) : (
          avaliado !== enums.Aval.NONE && <BotaoProx destino={'/Resultados'} />
        )}
      </Quest>
      {ajudaAberta && (
        <Ajuda>
          <div>
            <h1>Critérios de análise de prova</h1>
            <p>I - Acertou a questão com consciência.</p>
            <p>
              II - Conhece o assunto, mas errou a questão por erro de
              interpretação e/ou procedimento matemático (contas).{' '}
            </p>
            <p>
              III - Identifica o assunto, mas trava numa etapa/procedimento
              específico ou mesmo na leitura das alternativas. Geralmente é
              aquela questão em que você fica entre duas alternativas.
            </p>
            <p>IV - “Chute” por desconhecimento da matéria. </p>
            <p>V - “Chute” por problema na administração do tempo de prova.</p>
            <button onClick={() => setAjudaAberta(false)}>X</button>
          </div>
        </Ajuda>
      )}
    </>
  )
}

export default AvalQuestao
