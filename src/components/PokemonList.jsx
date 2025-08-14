import { useState, useEffect } from "react"
import { getPokemon } from "../services/poekeapi"
import Header from "./Header.jsx"
import Hero from "./Hero"
import Footer from "./Footer"
import PokemonCard from "./PokemonCard"

export default function PokemonList() {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        async function fetchData() {
            const data = await getPokemon(50)
            console.log(data)
            setPokemons(data)
        }
        fetchData()
    }
        , [])
    return (
        <>
            <Header />
            <Hero/>
            <div className="grid grid-cols-1 ps-4 pe-4 mt-4
            sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {pokemons.map(pokemon => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
            <Footer/>
            
        </>
    )
}