import React, { Component, useEffect } from 'react'
import { Text, View, Button } from 'react-native'

function Login(props:any) {
    const { navigation, route } = props
    
    useEffect(() => {
        console.log(navigation, props)
        return () => {
            console.log("Me sali")
        }
    })
        return (
            <View>
                <Text>{route.params.user}</Text>
                <Text> this is login </Text>
                <Button title="Test" onPress={() => route.params.function()}/>
            </View>
        )
}

export default Login
