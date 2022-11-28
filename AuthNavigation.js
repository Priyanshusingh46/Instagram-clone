import { View, Text } from 'react-native'
import {React,useEffect, useState} from 'react'
import { SignedInScreen, SignedOutScreen } from './Screen/RoutesOfScreen'
import {firebase} from "./Firebase.js"

const AuthNavigation = () => {

    const[currentUser,setCurrentUser] = useState(null)

    const userHandler = (user) =>user
    ?setCurrentUser(user) 
    :setCurrentUser(null)

    useEffect(() => 
      firebase.auth().onAuthStateChanged(user=>userHandler(user))
    , [])
    

  return <>
  {currentUser ? <SignedInScreen /> : <SignedOutScreen /> }
  </>
}

export default AuthNavigation