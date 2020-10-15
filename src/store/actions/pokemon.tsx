import { ADD_POKEMON, DELETE_POKEMON } from './types'

export const addPokemon = (pokemon:any) => (
    {
        type: ADD_POKEMON,
        data: pokemon
    }
)

export const deletePokemon = (pokemon:any) => (
    {
        type: DELETE_POKEMON,
        data: pokemon
    }
)