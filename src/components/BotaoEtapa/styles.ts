import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Botao = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding: 8px;
  background-color: ${variaveis.amarelo};
  color: #000;
  font-weight: bold;
  text-decoration: none;
  border: 2px solid black;
  margin: 0 auto 1px;
  border-radius: 16px;
`
