import { useParams, useNavigate } from "react-router-dom";
import { use, useEffect, useState } from "react";
import { getPokemonByName } from "../services/poekeapi";
//Con el "UseParams" recupera el nombre del pokemon escogido (ver "app")
//una vez que se haya cambiado la variable useEffect detecta que hubo un cambio en la variable "name"
//UseState hace que una variable en un principio tenga un valor y despues de que useEffect se active se setea pokemon, con useState
//Ahora "pokemon", es un pokemon y dependiendo del valor de pokemon se renderiza algo 
//la funcion "PokemonPage" es llamada en "App"
export default function PokemonPage() {
    const { name } = useParams()
    const navigate = useNavigate()
    const [pokemon, setPokemon] = useState("Carga")
    const [borderColor, setBColor] = useState("")
    const [Color1, setColor1] = useState("")
    const [Color2, setColor2] = useState("")
    const [typeColor, setTypeColor] = useState("")
    const [bgColor, setBgColor] = useState("")
    useEffect(() => {
        async function fetchData() {
            const data = await getPokemonByName(name)
            setPokemon(data)
        }
        fetchData()

    }, [name])

    useEffect(() => {
        if (!pokemon || pokemon === "Carga") return

        const type = pokemon.types[0].type.name
        switch (type) {
            case "grass":
                setBColor("border-emerald-500")
                setColor1("from-green-600")
                setColor2("to-purple-900")
                setTypeColor("bg-emerald-100")
                setBgColor("bg-gradient-to-br from-[#f0fff0] via-[#d0f0c0] to-[#a5d6a7]")
                break
            case "fire":
                setBColor("border-orange-700")
                setColor1("from-orange-600")
                setColor2("to-red-900")
                setTypeColor("bg-orange-100")
                setBgColor("bg-gradient-to-b from-[#ffd5b5] to-[#ffb997]")
                break
            case "water":
                setBColor("border-blue-500")
                setColor1("from-cyan-600")
                setColor2("to-blue-900")
                setTypeColor("bg-blue-100")
                setBgColor("bg-gradient-to-b from-[#c7eaff] to-[#a8d8ff]")
                break
            case "poison":
                setBColor("border-purple-200")
                setColor1("from-blue-900")
                setColor2("to-purple-600")
                setTypeColor("bg-purple-100")
                setBgColor("bg-gradient-to-b from-[#eac7ff] to-[#d7b3ff]")
                break
            case "bug":
                setBColor("border-emerald-400")
                setColor1("from-emerald-600")
                setColor2("to-green-900")
                setTypeColor("bg-emerald-100")
                setBgColor("bg-gradient-to-b from-[#e3fcd1] to-[#bde4a7]")
                break

            // agrega más casos según lo necesites
            default:
                setBColor("border-gray-400")
                setColor1("from-slate-600")
                setColor2("to-gray-900")
                setTypeColor("bg-gray-100")
        }
    }, [pokemon])

    if (!pokemon) {
        return (<div className="text-center text-2xl"> Pokemon no encontrado. </div>)
    } else if (pokemon == "Carga") {
        return (<h1> Cargando... </h1>)
    }
    return (
        <section id="Padre" className={`${bgColor} w-full h-screen sm:h-screen md:h-screen lg:h-screen text-xl`}>
            <div class="grid grid-cols-1 me-40 ms-40 pt-10 m
            sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-20">
                <div id="background-Card" className={`bg-gradient-to-t  ${Color1} ${Color2} rounded-3xl shadow-xl/30 border-8 ${borderColor}`}>
                    <div class="flex items-center justify-between px-4 py-2  w-full mx-auto">
                        <div class="flex items-center space-x-5">
                            <span class="font-bold text-white">{pokemon.name}</span>
                            <span class="text-blue-500 text-lg">lv {pokemon.base_experience}</span>
                        </div>
                        <div class="flex items-center space-x-4">
                            <span class="text-red-600 font-medium">{pokemon.stats[0].base_stat}</span>
                            <span class={`text-yellow-800 ${typeColor} px-2 py-1 rounded`}>{pokemon.types[0].type.name}/{pokemon.types[1]?.type.name}</span>
                        </div>
                    </div>
                    <div class={`me-10 ms-10 p-10 mb-4 rounded-3xl bg-white grid place-items-center border-6 ${borderColor}`}>
                        <img class="h-48 w-96 object-fill" src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                    </div>
                    <div class="grid grid-cols-2 ps-3 pe-auto">
                        <div class="text-center text-white font-bold">
                            <h1 class="mb-5 text-2xl">Información: </h1>
                            <div class="grid grid-cols-2 text-black">
                                <span class="m-2"><p>Peso:</p></span>
                                <span class="m-2"><p>{pokemon.height}"</p></span>
                                <span class="m-2"><p>Altura:</p></span>
                                <span class="m-2"><p>{pokemon.weight} kg</p></span>
                            </div>
                        </div>
                        <div class="text-center text-white font-bold">
                            <h1 class="mb-5 text-2xl">Movimientos: </h1>
                            <div className="grid grid-cols-2 text-black pb-3">
                                <span class="m-2"><p>{pokemon.moves[0].move.name}</p></span>
                                <span class="m-2"><p> + {pokemon.stats[1].base_stat}</p></span>
                                <span class="m-2"><p>{pokemon.moves[1].move.name}</p></span>
                                <span class="m-2"><p> + {pokemon.stats[1].base_stat}</p></span>
                                <span class="m-2"><p>{pokemon.moves[2].move.name}</p></span>
                                <span class="m-2"><p> + {pokemon.stats[1].base_stat}</p></span>
                                <span class="m-2"><p>{pokemon.moves[3].move.name}</p></span>
                                <span class="m-2"><p> + {pokemon.stats[1].base_stat}</p></span>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-3">
                        <div class=" rounded-2xl text-center text-cyan-50 bg-cyan-500 m-4">
                            <p>Defense:</p>
                            <p>{pokemon.stats[2].base_stat}</p>
                        </div>
                        <div class="rounded-2xl text-center text-emerald-50 bg-emerald-400 m-4">
                            <p>Speed:</p>
                            <p>{pokemon.stats[5].base_stat}</p>
                        </div>
                        <div class="rounded-2xl text-center text-amber-50 bg-amber-500 m-4">
                            <p>S. Attack:</p>
                            <p>{pokemon.stats[3].base_stat}</p>
                        </div>
                    </div>
                </div>
                <div id="background-Card" className={`bg-gradient-to-t ${Color1} ${Color2} rounded-3xl shadow-xl/30 grid grid-rows-2 items-center justify-center`}>
                    <div class="w-50 h-25 bg-white border-4 rounded-t-full align-bottom">
                    </div>
                    <div class="w-50 h-25 bg-red-600 border-4 rounded-b-full align-top" />
                </div>
            </div>
            <div class="text-center mt-10">
                <button type="button" class="text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xlg px-8 py-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => navigate(-1)}>Volver</button>
            </div>

        </section>
    )

}