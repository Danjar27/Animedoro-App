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
            borderColor: props.color,
            backgroundColor: "#fff",
            borderWidth: 9,
            shadowColor: '#000',
            shadowOffset: {
                width: 5,
                height: 5,
            },
            shadowOpacity: 0.5,
            shadowRadius: 15,
            elevation: 10
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
    )
}

export default Clock