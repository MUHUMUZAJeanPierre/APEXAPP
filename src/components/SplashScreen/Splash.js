import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  TouchableOpacity, View, Image, StyleSheet, Dimensions } from 'react-native';
const logo = require('../../assets/images/logo.png');

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width
const Splash = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.navigate('OnBoarding')} style={{backgroundColor:'white',}}>
                <Image source={logo} resizeMethod='cover' style={{}} />
            </TouchableOpacity>
            <StatusBar color='white'/> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        height: height,
        width: width,

    },

})
export default Splash;