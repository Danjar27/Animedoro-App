import React, { useState } from 'react';
import {
  StyleSheet, Text, View,
  TouchableOpacity, ScrollView, Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import Task from './Task'
import { AntDesign } from '@expo/vector-icons';

function Icon(props) {
  return (<AntDesign size={props.size} style={{...props.style, marginBottom: -3 }} {...props} />);
}

const ancho = Dimensions.get('screen').width
const alto = Dimensions.get('screen').height

const fecha = () => {

  var date = new Date().getDate()
  var month = new Date().getMonth() + 1
  var year = new Date().getFullYear()
  return date + '/' + month + '/' + year
}


const ToDo = ({ navigation }) => {

  const [items, setItems] = useState([])
  const [task, setTask] = useState()

  const agregar = () => {
    setItems([task, ...items])
    setTask(null)
    console.log(items)
  }

  const completar = (index) => {
    let total_tareas = [...items]
    total_tareas.splice(index, 1)
    setItems(total_tareas)
  }

  return (
    <View style={styles.container}>
      <View style={styles.titulo_box}>
        <Text style={styles.titulo}>Tareas por hacer</Text>
        <Text style={styles.fecha}>{fecha()}</Text>
      </View>
      <View style={styles.bg_tasks}>
        <View style={styles.available}>
          <KeyboardAvoidingView
            behavior = {Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{
              display: 'flex',
              top: 30,
              left: 30,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
          }}
            >
            <TextInput
              onChangeText={text => setTask(text)}
              placeholder='Agregar Task'
              value={task}
              style={{
                width: ancho - 200,
                borderRadius: 50,
                textAlign: 'center',
                height: 50,
                backgroundColor: '#fff'
              }} />
            <TouchableOpacity
              onPress={() => agregar()}
              style={{
                width: 40,
                borderRadius: 50,
                textAlign: 'center',
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 20,
                backgroundColor: '#fff'
              }}>
              <Text><Icon size = {20} name="arrowdown" color='#454545' /></Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
          <ScrollView style = {{height: 400, top: 50, right: 10}}>
            {
              items.map((e, i) =>{
                return(
                  <Task key = {i} title = {e} onPress = {completar}/>
                )
              })
            }
          </ScrollView>
        </View>
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo_box: {
    display: 'flex',
    justifyContent: 'center',
    width: ancho,
    height: 200,
  },
  titulo: {
    top: 10,
    textAlign: 'right',
    marginRight: 30,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#454545'
  },
  fecha: {
    top: 30,
    textAlign: 'right',
    marginRight: 30,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#aaa'
  },
  bg_tasks: {
    position: 'relative',
    height: alto - 240,
    width: ancho,
    borderTopLeftRadius: 70,
    backgroundColor: '#ea2949',
    
  },
  available: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});



export default ToDo