import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import { Divider } from 'react-native-elements';
const Fotter = () => {
  return (
    <View style={{flex:1,justifyContent:"center"}}>
      <Divider width={1}/>
        <View style={{flex:1,flexDirection:"row",justifyContent:"space-around",marginTop:10}}>
            <TouchableOpacity>
                <Image source={require("../Assets/Footer/home_active.png")} style={{width:25,height:25}} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require("../Assets/Footer/search_active.png")} style={{width:25,height:25}}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require("../Assets/Footer/real.jpg")} style={{width:35,height:35,borderRadius:18}}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require("../Assets/Stories/me.jpg")} style={{width:35,height:35,borderRadius:18}}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Fotter