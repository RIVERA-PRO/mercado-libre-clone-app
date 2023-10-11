import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import img from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'
import img7 from '../assets/7.jpg'

export default function Categorias() {
    const categorias = [
        {
            img: img,
            name: 'Celulares'
        },
        {
            img: img2,
            name: 'Más nuevos'
        },
        {
            img: img3,
            name: 'Moda'
        },
        {
            img: img4,
            name: 'celulares'
        },
        {
            img: img5,
            name: 'Vehiculos'
        },
        {
            img: img6,
            name: 'Ofertas'
        },
        {
            img: img7,
            name: 'Cupones'
        },
    ];

    return (
        <ScrollView horizontal={true}>
            {categorias.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.categoria}
                >
                    <View style={styles.imagebg} >
                        <Image source={item.img} style={styles.image} />
                    </View>
                    <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    categoria: {
        padding: 15,
        marginTop: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: 10,


    },
    text: {
        color: 'rgba(0, 0, 0, 0.6)',
        textAlign: 'center',
        fontSize: 9
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        objectFit: 'contain',
        backgroundColor: '#fff',

        padding: 10,

    },
    imagebg: {
        width: 43,
        height: 43,
        backgroundColor: '#fff',
        overflow: 'hidden',
        borderRadius: 100,
        shadowColor: 'rgba(0, 0, 0, 0.7)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4,
    }
});
