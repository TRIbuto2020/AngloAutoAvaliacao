import { Botao } from './styles'

type Props = {
  destino: string
}

const BotaoProx = (props: Props) => (
  <Botao to={props.destino}>Proximo passo</Botao>
)

export default BotaoProx
