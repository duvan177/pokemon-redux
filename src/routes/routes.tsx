import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Home, Login, Pokemon } from '../pages/'

const { Navigator, Screen} = createStackNavigator()

function Root(){
    return(
       <NavigationContainer>
           <Navigator>
               <Screen name="Home" component={Home}/>
               <Screen name="Login" component={Login}/>
               <Screen name="Pokemon" component={Pokemon}/>
           </Navigator>
       </NavigationContainer>
    )
}

export default Root