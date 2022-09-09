import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity,Image,TextInput,KeyboardAvoidingView,Keyboard} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from 'react-native-linear-gradient';

import {f,auth,database,storage} from '../../config/api';
import styles from '../../config/style';


export default class addBio extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          bio: '',
          error:'',
        };
    }

    addBio = () => {

        if(this.state.bio != "" && this.state.bio.length <= 150){
            var user = auth.currentUser;
            var uid = user.uid;
    
            database.ref('users/' + uid).update({
                bio: this.state.bio,
            });
    
            this.props.navigation.navigate('homeScreen');
        }else{
            this.setState({error: 'This text is too long, you have a maximum number of 150 character.'})
        }
    }

    render(){
        return(
            <TouchableOpacity onPress={Keyboard.dismiss} activeOpacity={1} style={{flex:1}}>
                <LinearGradient colors={['#42e685', '#3bb2b8']} style={styles.bioPannel}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Icon name="ios-arrow-back" size={25} color={"#fff"}/>
                    </TouchableOpacity>
                    <KeyboardAvoidingView behavior={'position'} >
                        <View style={styles.addingPannelCenter}>
                        <Text style={{color:"#fff",fontSize: 18,fontWeight: "700",textAlign:"center",marginTop: 20,}}>bio</Text>
                        <Text style={styles.addingPannelText}>Add your bio here:</Text>
                        <TextInput
                            style={styles.addingPannelInputMultiline}
                            placeholder='My bio...'
                            multiline={true}
                            value={this.state.bio}
                            onChangeText={(text) => {this.setState({bio:text}) }}
                        />
                        </View>
                    <Text style={{color:"red",fontSize:12,textAlign:"center",marginTop:20,}}>{this.state.error}</Text>
                    </KeyboardAvoidingView>
                    <View style={{flex: 1,justifyContent: 'flex-end',marginBottom: 36}}>
                        <TouchableOpacity
                            onPress={this.addBio}
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