import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

export default function Envio() {
    return (
        <TouchableOpacity style={styles.contain}>
            <LinearGradient colors={['#fff', '#fff',]} style={styles.envio} start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}>
                <Feather name="truck" size={15} color="green" />
                <Text style={styles.text}>Envío gratis</Text>
                <Text style={styles.text2}>en millones de productos</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    contain: {
        marginHorizontal: 15,
        shadowColor: 'rgba(0, 0, 0, 0.7)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4,


    },
    envio: {
        padding: 8,
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    deFlex: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5
    },
    text: {
        color: 'green',
        fontSize: 13,
        fontWeight: '600',
        paddingHorizontal: 5
    },
    text2: {

        fontSize: 12,

    }
});
