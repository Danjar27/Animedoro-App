import React, { useEffect, useState } from 'react';
import {
  StyleSheet, Text, View, Image,
  SafeAreaView, ScrollView, Dimensions, Linking, TouchableOpacity
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function Icon(props) {
  return (<AntDesign size={props.size ? props.size : 25} style={{ marginBottom: -3 }} {...props} />);
}

const ancho = Dimensions.get('screen').width
const alto = Dimensions.get('screen').height


function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: 'space-evenly',
          width: ancho
        }}
        bounces={true}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        pagingEnabled={true}>
        <View style={styles.HomeHeader} />
        <View>
          <Image
            style={styles.image}
            source={require('../svg/Fondo.png')}
          />
        </View>
        <View style={{ height: 220 }} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Sé produtivo</ Text>
          <Text style={styles.subtext}> sin dejar de ver Anime</Text>
        </View>

        <View style={{ height: 150 }} />

        <View style={styles.textContainer}>
          <View style={{ height: 50 }} />
          <Text style={styles.text}>¿Animedoro?</ Text>
          <View style={{ height: 50 }} />
          <Text style={styles.normalText}>
            Animedoro es una técnica de trabajo y es- {"\n"}
            tudio inspirada en Pomodoro y populariza-{"\n"}
            da por el youtuber <Text style={{ fontWeight: "bold" }}>Josh Chen</Text>
          </Text>

          <View style={{ height: 25 }} />

          <Text style={styles.normalText}>
            Esta versión de Pomodoro está pensada{"\n"}
            para personas que ven anime o alguna se-{"\n"}
            rie pues no tiene descansos largos y los{"\n"}
            descansos cortos duran 20 o 25 minutos,{"\n"}
            tiempo necesario para ver <Text style={{ fontWeight: "bold" }}> sólo un episo-{"\n"}
              dio más</Text>. Es especialemnte perfecta para:
          </Text>

          <View style={{ height: 15 }} />


          <View style={{
            display: 'flex',
            flexDirection: 'row',
            padding: 10,
          }}>
            <View style={{alignItems: 'center'}}>
            <View style={styles.caracter}>
              <Icon name="codesquareo" color='#fff' />
            </View>
            <Text>Programar</Text>
            </View>

            <View style={{alignItems: 'center'}}>
            <View style={styles.caracter}>
              <Icon name="book" color='#fff' />
            </View>
            <Text>Leer</Text>
            </View>

            <View style={{alignItems: 'center'}}>
            <View style={styles.caracter}>
              <Icon name="pushpino" color='#fff' />
            </View>
            <Text>Tareas</Text>
            </View>
          </View>

          <View style={{ height: 15 }} />

          <Text style={styles.normalText}>
            Esta simple aplicación espera poder ayu-{"\n"}
            darte a organizar mejor tus tareas y el{"\n"}
            tiempo que ocupas en ellas.{"\n"}
          </Text>

          <Text style={{ fontWeight: "bold", color: '#454545'}}>
            Revisa mi Trabajo!{"\n"}</Text>

          <View
          style = {{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
          onPress={() => Linking.openURL('https://github.com/Danjar27')}>
            <Icon size = {50} name="github" color='#454545' />
          </TouchableOpacity>

          <TouchableOpacity
          style = {{marginLeft: 20}}
          onPress={() => Linking.openURL('https://www.linkedin.com/in/daniel-jaramillo-villalobos-3a4a3b18a')}>
            <Icon size = {50} name="linkedin-square" color='#454545' />
          </TouchableOpacity>
          </View>

        </View>

        <View style={{ height: 500 }} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  HomeHeader: {
    position: 'absolute',
    bottom: alto + 680,
    left: -200,
    backgroundColor: '#ea2949',
    height: ancho * 2,
    width: ancho * 2,
    borderRadius: 500,
  },
  image: {
    top: 200,
    position: 'relative',
    width: 400,
    left: 10,
    height: 400,
  },
  text: {
    color: '#262626',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  subtext: {
    color: '#707070',
    fontSize: 15,
    fontWeight: 'bold',
  },
  normalText: {
    color: '#707070',
    fontSize: 15,
  },
  textContainer: {
    alignItems: 'center',
  },
  caracter: {
    backgroundColor: '#ea2949',
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    margin: 10,
  }
});


export default Home