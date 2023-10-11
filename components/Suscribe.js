import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


export default function Suscribe() {
    return (
        <TouchableOpacity >
            <LinearGradient colors={['#9421AF', '#320D5B',]} style={styles.suscribe} start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}>




                <Text style={styles.text}>Suscribete al nivel 6</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    suscribe: {
        padding: 13,
        marginTop: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20
    },
    deFlex: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5
    },
    text: {
        color: '#fff',
        fontWeight: '600',
        paddingHorizontal: 5
    }
});
