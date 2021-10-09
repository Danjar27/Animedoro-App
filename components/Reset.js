import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'


const Reset = (props) => {
    return (
        <View
            style={props.bg}>
            <View style={props.mod}>
                <Text style={{
                    marginBottom: 10,
                    fontWeight: 'bold',
                    color: '#454545'
                }}>¿Estás seguro?</Text>
                <View styles={props.botones}>
                    <TouchableOpacity
                        style={props.inner_boton}
                        onPress={props.reiniciar}>
                        <Text style={{ color: '#35BF78', fontWeight: 'bold' }}>Reiniciar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={props.inner_boton}
                        onPress={props.modal}>
                        <Text style={{ color: '#EE4545', fontWeight: 'bold' }}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


export default Reset