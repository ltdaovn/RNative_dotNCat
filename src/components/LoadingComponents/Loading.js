import { Text, View, ActivityIndicator } from 'react-native';
import React from 'react';

import styles from '../../css/styles';

const Loading = () =>{
    return (
        <View style={{paddingTop: 50}}>
            <ActivityIndicator size="large" color="#ede0d4" />
            <Text style={styles.text_p}>Loading...</Text>
        </View>
    )
}


export default Loading