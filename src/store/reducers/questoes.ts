import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Questao from '../../models/Questao'
import * as enums from '../../utils/enums/Questao'
import prova from '../../data/prova'

type QuestaosState = {
  itens: Questao[]
  certas: Questao[]
  erradas: Questao[]
}

const itens = prova

const initialState: QuestaosState = {
  itens,
  certas: [],
  erradas: []
}

const questaosSlice = createSlice({
  name: 'questaos',
  initialState,
  reducers: {
    errar: (state, action: PayloadAction<Questao>) => {
      const questaoJaExiste = state.erradas.find(
        (questao) => questao.id === action.payload.id
      )

      if (!questaoJaExiste) {
        state.certas = [
          ...state.certas.filter((questao) => questao.id !== action.payload.id)
        ]
        state.erradas.push(action.payload)
      }
    },
    acertar: (state, action: PayloadAction<Questao>) => {
      const questaoJaExiste = state.certas.find(
        (questao) => questao.id === action.payload.id
      )

      if (!questaoJaExiste) {
        state.erradas = [
          ...state.erradas.filter((questao) => questao.id !== action.payload.id)
        ]
        state.certas.push(action.payload)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; aval: enums.Aval }>
    ) => {
      const indexDaCerta = state.certas.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaCerta >= 0) {
        state.certas[indexDaCerta].aval = action.payload.aval
      } else {
        const indexDaErrada = state.erradas.findIndex(
          (t) => t.id === action.payload.id
        )

        if (indexDaErrada >= 0) {
          state.erradas[indexDaErrada].aval = action.payload.aval
        }
      }
    }
  }
})

export const { errar, acertar, alteraStatus } = questaosSlice.actions

export default questaosSlice.reducer
