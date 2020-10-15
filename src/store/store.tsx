import {combineReducers, createStore} from 'redux'
import pokemonReducer from './reducers/pokemonReducer'

const rootReducer = combineReducers({
    pokemonReducer
})

const configureStore = () => createStore(rootReducer)


export default configureStore