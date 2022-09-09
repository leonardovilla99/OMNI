import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity,Image} from 'react-native';

import {f,auth,database,storage} from '../config/api';
import styles from '../config/style';
import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/Ionicons";

import Facebook from "../singleComponents/facebook/facebookHome";
import Instagram from "../singleComponents/instagram/instagramHome";
import Twitter from "../singleComponents/twitter/twitterHome";
import Tiktok from "../singleComponents/tiktok/tiktokHome";
import Snapchat from '../singleComponents/snapchat/snapchatHome';
import Whatsapp from '../singleComponents/whatsapp/whatsappHome';
import Bio from '../singleComponents/bio/bioHome';

export default class benvenuto extends React.Component{

    constructor(props){

        super(props);
        this.state = {
            newAccount: true,
            bio: "",
        };
            
    }

    componentDidMount () {

        const handleSnapshot = (snapshotVal) => {
            this.setState({newAccount: snapshotVal});
        }
        const handleSnapshot2 = (snapshotVal) => {
            this.setState({bio: snapshotVal});
        }
          
        var uid = auth.currentUser.uid;
        countriesRef = database.ref('users/' + uid);

        countriesRef.child('newAccount').on('value', function(snapshot) {
            handleSnapshot(snapshot.val());
        });
        countriesRef.child('bio').on('value', function(snapshot) {
            handleSnapshot2(snapshot.val());
        });
    }

    
    render(){
        if (this.state.newAccount == true && this.state.bio == ""){
            return(
                <LinearGradient colors={['#42e685', '#3bb2b8']} style={styles.benvenuto}>
                    <View style={styles.benvenutoInterno}>
                        <View style={{alignItems: "center",paddingRight: "5%"}}>
                            <Image source={require("../image/logo-login.png")} style={{height:70,width:140,marginBottom:25,}}/>
                        </View>
                        <Text style={styles.titleBenvenuto}>Start sharing.</Text>
                        <Text style={{color: '#fff', marginTop: 15}}>Welcome to OMNI, this application allows you to group and share your social networks.</Text>
                        <Text style={{color: '#fff', marginTop: 15, fontWeight:"700"}}>Start by adding a block by clicking the "+" "below.</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('blocchi')} style={{alignItems:"center",paddingRight: "5%"}}>
                            <View style={styles.benvenutoButton}>
                                <Text style={styles.benvenutoTesto}>Select Block</Text>
                                <Icon name="ios-arrow-round-forward" color="#3bb2b8" size={50} style={{marginTop:5,}}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            );
        }else{
            if(this.state.bio != "" && this.state.newAccount == true){
                return(
                    <View style={{width: "100%"}}>
                        <View style={{width:"95%",marginLeft:"5%"}}>
                            <Bio/>
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('blocchi')} style={{justifyContent:"center", alignItems:"center"}}>
                            <LinearGradient colors={['#42e685', '#3bb2b8']} style={styles.addBenvenuto}>
                                <View style={styles.addBenvenutoInterno}>
                                    <Text style={styles.addBenvenutoText}>+</Text>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
              );
            }else{
                return(
                    <View style={{width: "100%"}}>
                        <View style={{width:"95%",marginLeft:"5%"}}>
                            <Bio/>
                            <Text style={styles.socialTitle}>Social</Text>
                            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.ScrollView}>
                                <Whatsapp/>
                                <Facebook/>
                                <Instagram/>
                                <Twitter/>
                                <Tiktok/>
                                <Snapchat/>
                            </ScrollView>
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('blocchi')} style={{justifyContent:"center", alignItems:"center"}}>
                            <LinearGradient colors={['#42e685', '#3bb2b8']} style={styles.addBenvenuto}>
                                <View style={styles.addBenvenutoInterno}>
                                    <Text style={styles.addBenvenutoText}>+</Text>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
              );
            }
        }  
    }
}