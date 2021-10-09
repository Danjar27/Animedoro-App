import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Clock from './Clock'
import Valores from './Config'
import Reset from './Reset'
import Data from './Data'

function Pomodoro({ navigation }) {

  const ancho = Dimensions.get('screen').width
  const alto = Dimensions.get('screen').height

  const [sound, setSound] = useState(false)
  const [ciclo, setCiclo] = useState(1)
  const [data, setData] = useState(true)
  const [trabajo, setTrabajo] = useState(60)
  const [anime, setAnime] = useState(25)
  const [counter, setCounter] = useState(0)
  const [work, setWork] = useState(true)
  const [min, setMin] = useState(1)
  const [pause, setPause] = useState(true)
  const [reset, setReset] = useState(false)
  let Count

  React.useEffect(() => {
    return sound ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: work ? '#ea2949' : "#0DC870",
      alignItems: 'center',
      justifyContent: 'center',
    },
    clocks: {
      bottom: 20,
      backgroundColor: '#fff',
      borderColor: work ? '#ea2949' : "#1DBF6E",
      borderWidth: 10,
      borderRadius: 1000,
      width: 220,
      height: 420,
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
    },
    botones: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      bottom: 20,
    },
    boton: {
      padding: 12,
      marginLeft: 10,
      marginRight: 10,
      backgroundColor: '#fff',
      borderRadius: 50,
    },
    boton_text: {
      color: work ? '#ea2949' : "#028146",
      fontWeight: 'bold'
    },
    action: {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: 40,
      textAlign: 'center',
      color: '#454545',
      bottom: 20,
      marginBottom: 10,
    },
    bg: {
      position: 'absolute',
      width: 500,
      height: 500,
      backgroundColor: '#fff',
      zIndex: -1,
      bottom: 550,
      borderRadius: 1000,
      borderStyle: 'dotted',
      borderWidth: 5,
      borderColor: '#fff',
    },
    ciclo: {
      height: 25,
      width: 100,
      backgroundColor: '#454545',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: 15,
      textAlign: 'center',
      color: '#fff',
      borderRadius: 50,
      marginBottom: 50,
    },
    inner_boton: {
      padding: 10,
      marginLeft: 10,
      marginRight: 10,
    },
    modal_bg: {
      zIndex: 1000,
      display: reset ? 'flex' : 'none',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      position: 'absolute',
      height: alto,
      width: ancho + 50,
      backgroundColor: 'rgba(27, 27, 27, 0.59)',
      shadowColor: '#000',
      shadowOffset: {
        width: 5,
        height: 5,
      },
      shadowOpacity: 0.5,
      shadowRadius: 15,
      elevation: 10
    },
    modal: {
      zIndex: 5000,
      height: 150,
      width: 250,
      borderRadius: 10,
      backgroundColor: '#fff',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    box: {
      borderWidth: 4,
      borderColor: '#ea2949',
      width: 220,
      height: 70,
      borderRadius: 20,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: {
        width: 5,
        height: 5,
      },
      shadowOpacity: 0.5,
      shadowRadius: 15,
      elevation: 10
    },
    texto: {
      fontSize: 20,
      backgroundColor: '#ea2949',
      height: 80,
      width: 120,
      alignItems: 'center',
      justifyContent: 'center',
    },
    inner_text: {
      color: '#fff',
      fontSize: 20,
    },
    number: {
      height: 80,
      backgroundColor: '#fff',
      width: 100,
      paddingRight: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    inner_number: {
      fontSize: 20,
      fontWeight: 'bold',
    }
  })


  useEffect(() => {
    if (counter > -1 && !pause && ciclo > 0) {
      Count = setInterval(() => {
        setCounter(counter - 1)
      }, 1000)
    }
    if (counter === 0) {
      if (min != 0) {
        setMin(min - 1)
        setCounter(59)
      }
      else {
        if (work) {
          setWork(!work)
          setMin(anime)
        }
        else {
          setCiclo(ciclo - 1)
          setWork(!work)
          setMin(trabajo)
        }
        setCounter(59)
      }
    }
    if (ciclo === 0) {
      setPause(true)
    }
    return () => {
      clearInterval(Count)
    }
  }, [counter, min, work])

  const modal = () => {
    setReset(!reset)
  }

  const reiniciar = () => {
    setWork(true)
    setData(true)
    setPause(true)
    modal()
  }

  const guardar = () => {
    setData(!data)
    work ? setMin(trabajo) : setMin(anime)
    setCounter(0)
  }

  const pausar = () => {
    if (ciclo != 0) {
      setPause(!pause)
      if (!pause) clearInterval(Count)
      else {
        if (counter <= 0) {
          setCounter(0)
        } else {
          setCounter(counter - 1)
        }
      }
    } else {
      setData(true)
    }
  }

  return (
    <View style={styles.container}>
      {reset ?
        <Reset
          bg={styles.modal_bg}
          mod={styles.modal}
          botones={styles.botones}
          inner_boton={styles.inner_boton}
          reiniciar={reiniciar}
          modal={modal}
        />
        : null
      }

      {data ?
        <Data
          bg={styles.modal_bg}
          ciclo={
            <Valores
              title='Ciclos'
              estilo={{ ...styles.box, borderColor: '#454545' }}
              texto={{ ...styles.texto, backgroundColor: '#454545' }}
              inner_text={styles.inner_text}
              numero={styles.number}
              inner_numero={styles.inner_number}
              len={2}
              change={setCiclo}
              value={ciclo}
            />
          }
          trabajo={
            <Valores
              title='Trabajo'
              estilo={styles.box}
              texto={styles.texto}
              inner_text={styles.inner_text}
              numero={styles.number}
              inner_numero={styles.inner_number}
              len={2}
              change={setTrabajo}
              value={trabajo}
            />
          }
          anime={
            <Valores
              title='Anime'
              estilo={{
                ...styles.box,
                borderColor: '#1DBF6E'
              }}
              texto={{
                ...styles.texto,
                backgroundColor: '#1DBF6E'
              }}
              inner_text={styles.inner_text}
              numero={styles.number}
              inner_numero={styles.inner_number}
              len={2}
              change={setAnime}
              value={anime}
            />
          }
          funcion={guardar}
          texto='Guardar'
        />
        : null
      }

      <View style={styles.bg} />

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.action}>{work ? "WORK !" : "ANIME !"}</Text>
        <Text style={styles.ciclo}>Ciclo : {''} {ciclo === -1 ? 0 : ciclo}</Text>
      </View>

      <View style={{
        zIndex: -1,
        bottom: 20,
        backgroundColor: '#fff',
        borderColor: work ? '#ea2949' : "#1DBF6E",
        borderWidth: 10,
        borderRadius: 1000,
        width: 220,
        height: 420,
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
        <Clock
          change={setMin}
          color={work ? '#ea2949' : "#0DC870"}
          value={min}
          text='minutos'
          size={160} />

        <View style={{ height: 30 }} />

        <Clock
          change={setCounter}
          color={work ? '#ea2949' : "#0DC870"}
          value={counter}
          text='segundos'
          size={160} />
      </View>

      <View style={{ height: 30 }} />

      <View style={styles.botones}>

        <TouchableOpacity style={styles.boton} onPress={modal}>
          <Text style={styles.boton_text}>Reiniciar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton} onPress={pausar}>
          <Text style={styles.boton_text}>{pause ? 'Iniciar' : 'Pausar'}</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}


export default Pomodoro