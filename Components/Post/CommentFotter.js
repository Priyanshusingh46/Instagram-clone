import { View, Text, StyleSheet, Image } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'
const CommentFotter = ({post}) => {
  return (
    <View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"space-between"}}>   
        <View style={styles.icon}>
          <Ionicons name="heart-outline" size={25} style={{marginRight:10}}/>
           <Ionicons name="chatbubble-outline" size={25} style={{marginRight:10}} />
           <Ionicons name="paper-plane-outline" size={25}/>
        </View>
        <Ionicons name="bookmark-outline" size={25} style={{marginRight:8}}/>

      </View>
      <Text style={{marginLeft:10}}>{post.likes} 
      <Text> likes</Text>
      </Text>

      <Text style={{marginLeft:10,fontSize:14}}>{post.name} {" "}<Text>{post.caption}</Text>
      </Text>
      <Text style={{marginLeft:10,color:"grey"}}>View all Comments</Text>

    </View>
  );
};
const styles = StyleSheet.create({
  icon: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 10,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius:20,
    
  },
});
export default CommentFotter;
