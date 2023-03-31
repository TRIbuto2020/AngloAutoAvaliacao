import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enums/Questao'

type Props = {
  materia: string
}

export const Table = styled.table`
  background-color: ${variaveis.cinzaClaro};
  margin: 0 auto;
  border-collapse: collapse;
  border-radius: 16px;

  th,
  td {
    border-left: 1px solid ${variaveis.cinza};
    border-top: 1px solid ${variaveis.cinza};
    padding: 8px;
    text-align: center;

    &:first-child {
      border-left: none;
    }
  }

  select {
    background-color: transparent;

    option {
      background-color: transparent;
    }
  }

  th {
    border-top: none;
  }

  tr {
    &:last-child {
      td:first-child {
        border-bottom-left-radius: 16px;
      }
      td:last-child {
        border-bottom-right-radius: 16px;
      }
    }
  }
`

function determinaCorDeFundo(props: Props) {
  if (props.materia === enums.Materia.FIS) {
    return variaveis.vermelhoClaro
  } else if (props.materia === enums.Materia.MAT) {
    return variaveis.azul
  } else if (props.materia === enums.Materia.BIO) {
    return variaveis.menta
  } else if (props.materia === enums.Materia.HIS) {
    return variaveis.lavanda
  } else if (props.materia === enums.Materia.POR) {
    return variaveis.rosaClaro
  } else if (props.materia === enums.Materia.GEO) {
    return variaveis.laranja
  } else if (props.materia === enums.Materia.QUI) {
    return variaveis.amareloClaro
  } else if (props.materia === enums.Materia.FUV) {
    return variaveis.turquesa
  } else if (props.materia === enums.Materia.ING) {
    return variaveis.roxinho
  }
}

export const Linha = styled.tr<Props>`
  background-color: ${determinaCorDeFundo};
`
