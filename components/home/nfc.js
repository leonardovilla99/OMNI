import React from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,TouchableOpacity,Image} from 'react-native';
import NfcManager, {Ndef, NfcTech} from 'react-native-nfc-manager';
import LinearGradient from 'react-native-linear-gradient';
import Share from 'react-native-share';

import styles from '../config/style';
import {f,auth,database,storage} from '../config/api';
import style from '../config/style';

function buildUrlPayload(valueToWrite) {
  return Ndef.encodeMessage([
      Ndef.uriRecord(valueToWrite),
  ]);
}

export default class Nfc extends React.Component {

  constructor(props){

    super(props);
    this.state = {
      link: '',
    };
  } 

  componentDidMount () { 

    NfcManager.start();
  } 


  componentWillUnmount() {
    this._cleanUp();
  }

  shareLink = () => {
    const shareOptions = {
      title: 'OMNI link',
      url: "https://www.leographic.it/projectO?user_uid=" + auth.currentUser.uid,
    };

    Share.open(shareOptions)
      .then((res) => { console.log(res) })
      .catch((err) => { err && console.log(err); });
  }

    render() { 
      return ( 
        <View style={styles.containerConnect}>
          <Text style={styles.nfcTitle}>Connect.</Text>
          <ScrollView style={{width:"100%",}}>
            <TouchableOpacity style={{width:"90%",marginLeft:"5%",}} onPress={this._testNdef}>
              <LinearGradient colors={['#42e685', '#3bb2b8']} style={styles.qrCodeBox}>
                <Text style={styles.titleBlock}>NFC</Text>
                <Image source={require("../image/nfc.png")} style={styles.NFCimage}/>
                <Text style={styles.NFCtext}>Bring your device closer and click the box to sync</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={{width:"90%",marginLeft:"5%",}} onPress={() => this.props.navigation.navigate('qrcode')}>
              <LinearGradient colors={['#42e685', '#3bb2b8']} style={styles.qrCodeBox}>
                <Text style={styles.titleBlock}>QR code</Text>
                <Image source={require("../image/qr.png")} style={styles.NFCimage}/>
                <Text style={styles.NFCtext}>Click here to see your QR code</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={{width:"90%",marginLeft:"5%",}} onPress={() => this.shareLink()}>
              <LinearGradient colors={['#42e685', '#3bb2b8']} style={styles.qrCodeBox}>
                <Text style={styles.titleBlock}>Link share</Text>
                <Image source={require("../image/share.png")} style={styles.NFCimage}/>
                <Text style={styles.NFCtext}>Click here to share your link</Text>
              </LinearGradient>
            </TouchableOpacity>
          </ScrollView>
        </View>
       );
    }

    _cleanUp = () => {
      NfcManager.cancelTechnologyRequest().catch(() => 0);
    }
  
    _testNdef = async () => {
      var link = "https://www.leographic.it/projectO?user_uid=" + auth.currentUser.uid;
      try {
        let resp = await NfcManager.requestTechnology(NfcTech.Ndef, {
          alertMessage: 'Touch your ring with your phone to sync!'
        });
        console.warn(resp);
        let ndef = await NfcManager.getNdefMessage();
        console.warn(ndef);
        let bytes = buildUrlPayload(link);
        await NfcManager.writeNdefMessage(bytes);
        console.warn('successfully write ndef');
        await NfcManager.setAlertMessageIOS('Your ring has been synchronized!');
        this._cleanUp();
      } catch (ex) {
        console.warn('ex', ex);
        this._cleanUp();
      }
    }
  }