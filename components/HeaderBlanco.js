import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Linking } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import Search from './Search';
import PerfilNav from './PerfilNav';
import Suscribe from './Suscribe';
import MercadoPago from './MercadoPago';
import Modal from 'react-native-modal';
import { AntDesign } from '@expo/vector-icons';
export default function Header() {
    const [isModalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState('');
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const navigation = useNavigation();

    const goToHome = () => {
        navigation.navigate('Home');
        setModalVisible(false);
    };
    const goToAtractivos = () => {
        navigation.navigate('AllPublicacionesScreen');
        setModalVisible(false);
    };

    const goToGastronomias = () => {
        navigation.navigate('AllGastronomiasScreen');
        setModalVisible(false);
    };



    const openLinkedInProfile = () => {
        const linkedInURL = 'https://www.linkedin.com/in/juan-rivera-9ba866215/'; // Reemplaza con tu URL de LinkedIn
        Linking.openURL(linkedInURL);
    };

    const openWebsite = () => {
        const websiteURL = 'https://www.juan-rivera-developer.net'; // Reemplaza con tu URL del sitio web
        Linking.openURL(websiteURL);
    };

    const openWhatsAppChat = () => {
        const phoneNumber = '1234567890'; // Reemplaza con tu número de teléfono
        const whatsappURL = `https://wa.me/qr/AHQDYWM7EKATH1`;
        Linking.openURL(whatsappURL);
    };

    const handleRemoveName = async () => {
        try {
            await AsyncStorage.removeItem('Actividades');
            console.log('Name removed successfully');
            setName('');
        } catch (error) {
            console.error('Error removing name:', error);
        }
    };
    useEffect(() => {
        const currentDate = new Date();
        const currentHour = currentDate.getHours();

        if (currentHour >= 6 && currentHour < 13) {
            setGreeting('Buenos días');
        } else if (currentHour >= 13 && currentHour < 19) {
            setGreeting('Buenas tardes');
        } else {
            setGreeting('Buenas noches');
        }
    }, []);
    return (
        <LinearGradient colors={['#FFD100', '#FFD100',]} style={styles.container} start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}>


            <View >
                <View style={styles.logoContainer} >
                    <TouchableOpacity onPress={toggleModal}>
                        <EvilIcons name="navicon" size={28} color='rgba(0, 0, 0, 0.6)' />
                    </TouchableOpacity>
                    <Search />
                    <TouchableOpacity onPress={toggleModal}>
                        <Ionicons name="md-cart-outline" size={26} color='rgba(0, 0, 0, 0.6)' />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={toggleModal} style={styles.ubicacion}>
                    <Feather name="map-pin" size={12} color='rgba(0, 0, 0, 0.6)' />
                    <Text style={styles.ubicacionText}>Salta Capital, Villa San José Mariano Moreno</Text>
                    <AntDesign name="right" size={12} color='rgba(0, 0, 0, 0.6)' />
                </TouchableOpacity>

                <Modal
                    isVisible={isModalVisible}
                    animationIn="slideInLeft"
                    animationOut="slideOutLeft"
                    swipeDirection="left"
                    onSwipeComplete={toggleModal}
                    onBackdropPress={toggleModal}
                    style={styles.modal}
                >


                    <ScrollView style={styles.modalContent} >

                        <View style={styles.bgProfile}>
                            <PerfilNav />
                            <Suscribe />
                            <MercadoPago />
                        </View>


                        <View style={styles.navBtns}>
                            <TouchableOpacity onPress={goToHome} style={styles.btnNav}>
                                <Ionicons name="home-outline" size={23} color='rgba(0, 0, 0, 0.6)' />
                                <Text style={styles.buttonText}>Inicio</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={goToHome} style={styles.btnNav}>
                                <AntDesign name="search1" size={23} color='rgba(0, 0, 0, 0.6)' />
                                <Text style={styles.buttonText}>Buscar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={goToHome} style={styles.btnNav}>
                                <Ionicons name="notifications-outline" size={23} color='rgba(0, 0, 0, 0.6)' />
                                <Text style={styles.buttonText}>Notificaciones</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={goToHome} style={styles.btnNav}>
                                <SimpleLineIcons name="handbag" size={20} color='rgba(0, 0, 0, 0.6)' />
                                <Text style={styles.buttonText}>Mis Compras</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={goToHome} style={styles.btnNav}>
                                <MaterialIcons name="favorite-border" size={23} color='rgba(0, 0, 0, 0.6)' />
                                <Text style={styles.buttonText}>Favoritos</Text>
                            </TouchableOpacity>


                            <TouchableOpacity onPress={goToHome} style={styles.btnNav}>
                                <FontAwesome5 name="money-bill-wave" size={15} color='rgba(0, 0, 0, 0.6)' />
                                <Text style={styles.buttonText}>Préstamos</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={goToHome} style={styles.btnNav}>
                                <MaterialCommunityIcons name="star-circle-outline" size={20} color='rgba(0, 0, 0, 0.6)' />
                                <Text style={styles.buttonText}>Suscripciones</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={goToHome} style={styles.btnNav}>
                                <MaterialCommunityIcons name="television-play" size={20} color='rgba(0, 0, 0, 0.6)' />
                                <Text style={styles.buttonText}>Mercado Play</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={goToHome} style={styles.btnNav}>

                                <Octicons name="history" size={20} color='rgba(0, 0, 0, 0.6)' />
                                <Text style={styles.buttonText}>Historial</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={toggleModal} style={styles.btnNav}>

                                <MaterialIcons name="logout" size={20} color='rgba(0, 0, 0, 0.6)' />
                                <Text style={styles.buttonText}>Cerrar</Text>
                            </TouchableOpacity>

                            <Text style={styles.text}>Contacto del desarrollador</Text>
                            <View style={styles.social}>
                                <TouchableOpacity onPress={openLinkedInProfile} style={styles.btnNav}>
                                    <FontAwesome name="linkedin" size={20} color='rgba(0, 0, 0, 0.6)' />

                                </TouchableOpacity>
                                <TouchableOpacity onPress={openWebsite} style={styles.btnNav}>
                                    <FontAwesome name="globe" size={20} color='rgba(0, 0, 0, 0.6)' />

                                </TouchableOpacity>
                                <TouchableOpacity onPress={openWhatsAppChat} style={styles.btnNav}>
                                    <FontAwesome name="whatsapp" size={20} color='rgba(0, 0, 0, 0.6)' />

                                </TouchableOpacity>

                            </View>
                        </View>


                    </ScrollView>

                </Modal>
            </View>
        </LinearGradient>
    );
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        flexDirection: 'column',
        padding: 10,
        paddingTop: 65,
        justifyContent: 'center',
        width: '100%'

    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,


    },
    ubicacion: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 2,
        marginTop: 10
    },
    ubicacionText: {
        color: 'rgba(0, 0, 0, 0.6)',
        fontSize: 13
    },

    logoText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
    },
    logoDate: {
        color: 'rgba(0, 0, 0, 0.6)',
        padding: 20,
        fontSize: 17,
        fontWeight: 'bold',
    },

    buttonText: {
        color: 'rgba(0, 0, 0, 0.6)',
        fontWeight: '600'

    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',

    },
    modalContent: {
        backgroundColor: '#fff',

        overflow: 'hidden',
        width: '85%',
        height: '100%',


    },
    closeButton: {
        marginTop: 10,
        backgroundColor: '#ccc',
        padding: 10,
        borderRadius: 8,
    },
    closeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },

    navBtns: {
        marginTop: 30
    },

    btnNav: {
        flexDirection: 'row',
        gap: 10,
        borderRadius: 8,
        padding: 10,
        margin: 9,
        borderBottomWidth: 0.3,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    social: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',

    },
    text: {
        textAlign: 'center',
        marginTop: 40
    },
    modal: {
        margin: 0,

    },
    bgProfile: {
        height: 200,
        width: '100%',
        backgroundColor: '#FFD100',
        padding: 10
    }
});
