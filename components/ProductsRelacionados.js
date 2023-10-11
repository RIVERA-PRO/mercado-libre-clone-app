import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import products from './products';
import { useNavigation } from '@react-navigation/native';
export default function ProductsRelacionados() {
    const navigation = useNavigation()
    const goToDetail = (productId) => {
        navigation.navigate('Detail', { productId });
    };

    return (
        <ScrollView horizontal={true}>
            {products.reverse().map((item, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.producto}
                    onPress={() => goToDetail(item.id)}
                >

                    <View style={styles.imagebg} >
                        <Image source={{ uri: item.img }} style={styles.image} />
                    </View>
                    <Text style={styles.price}>$ {item.price}</Text>
                    <Text style={styles.envio}>Envío gratis</Text>
                    <Text style={styles.title}>{item.title.slice(0, 50)}</Text>

                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    producto: {

        marginTop: 15,
        flexDirection: 'column',
        gap: 10,
        backgroundColor: '#fff',
        marginLeft: 15,
        width: 200,
        height: 340,
        borderRadius: 4,
        shadowColor: 'rgba(0, 0, 0, 0.7)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4,
        marginBottom: 10,
        paddingBottom: 10,
        paddingTop: 5

    },
    title: {
        color: 'rgba(0, 0, 0, 0.7)',

        fontSize: 14,
        paddingHorizontal: 7
    },

    envio: {
        paddingHorizontal: 5,
        fontSize: 12,
        color: '#00a650',
        marginTop: -10,
        marginLeft: 3
    },
    price: {
        color: 'rgba(0, 0, 0, 0.9)',
        fontSize: 19,
        paddingHorizontal: 7
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        resizeMode: 'contain',
    },
    imagebg: {
        width: 180,
        height: 160,
        backgroundColor: '#fff',
        overflow: 'hidden',
        paddingHorizontal: 7,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderBottomWidth: 0.2,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        marginTop: 20

    },
});
