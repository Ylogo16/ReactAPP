import { servicioToken } from "./servicioToken.js"

export async function servicioSpoty() {

    const URI="https://api.spotify.com/v1/artists/0EmeFodog0BfCgMzAIvKQp/top-tracks?market=US"

    const TOKEN= await servicioToken()

    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }

    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()

    return datos


    
}