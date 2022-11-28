import React from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Header from "../Components/HomeScreen/Header.js";
import Post from "../Components/HomeScreen/Post.js";
import Stories from "../Components/HomeScreen/Stories.js";
import { POST } from "../Data/Post.js";
import Fotter from "../Components/HomeScreen/Fotter.js";
import { Divider } from "react-native-elements";
function Home({navigation}) {
  const b = StatusBar.currentHeight;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        marginTop: b,
        color: "white",
        marginBottom: 140,
      }}
    >
      <SafeAreaView>
        <Header navigation={navigation}/>
        <Stories />
        <ScrollView style={{ marginBottom: 10 }}>
          {POST.map((post, index) => (
            <Post post={post} key={index} />
          ))}
          <Fotter />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default Home;
