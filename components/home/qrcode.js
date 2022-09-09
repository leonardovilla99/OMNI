import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity,Image} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import QRCode from 'react-native-qrcode-svg';
import LinearGradient from 'react-native-linear-gradient';

import {f,auth,database,storage} from '../config/api';
import styles from '../config/style';


export default class blocchi extends React.Component{
    render(){

        let logo = require("../image/logo-qr.png");
        let value = "https://www.leographic.it/projectO?user_uid=" + auth.currentUser.uid;

        return(
            <LinearGradient colors={['#42e685', '#3bb2b8']} style={styles.containerHome}>
                <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
                style={{alignItems: 'flex-start', width: "100%"}}
                >
                    <Icon name="ios-arrow-back" size={25} color={"#fff"} style={{paddingHorizontal:"5%",paddingTop:10,}}/>
                </TouchableOpacity>
                <View style={{alignItems:"center",justifyContent:"center",flex:1,marginTop:-75}}>
                    <QRCode
                        value = {value}
                        size={200}
                        color={"#fff"}
                        backgroundColor={"trasparent"}
                        logoBorderRadius={"100"}
                    />
                </View>
            </LinearGradient>
        )
    }
}