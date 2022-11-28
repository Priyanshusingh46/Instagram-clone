import { View, Text,Image, StyleSheet } from 'react-native'
import React from 'react'

const Comments = ({post}) => {
  return (
      <>
      {
        post.comments.map((comments,index)=>(
            <View key={index}>
                <Text style={{marginLeft:10,fontWeight:"600"}}>{comments.user} 
                <Text style={{fontWeight:"300"}}> {comments.comment}</Text>
                </Text>
            </View>
        ))
      }
      </>
  )
}
const styles= StyleSheet.create({
    width:40,
    borderRadius:20
})

export default Comments