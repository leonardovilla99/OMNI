import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity,Image} from 'react-native';

import {f,auth,database,storage} from '../../config/api';
import styles from '../../config/style';
import LinearGradient from 'react-native-linear-gradient';

export default class facebook extends React.Component{

    constructor(props){

        super(props);
        this.state = {
          instagram: '',
        };
    }
        
    componentDidMount () { 

        const handleSnapshot = (snapshotVal) => {
    
        this.setState({instagram: snapshotVal});
        }
        
        var uid = auth.currentUser.uid;
    
        countriesRef = database.ref('users/' + uid);
        countriesRef.child('instagram').on('value', function(snapshot) {
        handleSnapshot(snapshot.val());
        });
    }
        
    

    render(){
        if (this.state.instagram != "") {
            return(
                <View style={styles.miniBoxContainer}>
                    <Image
                        source={require('../../image/Instagram_Logo.png')}
                        style={{height:36,width:36}}
                    />
                </View>
            );
        }
          return (
                <TouchableOpacity onPress={() => this.props.navigation.navigate('addInstagram')}>
                    <LinearGradient colors={['#42e685', '#3bb2b8']} style={styles.miniBoxContainerAll}>
                        <Image
                            source={require('../../image/Instagram_Logo.png')}
                            style={{height:36,width:36}}
                        />
                    </LinearGradient>
                </TouchableOpacity>
            );
    }
}