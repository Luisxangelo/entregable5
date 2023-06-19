import { Route, Routes as Rutas  } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokemonId from './pages/PokemonId'
import ProtecterRoute from './components/auth/ProtecterRoute'

function App() {
  

  return (
    <section className='font-["Inter"]'>
      <Rutas>
        <Route path='/' element={<Home/>} />

        <Route element={<ProtecterRoute/>}>

           <Route path='/pokedex' element={<Pokedex/>} />
        
           <Route path='/pokedex/:pokemonName' element={<PokemonId/>} />

        </Route>

      </Rutas>
    </section>
  )
}

export default App
