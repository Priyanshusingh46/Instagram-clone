import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'

const PostHeader = ({post}) => {
  return (
    <View>
        <Divider width={1} Orientation="vertical"/>
        <View style={styles.container}>
            <View style={{flexDirection:"row",justifyContent:"space-between",marginLeft:8}}>
            <Image source={post.profile} style={styles.profile}/>
            <Text style={styles.text}>{post.name}</Text>
            </View>

            <View>
                <TouchableOpacity>
                 <Text style={styles.dotss}>...</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}
const styles= StyleSheet.create({
    profile:{
        width:40,
        height:40,
        borderRadius:20
    },
    container:{
        marginTop:10,
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:10
    },
    text:{
        textAlign:"center",
        fontWeight:"600",
        marginLeft:10,
        marginTop:8,
        fontSize:16
    },
    dotss:{
        fontWeight:"bold",
        fontSize:20,
        marginRight:5
    }
})

export default PostHeader