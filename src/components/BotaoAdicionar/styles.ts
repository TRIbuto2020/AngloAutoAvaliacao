import styled from 'styled-components'
import { Link } from 'react-router-dom'

import variaveis from '../../styles/variaveis'

export const Circulo = styled(Link)`
  display: flex;
  height: 64px;
  width: 64px;
  background-color: ${variaveis.verde};
  color: #fff;
  position: fixed;
  right: 40px;
  bottom: 40px;
  font-size: 40px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`
