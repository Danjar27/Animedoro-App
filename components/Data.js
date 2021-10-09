import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

const Data = (props) => {
    return (
        <View
            style={props.bg}>
            <View style={{
                position: 'relative',
                backgroundColor: '#fff',
                width: 300,
                height: 400,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 25,
            }}>
                {props.ciclo}
                <View style={{ height: 30 }} />
                {props.trabajo}
                <View style={{ height: 30 }} />
                {props.anime}
            </View>
            <TouchableOpacity
                style={{
                    backgroundColor: '#ea2949',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bottom: 25,
                    width: 200,
                    height: 50,
                    borderRadius: 50,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 5,
                        height: 5,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 15,
                    elevation: 10
                }}
                onPress={props.funcion}>
                <Text style={{
                    color: '#fff',
                    fontSize: 15,
                }}>{props.texto}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Data