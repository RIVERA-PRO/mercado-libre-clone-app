import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';

import products from '../components/products';
import Header from '../components/HeaderBlanco';
import { useNavigation, useRoute } from '@react-navigation/native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import MediosPago from '../components/MediosPago';
import ProductsRelacionados from '../components/ProductsRelacionados';
export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();
    const { productId } = route.params;
    const [activeSlide, setActiveSlide] = useState(0);
    // Estado local para almacenar el producto seleccionado
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        // Buscar y establecer el producto correspondiente en base al productId
        const product = products.find(item => item.id === productId);
        setSelectedProduct(product);
    }, [productId]);

    // Asegúrate de que selectedProduct se establezca en null mientras se carga
    if (!selectedProduct) {
        return (
            <View style={styles.contenedor}>
                <Header />
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <ActivityIndicator style={styles.loader} size="large" color="#3483fa" />
                </ScrollView>

            </View>
        );
    }

    return (
        <View style={styles.contenedor}>
            <Header />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View>
                    <Text style={styles.textNuevo}>Nuevo | +25 vendidos</Text>
                    <Text style={styles.productTitle}>{selectedProduct.title}</Text>
                    <Text style={styles.vendido}>MÁS VENDIDO</Text>
                    <Text style={styles.imglentgh}>1 / 4</Text>
                    <Carousel
                        data={[
                            { uri: selectedProduct.img },
                            { uri: selectedProduct.img2 },
                            { uri: selectedProduct.img3 },
                            { uri: selectedProduct.img4 },
                        ]}
                        renderItem={({ item }) => (
                            <Image source={{ uri: item.uri }} style={styles.productImage} />
                        )}
                        sliderWidth={Dimensions.get('window').width}
                        itemWidth={Dimensions.get('window').width}
                        onSnapToItem={(index) => setActiveSlide(index)}
                    />
                    <Pagination
                        dotsLength={4} // Número de puntos de paginación
                        activeDotIndex={activeSlide} // Índice de la página actual
                        containerStyle={{ marginTop: -25 }} // Estilo del contenedor de paginación
                        dotStyle={{
                            width: 6,
                            height: 6,
                            borderRadius: 5,

                            backgroundColor: '#3483fa', // Color del punto inactivo
                        }}
                        inactiveDotStyle={{
                            // Estilo del punto activo
                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        }}
                        inactiveDotOpacity={0.4} // Opacidad de los puntos inactivos
                        inactiveDotScale={0.6} // Escala de los puntos inactivos
                    />

                    <Text style={styles.productPrice}>$ {selectedProduct.price}</Text>
                    <Text style={styles.cuotas}>en 12x $87.889</Text>
                    <Text style={styles.mediosdepago}>Ver medios de pago </Text>
                    <View style={styles.deFlex}>
                        <Text style={styles.llega}>Llega gratis </Text>
                        <Text style={styles.llega2}>el miércoles 28 de octubre</Text>
                    </View>
                    <Text style={styles.mediosdepago}>Más formas de entrega </Text>
                    <View style={styles.deFlexShareFavorite}>
                        <TouchableOpacity>
                            <AntDesign name="sharealt" size={18} style={styles.icon} color="#3483fa" />
                        </TouchableOpacity>
                        <TouchableOpacity>

                            <MaterialIcons name="favorite-border" style={styles.icon} size={18} color="#3483fa" />
                        </TouchableOpacity>

                    </View>
                    <Text style={styles.stock}>Stock disponible</Text>

                    <TouchableOpacity style={styles.stockButon}>
                        <Text style={styles.stockButonText}>Cantidad: 1</Text>
                        <Text style={styles.stockButonText2}>(281 disponible)</Text>
                        <AntDesign name="right" size={15} style={styles.icon2} color='#3483fa' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.comprar}>
                        <Text style={styles.comprarText}>Comprar ahora</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.agregar}>
                        <Text style={styles.agregarText}>Agregar al carrito</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.deFlexShareFavorite2}>
                    <TouchableOpacity style={styles.deFlex}>
                        <AntDesign name="sharealt" size={18} color="#3483fa" />
                        <Text style={styles.shareText}>Agregar a favoritos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deFlex}>

                        <MaterialIcons name="favorite-border" size={18} color="#3483fa" />
                        <Text style={styles.shareText}>Comrpartir</Text>
                    </TouchableOpacity>

                </View>
                <Text style={styles.vieron}>Quienes vieron este producto tambien compraron</Text>
                <ProductsRelacionados />
                <MediosPago />
                <View style={styles.espacio}>

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        marginTop: 8
    },
    productImage: {
        width: '100%',
        height: 250,
        resizeMode: 'center',
        marginTop: 8

    },
    productTitle: {
        fontSize: 15,
        color: 'rgba(0, 0, 0, 0.7)',
        marginTop: 8,
        paddingHorizontal: 15
    },
    productPrice: {
        fontSize: 30,
        color: 'rgba(0, 0, 0, 0.8)',
        marginTop: 8,
        paddingHorizontal: 15
    },
    productDescription: {
        fontSize: 16,
        marginTop: 16,
    },
    textNuevo: {
        fontSize: 11,
        color: 'rgba(0, 0, 0, 0.4)',
        paddingHorizontal: 15
    },
    cuotas: {
        fontSize: 17,
        color: 'rgba(0, 0, 0, 0.8)',
        paddingHorizontal: 15
    },
    mediosdepago: {
        color: '#3483fa',
        paddingHorizontal: 15,
        fontSize: 14,
        marginTop: 10
    },
    deFlex: {
        flexDirection: 'row',
        gap: 2,
        paddingHorizontal: 15,
        alignItems: 'center',
        marginTop: 10
    },
    llega: {
        color: '#00a650',
        fontSize: 17,
        fontWeight: '600'
    },
    llega2: {
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.7)',

    },
    icon: {
        backgroundColor: '#f2f2f2',
        borderRadius: 100,
        padding: 7,

    },
    stock: {
        fontSize: 17,
        color: 'rgba(0, 0, 0, 0.7)',
        paddingHorizontal: 15,
        fontWeight: '600',
        marginTop: 20,
    },
    deFlexShareFavorite: {
        flexDirection: 'column',
        height: 100,
        gap: 140,
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 110,
        right: 20
    },
    imglentgh: {
        backgroundColor: '#f2f2f2',
        position: 'absolute',
        top: 110,
        left: 20,
        textAlign: 'center',
        paddingHorizontal: 6,
        padding: 4,
        borderRadius: 10,
        color: 'rgba(0, 0, 0, 0.7)',
        fontWeight: '600',
        fontSize: 12,
        width: 40,
        zIndex: 2
    },
    stockButon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#f2f2f2',
        margin: 15,
        padding: 15,
        borderRadius: 7,
        gap: 10
    },

    stockButonText2: {
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.3)',
    },
    stockButonText: {
        fontSize: 15,
        color: 'rgba(0, 0, 0, 0.7)',

    },
    icon2: {
        marginLeft: '30%'
    },

    espacio: {
        height: 100
    },
    agregar: {
        backgroundColor: 'rgba(52, 131, 250, 0.2)',
        marginHorizontal: 15,
        padding: 15,
        borderRadius: 7,


    },
    agregarText: {
        color: '#3483fa',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '600'
    },
    comprarText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '600'
    },
    comprar: {
        backgroundColor: '#3483fa',
        marginHorizontal: 15,
        padding: 15,
        borderRadius: 7,
        marginBottom: 10
    },
    vieron: {
        fontSize: 17,
        color: 'rgba(0, 0, 0, 0.8)',
        paddingHorizontal: 15,
        marginTop: 20
    },
    vendido: {
        backgroundColor: '#ff7733',
        padding: 1,
        marginHorizontal: 15,
        marginTop: 10,
        color: '#fff',
        width: 83,
        textAlign: 'center',
        borderRadius: 3,
        fontSize: 11,
        fontWeight: '600'
    },
    shareText: {
        color: '#3483fa',
        textAlign: 'center',
        fontSize: 13,
        marginLeft: 10
    },
    deFlexShareFavorite2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    loader: {
        marginTop: 100
    }

});

// ...otros componentes y estilos...
