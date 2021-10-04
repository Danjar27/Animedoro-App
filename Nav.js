import React from 'react';
import { AntDesign  } from '@expo/vector-icons';
import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './components/Home'
import Pomodoro from './components/Pomodoro'
import Stats from './components/Stats'

const Tab = createBottomTabNavigator();

const Tabs = () =>{
    return(
    <Tab.Navigator
    tabBarOptions={{
        showLabel: false,
        style: {
            backgroundColor: '#fff',
            position: 'absolute',
            bottom: 25,
            left: 30,
            right: 30,
            borderRadius: 50,
            height: 70,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 0,
            },
            shadowOpacity: 0.2,
            shadowRadius: 15,
            elevation: 5
        }
    }}>
        <Tab.Screen 
        name= 'Home' 
        component = {Home}
        options = {{
            tabBarIcon: ({focused}) => (
                <View style={ focused ? styles.focus: {alignItems: 'center', justifyContent: 'center'}}>
                    <TabBarIcon name="home" color= { focused ? "#fff": '#aaaa'} />
                    <Text
                    style = {{
                        color: focused ? '#fff': '#aaaaaa',
                        fontSize: 12,
                    }}>Home</Text>
                </View>
            )
        }}
        />
        <Tab.Screen 
        name= 'Pomodoro' 
        component = {Pomodoro}
        options = {{ 
            tabBarIcon: ({focused}) => (
                <View style={focused ? styles.focus: {alignItems: 'center', justifyContent: 'center'}}>
                    <TabBarIcon name="star" color= { focused ? "#fff": '#aaaa'} />
                    <Text
                    style = {{
                        color: focused ? '#fff': '#aaaaaa',
                        fontSize: 12,
                    }}>Pomodoro</Text>
                </View>
            )
        }}/>
        <Tab.Screen 
        name= 'Stats' 
        component = {Stats}
        options = {{
            tabBarIcon: ({focused}) => (
                <View style={ focused ? styles.focus: {alignItems: 'center', justifyContent: 'center'}}>
                    <TabBarIcon name="linechart" color= { focused ? "#fff": '#aaaa'} />
                    <Text
                    style = {{
                        color: focused ? '#fff': '#aaaaaa',
                        fontSize: 12,
                    }}>Stats</Text>
                </View>
            )
        }}
         />
    </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    focus:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ea2949',
        height: 50,
        width: 95,
        borderRadius: 50,
        shadowColor: '#000',
            shadowOffset: {
                width: 5,
                height: 5,
            },
        shadowOpacity: 0.1,
        shadowRadius: 3.5,
        elevation: 5
    }
})

function TabBarIcon(props){
    return(<AntDesign size={25} style={{ marginBottom: -3 }} {...props} />);
}

export default Tabs;