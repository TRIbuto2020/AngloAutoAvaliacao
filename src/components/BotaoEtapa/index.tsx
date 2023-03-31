import { Botao } from './styles'

type Props = {
  link: string
  text: string
}
const BotaoEtapa = (props: Props) => {
  return <Botao to={props.link}>{props.text}</Botao>
}

export default BotaoEtapa
