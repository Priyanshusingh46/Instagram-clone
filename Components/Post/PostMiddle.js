import { View, Text,Image, StyleSheet} from 'react-native'
import React from 'react'

const PostMiddle = ({post}) => {
  return (
    <View style={{marginBottom:5}}>
      <Image source={post.imageurl} style={styles.posts}/>
    </View>
  )
}
const styles = StyleSheet.create({
    posts:{
        width:"100%",
        height:550,
        justifyContent:"center",
        alignItems:"center"
    }

})
export default PostMiddle