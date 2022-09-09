import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from "react-native-vector-icons/Ionicons";

import homeScreen from './home/home';
import nfc from './home/nfc';
import settings from './home/settings';
import blocchi from './home/blocchi';
import profile from './home/profile';
import qrcode from './home/qrcode';
import addFacebook from './singleComponents/facebook/addFacebook';
import addInstagram from './singleComponents/instagram/addInstagram';
import addTwitter from './singleComponents/twitter/addTwitter';
import addTiktok from './singleComponents/tiktok/addTiktok';
import addSnapchat from './singleComponents/snapchat/addSnapchat';
import addWhatsapp from './singleComponents/whatsapp/addWhatsapp';
import bio from './singleComponents/bio/addBio';


const home = createStackNavigator({
    homeScreen: homeScreen,
    blocchi: blocchi,
    profile: profile,
    addFacebook: addFacebook,
    addInstagram: addInstagram,
    addTwitter: addTwitter,
    addTiktok: addTiktok,
    addSnapchat: addSnapchat,
    addWhatsapp: addWhatsapp,
    bio: bio,
  },{
    headerMode: 'none',
    navigationOptions: ({ navigation }) => ({
        tabBarVisible: navigation.state.index < 1,
      })
});

const share = createStackNavigator({
    nfc:nfc,
    qrcode:qrcode,
  },{
    headerMode: 'none',
    navigationOptions: ({ navigation }) => ({
        // tabBarVisible: navigation.state.index < 1,
    })
});

const AppNavigator = createBottomTabNavigator({
    Home: {
        screen: home,
        navigationOptions: {
            tabBarLabel:"Home",
            tabBarIcon: ({ focused,tintColor }) => (
              <Icon name="md-person" size={30} color={tintColor} />
            )
        }
    },
    Nfc: {
        screen: share,
        navigationOptions: {
            tabBarLabel:"Home",
            tabBarIcon: ({ focused,tintColor }) => (
              <Icon name="md-wifi" size={30} color={tintColor} />
            )
        },
        tabBarOptions:{
            activeTintColor: "#000"
        }
    },
    Settings: {
        screen: settings,
        navigationOptions: {
            tabBarLabel:"Home",
            tabBarIcon: ({ focused,tintColor }) => (
              <Icon name="md-settings" size={30} color={tintColor}/>
            )
        }
    },

}, {
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        activeTintColor: "#000",
        inactiveTintColor: "#c3c3c3",
        style: {
            paddingHorizontal: 50,
            borderTopColor: 'transparent',
            backgroundColor: '#fff',
            ...Platform.select({
                ios: {
                    height: 60,
                    paddingTop: 30,
                    marginBottom:30,
                },
                android: {
                    height: 80,
                    marginBottom: 15,
                }
            })
        },
    }
})

export default createAppContainer(AppNavigator);
