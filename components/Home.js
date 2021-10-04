import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image , 
  SafeAreaView, StatusBar, Dimensions} from 'react-native';


const ancho = Dimensions.get('screen').width
const alto = Dimensions.get('screen').height


function Home({navigation}){
  return(
    <SafeAreaView style = {styles.container}>
      <View style = {styles.HomeHeader} />
      <View>
      <Image
        style={styles.image}
        source={require('../svg/Fondo.png')}
      />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Sé produtivo</ Text>
        <Text style={styles.subtext}> sin dejar de ver Anime</Text>
      </View>
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
  HomeHeader:{
    position: 'absolute',
    bottom: 450,
    backgroundColor: '#ea2949',
    height: ancho*2,
    width:ancho*2,
    borderRadius: 500,
  },
  image:{
    bottom: 50,
    position: 'relative',
    width: 400,
    height: 400,
  },
  text:{
    color: '#262626',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  subtext:{
    color: '#707070',
    fontSize: 15,
    fontWeight: 'bold',
  },
  textContainer:{
    alignItems: 'center',
  }

});
  

export default Home