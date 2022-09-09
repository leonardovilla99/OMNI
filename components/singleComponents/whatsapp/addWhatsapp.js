import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity,Image,TextInput,KeyboardAvoidingView,Keyboard} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from 'react-native-linear-gradient';

import {f,auth,database,storage} from '../../config/api';
import styles from '../../config/style';

export default class addWhatsapp extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          whatsapp: '',
        };
    }

    addWhatsapp = () => {

        if(this.state.whatsapp != "" ){
            var user = auth.currentUser;
            var uid = user.uid;
    
            database.ref('users/' + uid).update({
                whatsapp: this.state.whatsapp,
                newAccount: false,
            });
    
            this.props.navigation.navigate('homeScreen');
        }
    }

    render(){
        return(
            <TouchableOpacity style={{flex:1}} onPress={Keyboard.dismiss} activeOpacity={1}>
                <LinearGradient colors={['#42e685', '#3bb2b8']} style={styles.bioPannel}>
                    <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}
                    >
                        <Icon name="ios-arrow-back" size={25} color={"#fff"}/>
                    </TouchableOpacity>
                    <KeyboardAvoidingView behavior={'position'} >
                        <View style={styles.addingPannelCenter}>
                            <Image
                                style={{width:50,height:50,marginVertical:20,}}
                                source={require("../../image/Whatsapp_Logo.png")}
                            />
                            <Text style={styles.addingPannelText}>Put your phone number bellow</Text>
                            <TextInput
                                style={styles.addingPannelInput}
                                placeholder='Insert here'
                                autoCapitalize = 'none'
                                value={this.state.whatsapp}
                                keyboardType={'numeric'}
                                onChangeText={(text) => {this.setState({whatsapp:text}) }}
                            />
                        </View>
                    </KeyboardAvoidingView>
                    <View style={{flex: 1,justifyContent: 'flex-end',marginBottom: 36}}>
                        <TouchableOpacity
                            onPress={this.addWhatsapp}
                            style={styles.addingPannelButton}
                        >
                            <Text style={styles.addingPannelButtonText}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        )
    }
}