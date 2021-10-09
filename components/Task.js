import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function Icon(props) {
    return (<AntDesign size={props.size} style={{ ...props.style, marginBottom: -3 }} {...props} />);
}

const ancho = Dimensions.get('screen').width
const alto = Dimensions.get('screen').height



const Task = (props) => {
    return (
        <View style={styles.task}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <View style={styles.circulo} />
                <Text style={styles.texto}>{props.title}</Text>
            </View>
            <TouchableOpacity
                style={styles.check}
                onPress={props.onPress}>
                    <Icon size = {22} name="closecircleo" color='#ea2949' />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    circulo: {
        backgroundColor: '#ea2949',
        marginLeft: 20,
        top: 1,
        borderRadius: 3,
        height: 20,
        width: 20,
    },
    task: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: ancho - 80,
        height: 60,
        margin: 10,
        marginLeft: 50,
        borderRadius: 10,
        backgroundColor: '#fff'
    },
    texto: {
        fontSize: 15,
        marginLeft: 10,
    },
    check: {
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 30,
    }
});

export default Task
