import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import mercado from '../assets/mercado.jpg';
import credito from '../assets/credito.jpg';
import debito from '../assets/debito.jpg';
import efectivo from '../assets/efectivo.jpg';

export default function MediosPago() {
    return (
        <View style={styles.pagos}>
            <Text style={styles.title}>Medios de pago</Text>
            <Text style={styles.text}>Hasta 12 cuotas sin tarjeta</Text>
            <Image source={mercado} style={styles.img} />
            <Text style={styles.text}>Tarjetas de débito</Text>
            <Image source={credito} style={styles.img} />
            <Text style={styles.text}>Tarjetas de crédito</Text>
            <Image source={debito} style={styles.img} />
            <Text style={styles.text}>Efectivo</Text>
            <Image source={efectivo} style={styles.img} />
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: 60,
        objectFit: 'contain',
        marginLeft: -90,
        marginTop: 10


    },
    pagos: {
        padding: 15,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        textAlign: 'right'
    },
    text: {
        fontSize: 15,
        color: 'rgba(0, 0, 0, 0.7)',
    },
    title: {
        fontSize: 18,
        color: 'rgba(0, 0, 0, 0.7)',
        marginBottom: 20
    }
});
