import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


export default function Suscribir() {
    return (
        <TouchableOpacity style={styles.contain}>
            <LinearGradient colors={['#320D5B', '#9421AF',]} style={styles.suscribe} start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}>

                <Text style={styles.text}>Suscribete al nivel 6 por $999/mes</Text>
                <AntDesign name="right" size={13} color="#fff" style={styles.icon} />
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    contain: {
        padding: 15,
    },
    suscribe: {
        padding: 7,
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    deFlex: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5
    },
    text: {
        color: '#fff',
        fontSize: 11,
        fontWeight: '600',
        paddingHorizontal: 5
    }
});
