import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity,Image} from 'react-native';

import {f,auth,database,storage} from '../../config/api';
import styles from '../../config/style';
import LinearGradient from 'react-native-linear-gradient';

export default class snapchat extends React.Component{

    constructor(props){

        super(props);
        this.state = {
            snapchat: '',
        };
        
    } 

    componentDidMount () {

        const handleSnapshot = (snapshotVal) => {
            this.setState({snapchat: snapshotVal});
          }
          
          var uid = auth.currentUser.uid;
      
        countriesRef = database.ref('users/' + uid);
        countriesRef.child('snapchat').on('value', function(snapshot) {
            handleSnapshot(snapshot.val());
        });
    }


    render(){
        if (this.state.snapchat != "") {
            return(
                <View style={styles.miniBoxContainer}>
                    <Image
                        source={require('../../image/Snapchat_Logo.png')}
                        style={{width:36,height:36,}}
                    />
                </View>
            );
        }
          return(
                <TouchableOpacity onPress={() => this.props.navigation.navigate('addSnapchat')}>
                    <LinearGradient colors={['#42e685', '#3bb2b8']} style={styles.miniBoxContainerAll}> 
                        <Image
                            source={require('../../image/Snapchat_Logo.png')}
                            style={{width:36,height:36,}}
                        />
                    </LinearGradient>
                </TouchableOpacity>
              );
    }
}