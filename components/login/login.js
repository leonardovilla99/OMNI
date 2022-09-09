import React, {Component} from 'react';
import {StyleSheet,View,Text,Button,TextInput,TouchableOpacity,ImageBackground,Image,Keyboard} from 'react-native';

import {f,auth,database,storage} from '../config/api';
import styles from '../config/style';
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from 'react-native-linear-gradient';



export default class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
          email: '',
          password: '',
          errorMess:'',
          keyboard: true,
        };
    }

    onLoginPress = () => {
      auth.signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        console.log("ciao");
      }, (error) => {
        this.setState({errorMess:error.message})
      })
    }

    onCreateAccountPress = () => {
      this.props.navigation.navigate('Register');
    }

    onForgotPress = () => {
      this.props.navigation.navigate('ForgotPass');
    }

    componentDidMount () {
      this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
      this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }
    componentWillUnmount () {
      this.keyboardDidShowListener.remove();
      this.keyboardDidHideListener.remove();
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
                <View style={styles.loginTextInput}>
                  <View style={{flexDirection:'row',alignItems: 'center',width:"100%",justifyContent:"center"}}>
                    <Icon name="md-mail" color="#fff" size={15} style={{marginRight:-15,}}/>
                    <TextInput
                        style={styles.textInput}
                        autoCapitalize = 'none'
                        placeholder='E-mail'
                        placeholderTextColor="#fff"
                        value={this.state.email}
                        onChangeText={(text) => {this.setState({email:text}) }}
                        />
                  </View>
                  <View style={{flexDirection:'row',alignItems: 'center',width:"100%",justifyContent:"center"}}>
                  <Icon name="md-lock" color="#fff" size={16} style={{marginRight:-15,}}/>
                    <TextInput
                        style={styles.textInput}
                        secureTextEntry={true}
                        autoCapitalize = 'none'
                        placeholder='Password'
                        placeholderTextColor="#fff"
                        value={this.state.password}
                        onChangeText={(text) => {this.setState({password:text}) }}
                    />
                  </View>
                </View>
                <View style={{width:"80%",marginTop:20}}>
                  <Text style={{color:"#ccc",textAlign: 'center',}}>{this.state.errorMess}</Text>
                </View>
                <TouchableOpacity
                onPress={this.onLoginPress}
                style={styles.Button}
                >
                    <Text style={{color:'#000'}}>Login</Text>
                </TouchableOpacity>
        
                <View>
                <TouchableOpacity onPress={this.onForgotPress}>
                    <Text style={styles.loginText}>Forgot password</Text>
                </TouchableOpacity>
                </View>
              </View>
              <View style={{justifyContent:'flex-end',alignItems:'center', marginBottom:45,display: this.state.keyboard ? "flex" : "none"}}>
                <Text style={styles.loginTextButton}>Don't have an accont?</Text>
                <TouchableOpacity onPress={this.onCreateAccountPress}>
                    <Text style={styles.loginText}>Register here</Text>
                </TouchableOpacity>
              </View>
          </TouchableOpacity>
        </LinearGradient>
      )
    }

}