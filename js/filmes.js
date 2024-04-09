'use strict'

export async function getMovies(){

    const url = 'http://10.107.134.40:8080/v2/acmefilmes/filmes'
    const response = await fetch(url)
    const data = await response.json()
    return data.filmes
}
