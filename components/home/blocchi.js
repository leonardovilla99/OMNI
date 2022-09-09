import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity,Image} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

import {f,auth,database,storage} from '../config/api';
import styles from '../config/style';

import Twitter from '../singleComponents/twitter/twitter';
import Facebook from '../singleComponents/facebook/facebook';
import Instagram from '../singleComponents/instagram/instagram';
import Tiktok from '../singleComponents/tiktok/tiktok';
import Snapchat from '../singleComponents/snapchat/snapchat';
import Whatsapp from '../singleComponents/whatsapp/whatsapp';
import Bio from '../singleComponents/bio/bio';

export default class blocchi extends React.Component{

    render(){
        return(
            <View style={styles.containerHome}>
                <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
                style={{alignItems: 'flex-start', width: "100%",}}
                >
                    <Icon name="ios-arrow-back" size={25} color={"#000"} style={{paddingHorizontal:"5%",paddingTop:10,}}/>
                </TouchableOpacity>
                <View style={{marginHorizontal:"5%", alignItems:"center"}}>
                <Text style={{fontSize:20,fontWeight:'500', marginBottom:40,}}>Add your profile</Text>
                <ScrollView>
                    <View style={{flexDirection: 'row'}}>
                        <Facebook navigation={this.props.navigation}/>
                        <Instagram navigation={this.props.navigation}/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Twitter navigation={this.props.navigation}/>
                        <Tiktok navigation={this.props.navigation}/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Snapchat navigation={this.props.navigation}/>
                        <Whatsapp navigation={this.props.navigation}/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Bio navigation={this.props.navigation}/>
                    </View>
                </ScrollView>
                </View>
            </View>
        )
    }
};