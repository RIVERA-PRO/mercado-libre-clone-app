import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, image, style, Platform } from 'react-native';
import Home from '../screens/Home'
import Detail from '../screens/Detail'

import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

function BottomTabsNavigation() {




    return (
        <Tab.Navigator
            tabBarOptions={{

                showLabel: false,
                tabBarButton: () => null,
                style: {
                    position: 'absolute',
                    bottonm: 25,
                    left: 20,
                    right: 20,

                    borderRadius: 15,
                    height: 56,



                },
                labelStyle: {
                    fontSize: 11,
                    marginBottom: 3,
                },
                activeTintColor: '#000',
                inactiveTintColor: 'rgba(0, 0, 0, 0.3)',


            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarButton: () => null, // Ocultar el botón del tab
                    tabBarStyle: {
                        backgroundColor: 'transparent',
                        height: 53,
                        elevation: 0,
                        position: 'absolute',

                    },

                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" size={24} color={color} />
                    ),
                }}
            />



            <Tab.Screen
                name="Detail"
                component={Detail}
                options={{
                    tabBarButton: () => null, // Ocultar el botón del tab
                    tabBarStyle: {
                        backgroundColor: 'transparent',
                        height: 53,
                        elevation: 0,
                        position: 'absolute',




                    },

                    headerShown: false,
                    tabBarLabel: 'Detail',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" size={24} color={color} />
                    ),
                }}
            />



        </Tab.Navigator >


    );
}

export default BottomTabsNavigation;
