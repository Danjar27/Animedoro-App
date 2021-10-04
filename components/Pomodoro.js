import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Clock from './Clock'

function Pomodoro({ navigation }) {


  const [counter, setCounter] = useState(10)
  const [work, setWork] = useState(false)
  const [min, setMin] = useState(1)
  const [pause, setPause] = useState(false)
  let Count


  useEffect(() => {
    if (counter > 0 && !pause) {
      Count = setInterval(() => {
        setCounter(counter - 1)
      }, 1000)
    }
    if (counter === 0) {
      if (min != 0) {
        setMin(min - 1)
        setCounter(59)
      }
      else{
        setWork(!work)
        setMin(25)
        setCounter(59)
      }
    }
    return () => {
      clearInterval(Count)
    }
  }, [counter, min, work])

  const reiniciar = () => {
    setCounter(10)
    setMin(1)
  }

  const pausar = () => {
    setPause(!pause)
    if (!pause) clearInterval(Count)
    else {
      if(counter === 0){
        setCounter(0)
      }else{
      setCounter(counter - 1)
    }
    }
  }


  return (
    <View style={{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <View style = {{
        backgroundColor: '#fff',
        borderColor: work ? '#ea2949': "#1DBF6E",
        borderWidth: 5,
        borderRadius: 500,
        width: 220,
        height: 450,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 15,
        elevation: 10
      }}>
        <Clock change={setMin} color='#1DBF6E' value={min} text='minutos' size= {160} />

        {/* Separador */}
        <View style={{height: 50}} />
        <Clock 
        change={setCounter} 
        color= '#ea2949' 
        value={counter} 
        text='segundos' 
        size= {160} 
        />
      </View>

      {/* Separador */}
      <View style={{height: 50}} />

      <View style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
      }}>
        <TouchableOpacity style={{
          padding: 12,
          margin: 10,
          backgroundColor: '#fff',
          borderRadius: 30,
        }}
          onPress={reiniciar}>
          <Text style={{
            color: work ? '#ea2949': "#1DBF6E",
            fontWeight: 'bold'
            }}>Reiniciar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          padding: 12,
          margin: 10,
          backgroundColor: '#fff',
          borderRadius: 50,
        }}
          onPress={pausar}>
          <Text style={{
            color: '#ea2949',
            fontWeight: 'bold'
            }}>{pause ? 'Iniciar': 'Pausar'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


export default Pomodoro