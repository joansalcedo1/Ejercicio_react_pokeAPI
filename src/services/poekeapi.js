const API_URL = "https://pokeapi.co/api/v2/"

export async function getPokemon(offset = 50) {
    let data =[]
    for (let i = 1; i <= offset; i++) {
        try {
            const response = await fetch(`${API_URL}/pokemon/${i}`)
            const pokemon= await response.json()
            data.push(pokemon)

        } catch (error) {
            console.log(error)
            return false
        }
    }
    return data
}

export async function getPokemonByName(name) {
    try {
        const response=  await fetch(`${API_URL}/pokemon/${name}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
        return false
    }
    
}

export async function getInfoType(type){
    try {
        const response=  await fetch(`${API_URL}/type/${type}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
        return false
    }
}