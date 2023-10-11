import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import products from './products';
import { useNavigation } from '@react-navigation/native';
export default function Productos() {
    const navigation = useNavigation()
    const goToDetail = (productId) => {
        navigation.navigate('Detail', { productId });
    };

    return (
        <View style={styles.conatiner}>
            <Text style={styles.titleViste}>Inspirado en lo último que viste</Text>
            {products.reverse().slice(0, 3).map((item, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.producto}
                    onPress={() => goToDetail(item.id)}
                >

                    <View style={styles.imagebg} >
                        <Image source={{ uri: item.img }} style={styles.image} />
                    </View>
                    <View style={styles.deColumn} >
                        <Text style={styles.title}>{item.title.slice(0, 50)}</Text>
                        <Text style={styles.price}>$ {item.price}</Text>
                        <Text style={styles.envio}>Envío gratis</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    conatiner: {
        backgroundColor: '#fff',
        marginHorizontal: 15,
        shadowColor: 'rgba(0, 0, 0, 0.7)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4,
        borderRadius: 4,
        marginTop: 10

    },
    producto: {

        marginTop: 15,
        flexDirection: 'row',

        gap: 10,

        borderRadius: 4,
        paddingRight: '33%',
        borderBottomWidth: 0.5,
        borderColor: 'rgba(0, 0, 0, 0.1)',


    },
    title: {
        color: 'rgba(0, 0, 0, 0.7)',
        fontSize: 13,
        paddingHorizontal: 6,

    },

    envio: {
        paddingHorizontal: 5,
        fontSize: 12,
        color: '#00a650',
        marginTop: 3,
        marginLeft: 3
    },
    price: {
        color: 'rgba(0, 0, 0, 0.9)',
        fontSize: 18,
        paddingHorizontal: 7,
        marginTop: 3,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        resizeMode: 'contain',
    },
    imagebg: {
        width: 90,
        height: 90,
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
