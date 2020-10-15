import { ADD_POKEMON, DELETE_POKEMON } from '../actions/types'

const initialState = {
    pokemon: []
}

const pokemonReducer = (state = initialState, action: any) => {
    console.log(action.data)

    switch (action.type) {
        case ADD_POKEMON:
            return {
                ...state,
                pokemonList: state.pokemon = action.data
            };
        
        default:
            return state

    }
}

export default pokemonReducer