import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity, ImageBackground,Image} from 'react-native';

import {f,auth,database,storage} from '../config/api';
import styles from '../config/style';
import LinearGradient from 'react-native-linear-gradient';

import Benvenuto from "./benvenuto";
import HomeProfile from '../singleComponents/homeProfile';


export default class Home extends React.Component {

  


  render() {
      return (
        <ScrollView style={{backgroundColor:"#fff"}}>
        <View style={styles.containerHome}>
          <HomeProfile/>
          <Benvenuto navigation={this.props.navigation}/>
        </View>
        </ScrollView>
      );
  }
}