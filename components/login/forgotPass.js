import React, {Component} from 'react';
import {StyleSheet,View,Text,Button,TextInput,TouchableOpacity,ImageBackground,Image,Keyboard} from 'react-native';

import {f,auth,database,storage} from '../config/api';
import styles from '../config/style';
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from 'react-native-linear-gradient';

export default class ForgotPass extends Component{

    constructor(props){
        super(props);
        this.state = {
          email: '',
          errorMess:'',
          keyboard: true,
        };
      }

    onResetPass = () => {
    firebase.auth().sendPasswordResetEmail(this.state.email)
    .then(() => {
        Alert.alert('Password reset has been sent')
    }, (error) => {
        this.setState({errorMess:error.message})
    })
    }

    onBackLogin = () => {
        this.props.navigation.navigate('Login');
    }

    componentDidMount () {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
      }
  
    _keyboardDidShow = () => {
        this.setState({keyboard: false,})
    }

    _keyboardDidHide = ()  => {
        this.setState({keyboard: true,})
    }  

    render() {
        return(
            <LinearGradient colors={['#42e685', '#3bb2b8']} style={{flex:1}}>
                <TouchableOpacity style={styles.container} onPress={Keyboard.dismiss} activeOpacity={1}>
                    <View style={{width:"100%",justifyContent:'center',alignItems:'center',height:"90%"}}>
                    <Image source={require("../image/logo-login.png")} style={{height:100,width:200,marginBottom:40,}}/>
                    <View>
                    <Text>{this.state.errorMess}</Text>
                    </View>

                    <View style={styles.loginTextInput}>
                    <View style={{flexDirection:'row',alignItems: 'center',width:"100%",justifyContent:"center"}}>
                        <Icon name="md-mail" color="#fff" size={15} style={{marginRight:-15,}}/>
                        <TextInput
                            style={styles.textInput}
                            placeholder='E-mail'
                            placeholderTextColor="#fff"
                            autoCapitalize = 'none'
                            value={this.state.email}
                            onChangeText={(text) => {this.setState({email:text}) }}
                        />
                    </View>
                    
                    </View>
                    <TouchableOpacity
                    onPress={this.onResetPass}
                    style={styles.Button}
                    >
                        <Text style={{color:'#000'}}>Reset password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onBackLogin}>
                        <Text style={styles.loginText}>Back to login</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'flex-end',alignItems:'center',flex:1, marginBottom:45,display: this.state.keyboard ? "flex" : "none"}}>
                        <TouchableOpacity onPress={this.onBackLogin}>
                            <Text style={styles.loginText}>Back to Login</Text>
                        </TouchableOpacity>
                </View>
                </TouchableOpacity>
            </LinearGradient>
        )
      }
}