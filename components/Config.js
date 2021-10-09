import React from 'react';
import { Text, View, TextInput } from 'react-native';

const Valores = (props) => {
    return (
        <View style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            bottom: 20,
            ...props.estilo
        }}>
            <View style={props.texto}>
                <Text style={props.inner_text}>{props.title}</Text>
            </View>
            <View style={props.numero}>
                <TextInput
                    style={props.inner_numero}
                    maxLength={props.len}
                    onChangeText={props.change}
                    value={props.value.toString()}
                    keyboardType="numeric"
                />
            </View>
        </View>
    )
}


export default Valores