import React, { Component, useState } from 'react'
import { Text, View , Button, TextInput } from 'react-native'
import { addPokemon } from '../store/actions/pokemon'
import { connect } from 'react-redux'
import axios from 'axios'

interface Props{
    pokemon : any[],
    navigation: any,
    add: (pokemon:any) => any
}

class Home extends Component<Props>{
    constructor(props: Props){
        super(props)
        this.state = {
            
        }
      }

      async componentDidMount(){
        let pokemon = await axios.get("https://pokeapi.co/api/v2/ability/1/")
        this.props.add(pokemon.data.pokemon)
        console.log(pokemon.data.pokemon)
        console.log(this.props)
      }

      render(){
          return (
              <View>
  
                  <Button title="Ir a login" onPress={() => this.props.navigation.push('Pokemon', {function : ""})}/>
                  
              </View>
          )
      }
}

const mapStateToProps = (state:any) => {
    console.log(state)
    return {
        pokemon: state.pokemonReducer.pokemonList
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        add: (pokemon:any) => dispatch(addPokemon(pokemon))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)