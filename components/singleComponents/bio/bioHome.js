import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity,Image,TextInput,Linking} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import LinearGradient from 'react-native-linear-gradient';

import {f,auth,database,storage} from '../../config/api';
import styles from '../../config/style';

export default class bioHome extends React.Component{

    constructor(props){

        super(props);
        this.state = {
          bio: '',
        };
            
    }

    componentDidMount () {

        const handleSnapshot = (snapshotVal) => {
            this.setState({bio: snapshotVal});
          }
          
        var uid = auth.currentUser.uid;
        countriesRef = database.ref('users/' + uid);

        countriesRef.child('bio').on('value', function(snapshot) {
            handleSnapshot(snapshot.val());
        });
    }

    render(){
        if (this.state.bio != "") {
            return(
                <TouchableOpacity style={{marginBottom:50,marginRight:"5%"}}>
                    {/* <Text style={styles.socialTitle}>Bio</Text> */}
                    <Text style={{textAlign:"center",marginHorizontal:40,}}>{this.state.bio}</Text>
                </TouchableOpacity>
            )
        }else{
            return(
                <View></View>
            )
        }
    }
}