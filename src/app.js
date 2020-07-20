import React from 'react'
import { Routes, Route } from 'react-router-dom'

import PokemonListScreen from './screens/pokemonList'
import PokemonDetailScreen from './screens/pokemonDetail'
import NotFoundScreen from './screens/notFound'

import Header from './components/shell/header'

function App () {
  return (
    <div className='App'>
      <Header />
      <main>
        <AppRoutes />
      </main>
    </div>
  )
}

function AppRoutes () {
  return (
    <Routes>
      <Route path='/' element={<PokemonListScreen />} />
      <Route path='/:pokemonId' element={<PokemonDetailScreen />} />
      <Route path='*' element={<NotFoundScreen />} />
    </Routes>
  )
}

export default App
