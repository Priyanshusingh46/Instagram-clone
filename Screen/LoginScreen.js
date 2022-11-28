import {View,Text,Image,StyleSheet,StatusBar,TextInput,TouchableOpacity,Button, Alert} from "react-native";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import Validator from "email-validator";
import {firebase} from "../Firebase.js"


const LoginScreen = ({ navigation }) => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email().required("A url is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password is required"),
  });


  const onlogin = async (email,password)=>{
    try{
      await firebase.auth().signInWithEmailAndPassword(email,password)
      navigation.navigate("Home")
    }
    catch(error){
        Alert.alert(error.message);
    };
  }

  return (
    <View>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          onlogin(values.email,values.password);
        }}
        validationSchema={LoginSchema}
        validateOnMount={true}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <View>
              <Image
                source={require("../Components/Assets/Footer/instagram.png")}
                style={styles.image}
              />
            </View>
            <View style={{ marginHorizontal: 25, marginBottom: 15 }}>
              <TextInput
                placeholder="E-mail"
                keyboardType="email-address"
                textContentType="emailAddress"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                style={[
                  styles.textinput,
                  {
                    borderColor:
                      values.email.length < 1 ||
                      Validator.validate(values.email)
                        ? "#ccc"
                        : "red",
                  },
                ]}
              />

              <TextInput
                placeholder="Enter password"
                secureTextEntry={true}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                style={[
                  styles.textinput,
                  {
                    borderColor:
                      values.password.length < 1 || values.password.length >= 6
                        ? "#ccc"
                        : "red",
                  },
                ]}
              />
            </View>
            <View style={styles.forget}>
              <TouchableOpacity>
                <Text style={{ fontSize: 15, color: "#19B5FE" }}>
                  Forget Password?
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonview}>
              <Button
                title="login"
                onPress={handleSubmit}
                style={styles.button(isValid)}
                disabled={!isValid}
              />
            </View>
            <View style={styles.sign}>
              <Text style={{ fontSize: 16 }}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <Text style={{ color: "#19B5FE", fontSize: 16 }}>sign up</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};
const b = StatusBar.currentHeight;
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginTop: b + 90,
    alignSelf: "center",
    marginBottom: 10,
  },
  textinput: {
    borderRadius: 8,
    borderWidth: 1.5,
    height: 50,
    marginBottom: 10,
    paddingLeft: 15,
    fontSize: 18,
    fontWeight: "bold",
  },
  forget: {
    alignSelf: "flex-end",
    marginRight: 18,
    marginBottom: 15,
  },
  sign: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 25,
  },
  button: (isValid) => ({
    backgroundColor: isValid ? "#0096F6" : "#9ACAF7",
  }),
  buttonview: {
    marginHorizontal: 30,
  },
});

export default LoginScreen;
