import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity,Image,TextInput,Linking} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from 'react-native-linear-gradient';

import {f,auth,database,storage} from '../../config/api';
import styles from '../../config/style';

export default class twitterHome extends React.Component{

    constructor(props){

        super(props);
        this.state = {
          twitter: '',
        };
            
    }

    componentDidMount () {

        const handleSnapshot = (snapshotVal) => {
            this.setState({twitter: snapshotVal});
          }
          
        var uid = auth.currentUser.uid;
        countriesRef = database.ref('users/' + uid);

        countriesRef.child('twitter').on('value', function(snapshot) {
            handleSnapshot(snapshot.val());
        });
    }

    render(){
        if (this.state.twitter != "") {
            return(
                <TouchableOpacity
                    onPress={ ()=>{}}
                >
                    <LinearGradient colors={['#42e685', '#3bb2b8']} style={styles.box}> 
                        <Image
                            source={require("../../image/Twitter_Logo.png")}
                            style={{height:36,width:36}}
                        />
                    </LinearGradient>
                </TouchableOpacity>
            )
        }else{
            return(
                <View></View>
            )
        }
    }
}