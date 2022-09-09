import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity,Image,TextInput,KeyboardAvoidingView,Keyboard} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from 'react-native-linear-gradient';

import {f,auth,database,storage} from '../../config/api';
import styles from '../../config/style';

export default class addTiktok extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          tiktok: '',
        };
    }

    addTiktok = () => {

        if(this.state.tiktok != "" ){
            var user = auth.currentUser;
            var uid = user.uid;
    
            database.ref('users/' + uid).update({
                tiktok: this.state.tiktok,
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
                                source={require("../../image/Tiktok_Logo.png")}
                            />
                            <View style={{alignItem: "flex-start",marginBottom:20,}}>
                                <Text style={styles.addingPannelText}>Copy the link of your profile from the application or from the site</Text>
                                <Text style={styles.addingPannelTextImportant}>1. Menu</Text>
                                <Text style={styles.addingPannelTextImportant}>2. View your profile</Text>
                                <Text style={styles.addingPannelTextImportant}>3. Profile Settings</Text>
                                <Text style={styles.addingPannelTextImportant}>4. Copy your profile link</Text>
                            </View>
                            <Text style={styles.addingPannelText}>And paste it in the box below</Text>
                            <TextInput
                                style={styles.addingPannelInput}
                                placeholder='Insert here'
                                autoCapitalize = 'none'
                                value={this.state.tiktok}
                                onChangeText={(text) => {this.setState({tiktok:text}) }}
                            />
                        </View>
                    </KeyboardAvoidingView>
                    <View style={{flex: 1,justifyContent: 'flex-end',marginBottom: 36}}>
                        <TouchableOpacity
                            onPress={this.addTiktok}
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