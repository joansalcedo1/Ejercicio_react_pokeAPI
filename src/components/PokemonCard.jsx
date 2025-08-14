import { Link } from "react-router-dom";
//asdad
export default function PokemonCard({ pokemon }) {
    return (//La etiqueta "Link" vuelve toda la carta en un boton, que cuando se presiona...(sigue en pokemonPage)
        <Link to={`/pokemon/${pokemon.name}`}>
            <div id="fondoBlanco" className="bg-white shadow-md h-70 rounded-md rotate-lg overflow-hidden text-center m-2 p-4 transition hover:scale-105">
                <div id="fondoAmarillo" className="bg-amber-300 h-full rounded-md">
                    <h2 className="font-bold mb-2">{pokemon.name}</h2>
                    <div className="flex flex-row">
                        <div id="vida" className="bg-red-600 ms-5 w-12">
                            <h2 className="text-amber-50">{pokemon.stats[0].base_stat}</h2>
                        </div>
                        <div id="id_pokemon" className="bg-amber-100 ms-5 w-24 mt-0.5">
                            <h2 className="">{pokemon.id}</h2>
                        </div>
                        <div id="poder" className="bg-purple-600 ms-5 w-12 ">
                            <h2 className="text-amber-50">{pokemon.base_experience}</h2>
                        </div>
                    </div>
                    <div id="imagen" className="bg-amber-100 h-45 ms-3 me-3 rounded-md">
                        <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} className="w-30 h-30 mx-auto" />
                        <div className="flex justify-center">
                                <div className="bg-amber-200 w-20 h-7 m-5 align-middle rounded-md transition">
                                    <p>{pokemon.types[0].type.name}</p>
                                </div>
                                 <div className="bg-amber-200 w-20 h-7 m-5 align-middle rounded-md transition">
                                    <p>{pokemon.types[1]?.type.name}</p>
                                </div>

                        </div>
                    </div>



                </div>
            </div>
        </Link>
    )
}