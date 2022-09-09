import React from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,TouchableOpacity,} from 'react-native';

import {f,auth,database,storage} from '../config/api';
import styles from '../config/style';
import { Switch } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';

/* const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

ImagePicker.showImagePicker(options, (response) => {
  console.log('Response = ', response);

  if (response.didCancel) {
    console.log('User cancelled image picker');
  } else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  } else {
    const uri = response.uri;
    this.setState({
      selectedPictureUri: uri,
    });
  }
}); */

export default class Settings extends React.Component {

  constructor(props){

    super(props);
    this.state = {
      username : '',
      switchValue:false,
      selectedPictureUri: "",
    };
  } 

  componentDidMount () { 
    const handleSnapshot = (snapshotVal) => {
        this.setState({username: snapshotVal});
    }
    
    const handleSnapshotVisible = (snapshotVal) => {
      this.setState({switchValue: snapshotVal});
    }

    var uid = auth.currentUser.uid;

    countriesRef = database.ref('users/' + uid);

    countriesRef.child('name').on('value', function(snapshot) {
        handleSnapshot(snapshot.val());
    });

    countriesRef.child('visible').on('value', function(snapshot) {
      handleSnapshotVisible(snapshot.val());
  });
} 

  LogoutPress = () => {
    auth.signOut()
  }

  toggleSwitch = (value) => {
    this.setState({switchValue: value});
    var user = auth.currentUser;
    var uid = user.uid;
    database.ref('users/' + uid).update({
      visible: value,
    });
    
  }

    render() { 
      return ( 
        <View style={styles.containerHome}>
            <Text style={styles.nfcTitle}>Settings</Text>
            <View style={styles.settingBlock}>
              <View style={styles.settingBlockSingle}>
                <Text style={{position: 'absolute', left: 40}}>Your account is visible</Text>
                <Switch 
                  style ={{position: 'absolute', right: 40,top:-5}}
                  value = {this.state.switchValue}
                  onValueChange = {this.toggleSwitch}
                  />
              </View>
            </View>
            <TouchableOpacity onPress={this.LogoutPress} >
              <LinearGradient colors={['#42e685', '#3bb2b8']} style={styles.LogoutButton}>
                <Text style={styles.loginText}>Logout</Text>
              </LinearGradient>
            </TouchableOpacity>
        </View>
       );
    }
  }