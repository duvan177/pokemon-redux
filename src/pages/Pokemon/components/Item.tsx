import React, { Component } from 'react'
import { Text, View , Button } from 'react-native'
import { List} from "./component"
function Item (props:any) {
        return (
                <View>
                <Text> this is list  </Text>
                <Button title="btn"
                 onpress={()=>console.log('test'))}/> 
                <View/>
        )
}

export default Item
