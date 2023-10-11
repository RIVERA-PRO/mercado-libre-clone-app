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
        <ScrollView horizontal={true}>
            {products.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.producto}
                    onPress={() => goToDetail(item.id)}
                >
                    <Text style={styles.visto}>Visto recientemente</Text>
                    <View style={styles.imagebg} >
                        <Image source={{ uri: item.img }} style={styles.image} />
                    </View>
                    <Text style={styles.title}>{item.title.slice(0, 50)}</Text>
                    <Text style={styles.price}>$ {item.price}</Text>
                    <Text style={styles.envio}>Envío gratis</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    producto: {

        marginTop: 15,
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 10,
        backgroundColor: '#fff',
        marginLeft: 15,
        width: 140,
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
        color: 'rgba(0, 0, 0, 0.4)',

        fontSize: 9.5,
        paddingHorizontal: 7
    },
    visto: {
        color: 'rgba(0, 0, 0, 0.7)',

        fontSize: 11,
        fontWeight: '700',
        borderBottomWidth: 0.5,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        paddingHorizontal: 10,
        padding: 3
    },
    envio: {
        paddingHorizontal: 5,
        fontSize: 9,
        color: 'green',
        marginTop: -10,
        marginLeft: 3
    },
    price: {
        color: 'rgba(0, 0, 0, 0.9)',
        fontSize: 13,
        paddingHorizontal: 7
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
});
