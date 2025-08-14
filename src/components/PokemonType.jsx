import { useParams,  } from "react-router-dom";
import { useEffect, useState } from "react";
import { getInfoType } from "../services/poekeapi";
//Con el "UseParams" recupera el nombre del pokemon escogido (ver "app")
//una vez que se haya cambiado la variable useEffect detecta que hubo un cambio en la variable "name"
//UseState hace que una variable en un principio tenga un valor y despues de que useEffect se active se setea pokemon, con useState
//Ahora "pokemon", es un pokemon y dependiendo del valor de pokemon se renderiza algo 
//la funcion "PokemonPage" es llamada en "App"
export default function PokemonType(){
    const type= useParams()
    const [info, setInfo] = useState("Carga")

    useEffect(()=>{
        async function fetchData() {
            const data = await getInfoType(type)
            setInfo(data)
        }
        fetchData()
    },[type])
    return(
        <div>
            <h1> {info.name}</h1>
        </div>
    )
}