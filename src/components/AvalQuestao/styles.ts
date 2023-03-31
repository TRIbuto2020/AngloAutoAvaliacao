import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type Props = {
  certo: boolean
}

function determinaCorDeFundo(props: Props) {
  if (props.certo) {
    return variaveis.menta
  } else {
    return variaveis.vermelhoClaro
  }
}

export const Quest = styled.div<Props>`
  background-color: ${determinaCorDeFundo};
  width: 30vw;
  height: 30vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 16px;
  border: 3px solid black;

  h3 {
    font-size: 32px;
    position: absolute;
    top: 16px;
    left: 16px;
  }

  h4 {
    font-size: 24px;
    margin-bottom: 16px;
  }

  p {
    display: flex;
    align-items: center;
    font-size: 20px;
    margin-bottom: 12px;
  }

  p button {
    background-color: transparent;
    font-size: 10px;
    width: 16px;
    height: 16px;
    border-radius: 16px;
    border: 1px solid ${variaveis.cinza};
    color: ${variaveis.cinza};
    margin-left: 8px;
    cursor: pointer;
  }

  select {
    font-size: 24px;
    border-radius: 16px;
    background-color: transparent;
    border: 1px solid black;
    padding: 8px;
  }
`
export const BotNext = styled.button`
  background-color: black;
  color: ${variaveis.cinzinha};
  border: none;
  border-radius: 16px;
  padding: 8px;
  position: absolute;
  bottom: 16px;
  right: 16px;

  &:disabled {
    background-color: transparent;
    color: ${variaveis.cinzaClaro};
    border: 1px dashed ${variaveis.cinzaClaro};
  }
`

export const Ajuda = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    height: 40vh;
    width: 40vw;
    background-color: ${variaveis.amarelo};
    border: 3px solid black;
    border-radius: 16px;
    padding: 5vh 5vw;
    position: relative;

    h1 {
      margin-bottom: 3vh;
    }

    button {
      background-color: transparent;
      font-size: 16px;
      width: 26px;
      height: 26px;
      border-radius: 26px;
      border: 2px solid black;
      color: black;
      cursor: pointer;
      position: absolute;
      bottom: 5vh;
      right: 5vw;
    }
  }
`
