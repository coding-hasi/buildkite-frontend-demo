import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ROUTER_ROUTES } from './configs/constants/APP_ROUTES'
import Home from './features/Home'
import Favourites from './features/Favourites'
import AppContainer from './components/AppContainer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTER_ROUTES.HOME} element={<AppContainer />}>
          <Route index element={<Home />} />
          <Route path={ROUTER_ROUTES.FAVOURITES} element={<Favourites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
