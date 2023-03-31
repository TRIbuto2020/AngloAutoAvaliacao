import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Botao = styled(Link)`
  background-color: ${variaveis.cinzaClaro};
  text-align: center;
  width: 75%;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  padding: 8px;
  border-radius: 16px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 16px;
`
