import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Modal, Text, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import products from './products';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function Search() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [allResults, setAllResults] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    useEffect(() => {
        // Aquí cargas tus productos o realiza cualquier operación inicial
        // Por ejemplo, podrías cargar `products` en `allResults` al inicio.
        setAllResults(products);
    }, []);

    // Función para filtrar los productos por título
    const filterProductsByTitle = () => {
        const filtered = allResults.filter(product => product.title.includes(searchTerm));
        setFilteredResults(filtered);
    };

    const goToDetail = (productId) => {
        navigation.navigate('Detail', { productId });
        setModalVisible(false);
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.inputSearchOpenModal} onPress={openModal}>
                <AntDesign name="search1" size={15} color='rgba(0, 0, 0, 0.4)' style={styles.icon} />
                <Text style={styles.text}>Buscar en Mercado Libre</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modaLHeader}>
                        <TouchableOpacity onPress={closeModal}>
                            <AntDesign name="arrowleft" size={27} color='rgba(0, 0, 0, 0.4)' />
                        </TouchableOpacity>
                        <TextInput
                            placeholder="Buscar en Mercado Libre"
                            placeholderTextColor='rgba(0, 0, 0, 0.6)'
                            style={styles.inputSearch}
                            multiline={true}
                            value={searchTerm}
                            onChangeText={setSearchTerm}
                            // Agrega un evento de cambio para filtrar los productos
                            onChange={filterProductsByTitle}
                        />
                    </View>
                    <ScrollView>
                        {filteredResults.map((product, index) => (
                            // Renderiza los resultados filtrados aquí
                            <TouchableOpacity style={styles.resultItem} key={index} onPress={() => goToDetail(product.id)}>
                                <Entypo name="back-in-time" size={17} color='rgba(0, 0, 0, 0.4)' />
                                <Text style={styles.resultText}>{product.title.slice(0, 40)}</Text>

                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            </Modal>
        </View>
    );
}
const styles = StyleSheet.create({
    inputSearchOpenModal: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 100,
    },
    icon: {

        padding: 10,
        borderRadius: 8,
    },
    text: {
        color: 'rgba(0, 0, 0, 0.4)',
    },

    container: {
        flex: 1,
        justifyContent: 'center',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: '#fff',

    },
    input: {
        backgroundColor: 'rgba(36, 116, 225,0.1)',
        width: '100%',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 100
    },
    inputText: {
        color: 'rgba(0, 0, 0, 0.6)',
    },
    modaLHeader: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,



        shadowColor: 'rgba(0, 0, 0, 0.8)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
    },

    inputSearch: {
        backgroundColor: '#fff',
        width: '90%',
        padding: 7,
        paddingHorizontal: 20,
        borderRadius: 100
    },
    resultItem: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 0.2,
        borderBottomColor: 'rgba(0, 0, 0, 0.2)',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        width: '90%'
    },
    resultText: {
        color: 'rgba(0, 0, 0, 0.7)',
        fontWeight: 'bold',
        fontSize: 17
    },
    img: {
        width: 40,
        height: 40,
        borderRadius: 100,

    },
    categoriaPublicacion: {
        color: 'rgba(0, 0, 0, 0.6)',
    },
    categoriaOtra: {
        color: 'green', // Cambia este color a tu preferencia
    },

    resultText: {
        color: 'rgba(0, 0, 0, 0.4)',
        fontSize: 14
    },
});
