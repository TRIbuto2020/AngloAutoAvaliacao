import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import EstiloGlobal, { Container } from './styles'

import store from './store'
import Avaliacao from './pages/Avaliacao'
import Resultados from './pages/Resultados'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Avaliação',
    element: <Avaliacao />
  },
  {
    path: '/Resultados',
    element: <Resultados />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
