
import PokemonList from "./components/PokemonList"
import { Route, Routes } from "react-router-dom"
import PokemonPage from "./components/PokemonPage"
import PokemonType from "./components/PokemonType"

import Hero from "./components/Hero"
function App() {


  return (
    
    <Routes>
      <Route path="/" element={<PokemonList />} />
      <Route path="/pokemon/:name" element={<PokemonPage />}></Route>
      <Route path="/pokemon/:type" element={<PokemonType />}></Route>
    </Routes>
    
  )
}

export default App
