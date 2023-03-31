import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Tabela from '../../components/Tabela'
import { Principal } from './styles'

const Main = () => {
  const { certas, erradas } = useSelector(
    (state: RootReducer) => state.questoes
  )

  return (
    <Principal>
      <h1>Main</h1>
      <p>Certas: {certas.length}</p>
      <p>Erradas: {erradas.length}</p>
      <Tabela />
    </Principal>
  )
}

export default Main
