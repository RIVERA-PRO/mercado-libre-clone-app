import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, Text, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/HeaderBlanco';
import { Animated, Easing } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import Suscribir from '../components/Suscribir'
import Slider from '../components/Slider'
import Categorias from '../components/Categorias';
import Envio from '../components/Envio';
import Banner from '../components/Banner';
import Productos from '../components/Productos';
import UltimoProducs from '../components/UltimoProduct';
import Elegidos from '../components/Elegidos';
export default function Home() {








    return (

        <View>
            <Header />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <LinearGradient colors={['#FFD100', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2']} style={styles.container}>
                    <Slider />

                    <Suscribir />
                    <Envio />
                    <Categorias />
                    <Banner />
                    <Productos />
                    <UltimoProducs />
                    <Elegidos />
                    <View style={styles.espacio}>

                    </View>
                </LinearGradient>
            </ScrollView>
        </View >


    );
}

const styles = StyleSheet.create({

    scrollContainer: {





    },
    container: {


    },
    espacio: {
        height: 300
    }
});
