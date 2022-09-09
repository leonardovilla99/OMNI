import { StyleSheet } from 'react-native';

export default StyleSheet.create({
   container:{
    flex:1,
   },
   containerHome:{
    alignItems: 'center',
    width:'100%',
    backgroundColor: '#fff',
    flex:1,
    ...Platform.select({
        ios: {
            paddingTop: 50,
        },
        android: {
            paddingTop: 20,
        }
    })
   },
   containerBlocchi:{
    alignItems: 'center',
    width:'100%',
    paddingLeft:'5%',
    paddingRight: '5%',
    backgroundColor: '#f1f3f6',
    flex:1,
    ...Platform.select({
        ios: {
            paddingTop: 50,
        },
        android: {
            paddingTop: 20,
        }
    })
   },
   title:{
    fontSize:30,
    width: '70%',
    marginTop:40,
    marginBottom: 40,
    textAlign: 'center',
    ...Platform.select({
        ios: {
            fontWeight: "500",
        },
        android: {
            fontWeight:"600",
        }
    }),
   },
   loginText:{
    color:"#fff",
   },
   textInput:{
    marginVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    paddingVertical: 5,
    color:"#fff",
    textAlign:"center",
    width:"100%",
   },
   loginTextButton:{
    color:"#ccc",
    fontWeight:"300",
    marginBottom:3,
   },
   loginTextInput:{
    width:"70%",
   },
   Button:{
    backgroundColor:"#fff",
    width: 150,
    height: 50,
    justifyContent:"center",
    alignItems:"center",
    marginTop:30,
    borderRadius: 30,
    marginVertical:10,
   },
   LogoutButton:{
    width: 150,
    height: 50,
    justifyContent:"center",
    alignItems:"center",
    marginTop:30,
    borderRadius: 30,
    marginVertical:10,
   },
   megaBox:{
    width: '100%',
    height: 'auto',
    borderRadius: 15,
    flexDirection: 'row',
   },
   miniBox:{
    width: '100%',
    height: 'auto',
    backgroundColor:'#f1f3f6',
    borderRadius: 15,
    ...Platform.select({
        ios: {
            shadowOffset: { width: 6, height: 6},
            shadowOpacity: 0.1,
            shadowColor: '#3754aa',
        },
        android: {
            elevation: 5,
        }
    }),
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
   },
   megaBoxContainer:{
    marginBottom: 20,
    borderRadius: 15,
    width: '100%',
    paddingLeft:'5%',
    paddingRight: '5%',
   },
   miniBoxContainer:{
    marginBottom: 15,
    padding:55,
    borderRadius: 30,
    marginHorizontal:'2.5%',
    backgroundColor: "#D3D3D3",
   },
   miniBoxContainerAll:{
    marginBottom: 15,
    padding:55,
    borderRadius: 30,
    marginHorizontal:'2.5%',
    alignItems: "center",
   },
   buttonAdd:{
    width:50,
    height:50,
    alignItems:'center',
    borderRadius: 50,
    justifyContent:'center',
    ...Platform.select({
        ios: {
            shadowOffset: { width: -6, height: -6},
            shadowOpacity: 1,
            shadowColor: '#ffffff',
        },
        android: {
            elevation: 5,
        }
    }),
   },
   buttonAddBox:{
    width: 50,
    height: 50,
    backgroundColor:'#f1f3f6',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
        ios: {
            shadowOffset: { width: 6, height: 6},
            shadowOpacity: 0.1,
            shadowColor: '#3754aa',
        },
        android: {
            elevation: 5,
        }
    }),
   },
   profilePictures:{
    width: 80,
    height:80,
    borderRadius: 80,
    backgroundColor: 'white',
    margin: 25,
   },
   profileImage:{
    width: 100,
    height:100,
    borderRadius: 100,
    backgroundColor: 'white',
    margin: 10,
   },
   ImageBox:{
    width: 70,
    height: 70,
    marginTop: 10,
   },
   bioPannel:{
    flex:1,
    paddingHorizontal: "5%",
    ...Platform.select({
         ios: {
             paddingTop: 60,
         },
         android: {
             paddingTop: 20,
         }
     })
   },
   addingPannelCenter:{
    alignItems: "center",
   },
   addingPannelImage:{
    marginTop: 20,
    width:"100%",
    height: 300,
    resizeMode: "contain",
   },
   addingPannelText:{
       color:"#fff",
       textAlign: "center",
       fontSize: 17,
       marginVertical: 40,
   },
   addingPannelInput:{
       color:"#000",
       backgroundColor:"#fff",
       width:"100%",
       paddingVertical: 15,
       paddingHorizontal:15,
       borderRadius: 15,
       textAlign:"center",
   },
   addingPannelInputMultiline:{
    color:"#000",
    backgroundColor:"#fff",
    width:"100%",
    paddingTop:20,
    height:100,
    paddingHorizontal:20,
    borderRadius: 15,
},
   addingPannelButton:{
        width: "100%",
        paddingVertical: 15,
        paddingHorizontal:15,
        borderRadius: 15,
        backgroundColor:"#fff",
   },
   addingPannelButtonText:{
        color: "#3bb2b8",
        textAlign:"center",
        fontSize:15,
        fontWeight:"500",
   },
   addingPannelTextImportant:{
        color:"#fff",
        marginTop:20,
        fontSize: 15,
        fontWeight:"800",
   },
   NFCRing:{
    backgroundColor:"#DBCCCD",
    flexDirection: 'row',
    borderRadius:15,
    shadowColor: "#DBCCCD",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.3,
    elevation: 4,
    marginBottom:15,
   },
   titleBlock:{
    color:"#fff",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 30,
   },
   nfcTitle:{
       fontSize:25,
       fontWeight:"500",
       marginTop:30,
   },
   NFCtext:{
    fontSize:16,
    textAlign: "center",
    marginHorizontal:40,
    color: "white",
    marginBottom:40,
   },
   NFCimage:{
    width:100,
    height:100,
    marginBottom:30,
    marginTop:30,
   },
   NFCbox:{
    backgroundColor:"#DBCCCD",
    width:"90%",
    marginLeft:"5%",
    borderRadius:15,
    shadowColor: "#DBCCCD",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:40,
   },
   NFCbutton:{
    backgroundColor:"#f1f3f6",
    width:200,
    height:50,
    borderRadius:15,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
        ios: {
            shadowOffset: { width: 6, height: 6},
            shadowOpacity: 0.1,
            shadowColor: '#3754aa',
        },
        android: {
            elevation: 5,
        }
    }),
   },
   box:{
    backgroundColor: "#42e685",
    marginRight:10,
    padding: 50,
    borderRadius: 30,
   },
    ScrollView:{
        width: "100%",
        paddingHorizontal:"5%",
        marginTop:5,
        paddingBottom:40,
    },
    settingBlock:{
        marginTop:70,
        width:"100%",
    },
    settingBlockSingle:{
        height:50,
        justifyContent:"center",
        paddingHorizontal:20,
        width:"100%",
        flexDirection: 'row'
    },
    benvenuto:{
        width: "95%",
        marginLeft: "5%",
        paddingRight: "5%",
        marginBottom: 20,
        borderTopLeftRadius:30,
        borderBottomLeftRadius:30,
    },
    benvenutoInterno:{
        paddingVertical: 30,
        paddingHorizontal: 30,
    },
    titleBenvenuto:{
        fontSize: 25,
        fontWeight: "600",
        color: "#fff",
        textAlign: "center",
        marginBottom: 10,
    },
    benvenutoButton:{
        backgroundColor: "#fff",
        width: 200,
        borderRadius:30,
        marginTop: 40,
        flexDirection:'row',
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
    },
    benvenutoTesto:{
        color: "#3bb2b8",
        fontWeight: "600",
        fontSize: 15,
        marginRight: 15,
    },
    addBenvenuto:{
        height:46,
        width: 46,
        paddingHorizontal:3,
        paddingVertical: 3,
        borderRadius:50,
    },
    addBenvenutoInterno:{
        backgroundColor: "#fff",
        borderRadius:50,
        height:40,
        width: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    addBenvenutoText:{
        color: "#3bb2b8",
        fontWeight: "600",
        fontSize:20,
    },
    socialTitle:{
        width: "95%",
        fontSize:100,
        color: "#f5f5f5",
        marginBottom: -40,
        marginTop: -50,
        ...Platform.select({
            ios: {
                fontWeight: "600",
            },
            android: {
                fontWeight:"700",
            }
        }),
    },
    qrCodeBox:{
        width:"100%",
        borderRadius:30, 
        marginTop:20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerConnect:{
        width:"100%",
        backgroundColor:"#fff",
        alignItems:"center",
        flex:1,
        ...Platform.select({
            ios: {
                paddingTop: 50,
            },
            android: {
                paddingTop: 20,
            }
        })
    }
})
