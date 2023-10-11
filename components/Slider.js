import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.jpg';
import slider4 from '../assets/slider4.jpg';
import slider5 from '../assets/slider5.jpg';

const images = [slider1, slider2, slider3, slider4, slider5];

export default function Slider() {
    const [activeSlide, setActiveSlide] = useState(0);
    const carouselRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextSlide = (activeSlide + 1) % images.length;
            carouselRef.current.snapToItem(nextSlide);
        }, 3000); // Cambia la imagen cada 3 segundos

        return () => {
            clearInterval(interval);
        };
    }, [activeSlide]);

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Image source={item} style={styles.img} />
        </View>
    );

    return (
        <View style={styles.sliderContainer}>
            <Carousel
                ref={carouselRef}
                data={images}
                renderItem={renderItem}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width}
                onSnapToItem={(index) => setActiveSlide(index)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    sliderContainer: {

    },
    item: {
        width: Dimensions.get('window').width,
        height: 130,
        justifyContent: 'center',
        alignItems: 'center',

    },
    img: {
        width: '93%',
        height: '100%',
        borderRadius: 7,

    },
});
