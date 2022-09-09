import React, {Component} from 'react';
import {StyleSheet,View,Text,Button,TextInput,TouchableOpacity,ImageBackground,Image,Keyboard} from 'react-native';

import {f,auth,database,storage} from '../config/api';
import styles from '../config/style';
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from 'react-native-linear-gradient';

export default class Register extends Component{

    constructor(props){
        super(props);
        this.state = {
          email: '',
          password: '',
          name: '',
          passwordConfirm: '',
          errorMess:'',
          keyboard: true,
        };
    }

    onSingupPress = () => {

        if ((this.state.password !== this.state.passwordConfirm) && (this.state.name == "")) {
            this.setState({errorMess:'Passwords do not match or no name'})
            return;
        }

        auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
            var user = auth.currentUser;
            var uid = user.uid;

            database.ref('users/' + uid).set({
                email: this.state.email,
                name: this.state.name,
                profile_picture : '',
                facebook: '',
                instagram: '',
                twitter:'',
                tiktok: '',
                snapchat: '',
                whatsapp: '',
                bio:'',
                newAccount: true,
            });
            
        }, (error) => {
            this.setState({errorMess:error.message})
        })    
    }

    onLoginPress = () => {
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
                                <Icon name="md-contact" color="#fff" size={17} style={{marginRight:-17,}}/>
                                <TextInput
                                style={styles.textInput}
                                placeholder='Name'
                                placeholderTextColor="#fff"
                                autoCapitalize = 'none'
                                value={this.state.name}
                                onChangeText={(text) => {this.setState({name:text}) }}
                                />
                            </View>
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
                            <View style={{flexDirection:'row',alignItems: 'center',width:"100%",justifyContent:"center"}}>
                                <Icon name="md-lock" color="#fff" size={16} style={{marginRight:-16,}}/>
                                <TextInput
                                style={styles.textInput}
                                secureTextEntry={true}
                                placeholder='Password'
                                placeholderTextColor="#fff"
                                autoCapitalize = 'none'
                                value={this.state.password}
                                onChangeText={(text) => {this.setState({password:text}) }}
                                />
                            </View>
                            <View style={{flexDirection:'row',alignItems: 'center',width:"100%",justifyContent:"center"}}>
                                <Icon name="md-checkmark-circle" color="#fff" size={17} style={{marginRight:-17,}}/>
                                <TextInput
                                style={styles.textInput}
                                secureTextEntry={true}
                                placeholder='Confirm password'
                                placeholderTextColor="#fff"
                                autoCapitalize = 'none'
                                value={this.state.passwordConfirm}
                                onChangeText={(text) => {this.setState({passwordConfirm:text}) }}
                                />
                            </View>
                        
                        </View>

                        <TouchableOpacity
                            onPress={this.onSingupPress}
                            style={styles.Button}
                        >
                            <Text style={{color:'#000'}}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'flex-end',alignItems:'center',flex:1, marginBottom:45,display: this.state.keyboard ? "flex" : "none"}}>
                        <Text style={styles.loginTextButton}>If you have an account</Text>
                        <TouchableOpacity onPress={this.onLoginPress}>
                            <Text style={styles.loginText}>Login here</Text>
                        </TouchableOpacity>
                </View>
                </TouchableOpacity>
            </LinearGradient>
        )
      }



}