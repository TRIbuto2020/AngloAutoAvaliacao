import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import { MainContainer, Titulo } from '../../styles'

import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const tarefas = useSelector((state: RootReducer) => state.tarefas.itens)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = tarefas

    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) =>
          item.titulo.toLocaleLowerCase().search(termo.toLocaleLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio == 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }

      return tarefasFiltradas
    } else {
      return tarefas
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? `com: "${termo}"` : ''
    const plr = quantidade !== 1 ? 's' : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefa${plr} ${complementacao}`
    } else {
      mensagem = `${quantidade} tarefa${plr} ${criterio} ${valor} ${complementacao}`
    }

    return mensagem
  }

  const listaTarefas = filtraTarefas()
  const mensagem = exibeResultadoFiltragem(listaTarefas.length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {listaTarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              descricao={t.descricao}
              titulo={t.titulo}
              status={t.status}
              prioridade={t.prioridade}
              id={t.id}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeTarefas
