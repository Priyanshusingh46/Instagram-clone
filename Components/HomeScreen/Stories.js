import { View, Text, TouchableOpacity, Image,StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import User from '../../Data/User'

const Stories = () => {
  return (
    <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
                USER.map((img,key)=>(
                  <View style={{marginTop:5, alignItems:"center"}} key={key}>
                    <TouchableOpacity>
                    <Image source={img.image} style={styles.story}/>
                    </TouchableOpacity>
                    <Text>
                      {
                        img.user.length>11?img.user.slice(0,8)+"..." :img.user 
                      }
                    </Text>
                  </View>

                ))
            }
        </ScrollView>
    </View>
  )
}

const styles=StyleSheet.create({
  story:{
    height:70,
    width:70,
    borderRadius:35,
    marginLeft:10,
    borderColor:"grey",
    borderWidth:3
  }
})

export default Stories