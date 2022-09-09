import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity,Image} from 'react-native';

import {f,auth,database,storage} from '../config/api';
import styles from '../config/style';

export default class HomeProfile extends React.Component{

    constructor(props){

        super(props);
        this.state = {
          username : '',
        };
        
        const handleSnapshot = (snapshotVal) => {
          this.setState({username: snapshotVal});
          
        }
        
        var uid = auth.currentUser.uid;
    
        countriesRef = database.ref('users/' + uid);
        countriesRef.child('name').on('value', function(snapshot) {
          handleSnapshot(snapshot.val());
        });
        
    } 


    render(){
        return(
            <View style={{justifyContent: "center",alignItems:"center",marginTop: 10,width:"100%"}}>
                {/* <Image source={require("../image/prova_image.jpg")} style={{width:60,height:60,borderRadius:20,marginBottom:-20}}/> */}
                <Text style={[styles.title]}>{this.state.username}</Text>
            </View>
        )
    }
}