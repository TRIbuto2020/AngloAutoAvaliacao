import BotaoEtapa from '../../components/BotaoEtapa'
import { Barra } from './styles'

const BarraLateral = () => (
  <Barra>
    <h1>DevNav</h1>
    <BotaoEtapa link="/" text="Respostas"></BotaoEtapa>
    <BotaoEtapa link="/Avaliação" text="Avaliação"></BotaoEtapa>
    <BotaoEtapa link="/Resultados" text="Resultados"></BotaoEtapa>
  </Barra>
)

export default BarraLateral
