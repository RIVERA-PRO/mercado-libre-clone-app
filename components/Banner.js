import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import img from '../assets/banner.jpg';


export default function Banner() {
    return (
        <TouchableOpacity style={styles.banner}>
            <Image source={img} style={styles.img} />

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
        objectFit: 'contain'


    },
    banner: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        height: 70,
        marginHorizontal: 15,
        overflow: 'hidden',
        borderRadius: 7,
        backgroundColor: '#000',
        shadowColor: 'rgba(0, 0, 0, 0.7)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4,

    },


});
