import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import products from './products';
import { useNavigation } from '@react-navigation/native';
export default function Elegidos() {
    const navigation = useNavigation()
    const goToDetail = (productId) => {
        navigation.navigate('Detail', { productId });
    };

    return (
        <View style={styles.contain}>
            <Text style={styles.titleViste}>Elegidos para vos </Text>
            <View style={styles.conatiner}>
                {products.reverse().slice(0, 4).map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.producto}
                        onPress={() => goToDetail(item.id)}
                    >

                        <View style={styles.imagebg} >
                            <Image source={{ uri: item.img }} style={styles.image} />
                        </View>
                        <Text style={styles.price}>$ {item.price}</Text>
                        <Text style={styles.title}>{item.title.slice(0, 48)}</Text>

                        <Text style={styles.envio}>Envío gratis</Text>
                    </TouchableOpacity>
                ))}
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    contain: {
        backgroundColor: '#fff',
        marginHorizontal: 15,
        shadowColor: 'rgba(0, 0, 0, 0.7)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4,
        borderRadius: 4,
        marginTop: 15,
    },
    conatiner: {
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',


    },
    producto: {


        flexDirection: 'column',
        justifyContent: 'center',
        gap: 10,
        backgroundColor: '#fff',

        width: 160,

        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 0.2,
        paddingBottom: 10,


    },
    title: {
        color: 'rgba(0, 0, 0, 0.4)',

        fontSize: 11,
        paddingHorizontal: 7
    },

    envio: {
        paddingHorizontal: 5,
        fontSize: 11,
        color: '#00a650',

        marginLeft: 3
    },
    price: {
        color: 'rgba(0, 0, 0, 0.9)',
        fontSize: 14,
        paddingHorizontal: 7
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        resizeMode: 'contain',
    },
    imagebg: {
        width: 120,
        height: 110,
        backgroundColor: '#fff',
        overflow: 'hidden',
        paddingHorizontal: 7,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'

    },
    titleViste: {
        borderBottomWidth: 0.5,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        padding: 10,
        color: 'rgba(0, 0, 0, 0.9)',
        fontSize: 15,
        fontWeight: '600'

    }
});
