// import { Routes, Route } from 'react-router-dom'

// import ScreenPokemonList from './components/screen/pokemonList'
// import ScreenPokemonDetail from './components/screen/pokemonDetail'
// import ScreenNotFound from './components/screen/notFound'
import Header from './components/shared/header'

import './app.css'

function App() {
  return (
    <div className="pk-App">
      <Header />
      <main>
        {/* <AppRoutes /> */}
        <h1>App Routes</h1>
      </main>
    </div>
  )
}

// function AppRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<ScreenPokemonList />} />
//       <Route path="/p/:idOrSlug" element={<ScreenPokemonDetail />} />
//       <Route path="*" element={<ScreenNotFound />} />
//     </Routes>
//   )
// }

export default App
