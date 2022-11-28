import { View, Text,Image,SafeAreaView, StatusBar,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import {firebase } from "../../Firebase.js"

const handleSignOut = async () =>{
  try{
  await firebase.auth().signOut().then(()=>{
    console.log("log out Successfull")})
  }
  
  catch(error){
    console.log(error)
  }
  }

const Header = ({navigation}) => {
  return (
    <SafeAreaView >
      <View >

      <View style={styles.headerContainer}>
      <View style={styles.Container}>
          <Text style={styles.Heading}>Instagram</Text>
        </View>

        <View style={styles.messagesContainer}>
          <TouchableOpacity
          onPress={()=>navigation.push("NewPost")}
          >
          <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="chatbubble-outline" size={20} style={{fontWeight:"600",marginTop:5,marginLeft:10,marginRight:10}}
            />

          </TouchableOpacity>
          <TouchableOpacity
          onPress={handleSignOut}
          >
            <Text style={styles.logout}>Log out</Text>
          </TouchableOpacity>
        </View>
        </View>

      </View>

    </SafeAreaView>
  )
}
const b = StatusBar.currentHeight;
const styles = StyleSheet.create({
  messagesContainer:{
    flexDirection:"row",
    marginRight:18
  },
  headerContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:5,
    marginTop:10
  },
  Heading:{
    fontSize:20,
    marginLeft:10
  },
  plus:{
    fontSize:24
  },
  logout:{
    fontSize:17,
    marginTop:5,
    fontWeight:"bold"
  }

})

export default Header