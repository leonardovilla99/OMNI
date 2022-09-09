import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity,Image} from 'react-native';

import {f,auth,database,storage} from '../../config/api';
import styles from '../../config/style';
import LinearGradient from 'react-native-linear-gradient';

export default class bio extends React.Component{

    constructor(props){

        super(props);
        this.state = {
          bio: '',
        };
            
    }

    componentDidMount () {

        const handleSnapshot = (snapshotVal) => {
            this.setState({facebook: snapshotVal});
          }
          
        var uid = auth.currentUser.uid;
        countriesRef = database.ref('users/' + uid);

        countriesRef.child('bio').on('value', function(snapshot) {
            handleSnapshot(snapshot.val());
        });
    }

    
    render(){
        if (this.state.facebook != "") {
            return(
                <View style={styles.miniBoxContainer}>
                    <View style={{width:36,height:36,justifyContent:"center"}}>
                        <Text style={{color:"#fff",fontSize: 18,fontWeight: "700",textAlign:"center"}}>bio</Text>
                    </View>
                </View>
            );
        }else{
          return(
            <TouchableOpacity onPress={() => this.props.navigation.navigate('bio')}>
                <LinearGradient colors={['#42e685', '#3bb2b8']} style={styles.miniBoxContainerAll}>
                    <View style={{width:36,height:36,justifyContent:"center"}}>
                        <Text style={{color:"#fff",fontSize: 18,fontWeight: "700",textAlign:"center"}}>bio</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
          );
        }  
    }
}