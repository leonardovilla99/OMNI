import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity,Image,TextInput,Linking} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from 'react-native-linear-gradient';

import {f,auth,database,storage} from '../../config/api';
import styles from '../../config/style';

export default class whatsappHome extends React.Component{

    constructor(props){

        super(props);
        this.state = {
          whatsapp: '',
        };
            
    }

    componentDidMount () {

        const handleSnapshot = (snapshotVal) => {
            this.setState({whatsapp: snapshotVal});
          }
          
        var uid = auth.currentUser.uid;
        countriesRef = database.ref('users/' + uid);

        countriesRef.child('whatsapp').on('value', function(snapshot) {
            handleSnapshot(snapshot.val());
        });
    }

    render(){
        if (this.state.whatsapp != "") {
            return(
                <TouchableOpacity

                >
                    <LinearGradient colors={['#42e685', '#3bb2b8']} style={styles.box}> 
                        <Image
                            source={require("../../image/Whatsapp_Logo.png")}
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