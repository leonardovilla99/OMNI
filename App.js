import React from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,} from 'react-native';

import NavigationRoute from './components/homeRoute';
import LoginRoute from './components/loginRoute';
import {f,auth,database,storage} from './components/config/api';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      inAuthenticationReady: false,
      isAuthenticated: false,
    };

    //FIREBASE
    auth.onAuthStateChanged(this.onAuthStateChanged);
  }

  onAuthStateChanged = (user) => {
    this.setState({inAuthenticationReady: true});
    this.setState({isAuthenticated: !!user});
  }

  render() {
    if (this.state.isAuthenticated) {
      return(
        <View style={{flex:1}}>
          <StatusBar barStyle="dark-content"/>
          <NavigationRoute />
        </View>
        
      )
    }else{
      return(
        <View style={{flex:1}}>
          <StatusBar barStyle="light-content"/>
          <LoginRoute />
        </View>
      )
    }
  }
}
