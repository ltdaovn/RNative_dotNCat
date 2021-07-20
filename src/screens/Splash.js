import React from 'react';

import { Button, Text, View, ActivityIndicator, SafeAreaView, Image } from 'react-native'

import Loading from '../components/LoadingComponents/Loading';

import styles from '../css/styles';

import SplashImage from '../img/splash.jpg'
import Logo from '../img/object.png'

import { StatusBar } from 'expo-status-bar';

const Splash = ({ navigation }) => {
    setTimeout( ()=>{
        navigation.navigate('Welcome')
    }, 3000)
    return (
        <View style={styles.container}>
            <StatusBar style='light'/>
            <Image
                source= { SplashImage }
                style={styles.imgSplash}
            />
            <View>
                <Image
                    source = { Logo }
                    style={styles.imgLogo}
                />
                <Text style={styles.text_p}>LOADING</Text>
            </View>
        </View>
    )
}

export default Splash