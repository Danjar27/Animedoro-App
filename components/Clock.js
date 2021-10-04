import React from 'react';
import { Text, View, TextInput } from 'react-native';

const Clock = props => {
return (
    <View style={{
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    width: props.size,
    height: props.size,
    backgroundColor: props.color,
    shadowColor: '#000',
    shadowOffset: {
        width: 5,
        height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 10
    }}>
    <View style={{
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: props.size - 20,
        height: props.size - 20,
        borderRadius: 100,
        backgroundColor: '#fff'
    }}>
        <TextInput
        style={{
            color: props.color,
            textAlign: 'center',
            width: 100,
            fontSize: 50,
            fontWeight: 'bold',
        }}
        maxLength={3}
        onChangeText={props.change}
        value={props.value.toString()}
        keyboardType="numeric"
        />
        <Text style={{
        fontWeight: 'bold',
        color: props.color,
        }}>{props.text}</Text>
    </ View>
    </View>
)
}

export default Clock