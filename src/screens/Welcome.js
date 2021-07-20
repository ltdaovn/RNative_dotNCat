import React from 'react';

import { StatusBar } from 'expo-status-bar';

import { Image, Button, Text, View, TouchableOpacity } from 'react-native'


import styles from '../css/styles';

import { useState } from 'react/cjs/react.development';


const Welcome = ({ navigation }) => {

    const [start, setStart] = useState({
        status: ''
    });

    const startHandle = () => {
        navigation.navigate('Main')
    }

    return (
        <View style={styles.container}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <StatusBar style='light' />
                <Text style={styles.text_h1}>Welcome!</Text>
                <Text style={styles.text_h2}>Object Detection Demo Application</Text>
                <TouchableOpacity
                    style={styles.btn_1}
                    onPress={ startHandle }
                >
                    <Text style={styles.btn_1_txt}>Press to Start</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Welcome
