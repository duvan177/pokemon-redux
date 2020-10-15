import React, { Component, useEffect, useState } from 'react'
import List from './components/List'
import axios from 'axios'
function Pokemon(props:any) {
    const [pokemon, setPokemon ] = useState({})
      useEffect(() => {
        async function getPokemon(){
            let pokemon = await axios.get("https://pokeapi.co/api/v2/ability/1/")
            console.log(pokemon.data);
        }
        getPokemon()
      })
        return (
            <List/>
        )
}


export default Pokemon