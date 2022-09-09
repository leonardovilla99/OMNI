import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity, Image} from 'react-native';

import {f,auth,database,storage} from '../config/api';
import styles from '../config/style';

const options = {
    title: 'Select Image',
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
};


export default class Profile extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            imgSource: '',
            username : '',
            image: '',
        }
    }

    
    componentDidMount () { 
        const handleSnapshot = (snapshotVal) => {
            this.setState({username: snapshotVal});
            console.log(snapshotVal);
        }

        const handleSnapshotimage = (snapshotVal2) => {
            this.setState({image: snapshotVal2});
            console.log(snapshotVal2);
        }
        
        var uid = auth.currentUser.uid;

        countriesRef = database.ref('users/' + uid);

        countriesRef.child('name').on('value', function(snapshot) {
            handleSnapshot(snapshot.val());
        });
        countriesRef.child('profile_picture').on('value', function(snapshot) {
            handleSnapshotimage(snapshot.val());
        }); 
    } 



    render() {
      return (
        <View style={styles.containerHome}>
            {this.state.imgSource ? (
                <Image
                    source={this.state.imgSource}
                    style={styles.profileImage}
                />
                
            ) : ( 
                <Image
                    style={styles.profileImage}
                />
            )}
            <TouchableOpacity>
                <View>
                    <Text style={{color:'darkblue',fontSize:12,}}>Change picture</Text>
                </View>
            </TouchableOpacity>
            <View>
                <Text style={styles.title}>{this.state.username}</Text>
            </View>
            
            
        </View> 
      );
  }
}