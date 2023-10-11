import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import img from '../assets/juanrivera.png';


export default function PerfilNav() {
    return (
        <TouchableOpacity style={styles.perfil}>
            <Image source={img} style={styles.img} />

            <View style={styles.deColumn}>
                <Text style={styles.text}>Juan</Text>
                <View style={styles.deFlex}>
                    <Text style={styles.text2}>Mi Perfil</Text>
                    <AntDesign name="right" size={13} color="rgba(0, 0, 0, 0.4)" style={styles.icon} />
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    img: {
        width: 50,
        height: 50,
        objectFit: 'cover',
        borderRadius: 100,
    },
    perfil: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    },

    text: {
        color: 'rgba(0, 0, 0, 0.7)',
        fontWeight: '700',
        fontSize: 17
    },
    text2: {
        color: 'rgba(0, 0, 0, 0.7)',
        fontSize: 13
    },
    deColumn: {
        flexDirection: 'column',

    },
    deFlex: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5
    }
});
