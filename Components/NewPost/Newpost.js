import { View, Text,StatusBar,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import FormikPost from './FormikPost';
const Newpost = ({navigation}) => {
  const b = StatusBar.currentHeight;
  return (
    <View style={{flex:1,marginTop:b}}>
      <View style={{
        justifyContent:"space-between",flexDirection:"row"
        }}>
          <TouchableOpacity
          onPress={()=>navigation.goBack()}
          >
          <Ionicons name ="caret-back-outline" size={24} style={{margin:4}}/>
          </TouchableOpacity>
        <Text style={{fontSize:20,marginRight:18,marginTop:5}}>Newpost</Text>
      </View>

      {/* formik part */}
      <FormikPost navigation={navigation}/>
    </View>
  )
}
export default Newpost
