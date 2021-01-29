import { StyleSheet } from "react-native";

export default StyleSheet.create({
  
  container: {
    backgroundColor: 'red',
    flex: 1,
    // width
  },
  containers: {
    backgroundColor: 'red',
    flex: 1,
    width: "100%"
  },
  drawerTopView: {
    width: "100%",
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15, 
    paddingRight: 15, 
    marginTop: 25, 
    marginBottom: 25,
  },
  drawerTopView2: {
    width: "100%",
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 15, 
    paddingBottom: 15, 
    paddingLeft: 15, 
    paddingRight: 15, 
    marginTop: 10, 
    marginBottom: 10,
    // elevation: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5, 
  },
  profileWrapper: {
    display: 'flex',
    alignItems: "center", 
    flexDirection:"row",
    flex: 1
  },
  churchLogo: {
   width: 40,
   height: 40,
   borderRadius: 40 / 2,
   marginRight: 10

  },
  drawerIcon: {
   width: 20,
   height: 10,
  },
  nameHolder: {
    display: 'flex',
    justifyContent: "center", 
  },
  containerMenuList: {
    backgroundColor: '#4b4b4b',
  },
  bottomView:{
flexDirection:'row',
    width: '100%', 
    height: 70, 
    backgroundColor: '#fff', 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  },
  comment: {
    flex:1,
   paddingTop:25,
  },
 
  profileName: {
    alignItems: 'flex-start',
      flex:1,
     
  },
  SidebarimageWrap: {
    backgroundColor: '#000', 
    alignItems:'flex-start',
    justifyContent:'flex-start',
   // marginLeft:-12


    
  },
  SidebarView: {
    backgroundColor: '#000', 
    padding: 20,
  },
  
  imageText:{
    color:'#fff',
    // fontWeight: "bold",
    marginTop: 8,
    marginBottom: 8,
    fontSize:19,

  },
  imageText2:{
    color:'#ccc',
    fontSize: 13
  },
  img: {
    height: 100,
    borderRadius: 50,
    width:100,
    marginLeft:-12,
    borderColor:'#fff',
    borderWidth:1
   
  },
  imageWrap: {
width:80,
// justifyContent: 'center',
alignItems: 'center'
    },
    CommentContentWrap: {
      marginTop:-30,
flex:1,
// marginLeft:12
// backgroundColor:'green'
    },
  singlecommentWrap: {
    padding: 20,
    flexDirection:'row',
    paddingTop:50,
    // borderBottomColor:'#ececf1',
    // borderBottomWidth:4,
    },
  listwrap: {
    padding: 20,
    borderBottomColor:'#ececf1',
    borderBottomWidth:4,
    },
    commenthead: {
    paddingLeft: 20,
    borderBottomColor:'#ececf1',
    borderBottomWidth:4,
    paddingTop:15,
    paddingBottom:15,
    },
  iconsize_cat: {
    fontSize:39,
    color:'#9d9d9d',
  
    },
  menuiconsize: {
    fontSize:25,
    color:'#9d9d9d',
  
    },
  iconsize_comment: {
    fontSize:15,
    color:'#9d9d9d'
    },
  iconsize_priority: {
    fontSize:15,
    color:'#d22947'
    },
  iconwrapper: {
    paddingTop:8,
    paddingLeft:20,
    },
  badgewrap: {
    // flex:1,
    width:40,
    height:40,
    justifyContent: 'flex-end',
    backgroundColor:'#fb4a5e',
    borderRadius:20,
    justifyContent: 'center',
    alignItems: 'center'

  },
  downbotton: {
    height: 50,
      marginRight:'auto',
    marginLeft:'auto',
    width:'90%',
  },
  datepickerwrap: {
    flex:1,
    flexDirection:'row'
  },
  innerContent: {
    flex:1,
    display: "flex",
    flexDirection:'row',
    alignItems: "center",
    justifyContent: 'center',
    // backgroundColor: "red",
  },
  innerImage1Content: {
    flex:1,
    height: "80%",
    display: "flex",
    flexDirection:'row',
    backgroundColor: "#443988",
    borderRadius: 20
  },
  innerImage2Content: {
    flex:1,
    height: "105%",
    display: "flex",
    flexDirection:'row',
    backgroundColor: "#6c62aa",
    borderRadius: 20,
    marginRight:10,
    marginTop:-10,
  },
  innerImage3Content: {
    flex:1,
    width: '100%',
    height: "105%",
    display: "flex",
    flexDirection:'row',
    backgroundColor: "#6c62aa",
    borderRadius: 20,
    marginRight:10,
    marginLeft:-20,
    marginTop:-10,
  },
  rightinnerContent: {
    width: '65%',
    display: "flex",
    flexDirection:'row'
  },
  ContentSty: {
    display: "flex",
    flexDirection:'row'
  },
  secondsection: {
    flex: 1,
    // marginBottom:51,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#374046'
  },
  text: {
    color: '#726e7c',
  },  
  itemwrap: {
    paddingBottom:5,
    paddingTop:5,
    // backgroundColor:'#f7f7f7',
  }, 
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: 'center',
    width: null,
   height: null,
  },
  imgdown: {
    // flex: 1,
    aspectRatio: 0.9,
    width: '50%',
    height:170,
    resizeMode: 'contain',
  
    // marginTop: -40,
  },
  menutext:{
    color:'#fff',
    fontSize:15,
    // fontWeight: 'bold',
  },
  imgwrap: {
    // flex:0.3,
    width: '100%',
    // justifyContent: 'center',
    // marginTop:150,
    alignItems: 'center',
    // paddingTop: 150,
    // backgroundColor:'green',
  },
    // ============================== modal Style ================================
    modalContentWrap: {
      display: "flex",
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#FFF',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      paddingLeft: 15,
      paddingRight: 10,
      width: "100%",
      paddingTop: 1,
      paddingBottom: 2,
      flex: 1
  },
  modalContentWrap2: {
      display: "flex",
      // justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#FFF',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      paddingLeft: 15,
      paddingRight: 10,
      width: "100%",
      paddingTop: 1,
      paddingBottom: 2,
      flex: 1
  },
  contentText2: {
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
      width: "100%",
  },
  msgImg: {
      height: 32,
      width: 52,
      marginTop: 16,
      marginBottom: 10,
  },
  msgImg2: {
      height: 52,
      width: 42,
      marginTop: 16,
      marginBottom: 10,
  },
  mgtText1: {
      marginTop: 10,
      marginBottom: 10,
  },
  mgtText2: {
      marginTop: 10,
      marginBottom: 20,
  },
  mgtText3: {
      // marginTop: 5,
      marginBottom: 3,
  },
  topIndicatorAct: {
      height: 6,
      width: 55,
      borderRadius: 5,
      backgroundColor: "#cccccc",
      marginTop: 3,
  },
  btnAcctStyle3: {
      backgroundColor: "#28166f",
      borderRadius: 5,
      paddingBottom: 0,
      paddingTop: 0,
      paddingRight: 30,
      paddingLeft: 30,
      elevation: 0,
      display: 'flex',
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: 60,
      marginTop: 20,
      marginBottom: 20
  },

  // ============================== modal Style ================================


}); 

// https://pusher.com/tutorials/geolocation-sharing-react-native/