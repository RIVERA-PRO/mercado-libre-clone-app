import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import img from '../assets/mercadopago.png';


export default function MercadoPago() {
    return (
        <TouchableOpacity style={styles.mercadoPago}>

            <View style={styles.deFlex}>

                <Image source={img} style={styles.img} />

                <Text style={styles.text}>Mercado Pago</Text>
            </View>



            <AntDesign name="right" size={13} color="rgba(0, 0, 0, 0.7)" style={styles.icon} />


        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    img: {
        width: 20,
        height: 20,
        objectFit: 'contain',

    },
    mercadoPago: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        padding: 10,
        marginTop: 20,
        borderRadius: 100
    },

    text: {
        color: 'rgba(0, 0, 0, 0.7)',
        fontWeight: '700',
        fontSize: 14
    },

    deFlex: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    }
});
