import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import HomeScreen from "./Home.js"
import NewPost from "../Components/NewPost/Newpost.js"
import LoginScreen from './LoginScreen.js';
import Signup from './Signup.js';
const screenOptions={
  headerShown: false
}
  export const SignedInScreen = () => 
   (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="NewPost" component={NewPost} />
      </Stack.Navigator>
    </NavigationContainer>
  )


  export const SignedOutScreen =()=>(

    <NavigationContainer>
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  </NavigationContainer>

  )
