import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import Validator from "email-validator";
import { firebase, db } from "../Firebase.js";

const Signup = ({ navigation }) => {
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email().required("A email is required"),
    username: Yup.string()
      .required()
      .min(8, "A 6 character username is required"),
    password: Yup.string().required().min(8, "Password is required"),
  });

  const getRandomProfile = async () => {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    return data.results[0].picture.large;
  };

  const onsignup = async (email, password, username) => {
    try {
      const authUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      db.collection("users").add({
        owner_uid: authUser.user.uid,
        username: username,
        email: authUser.user.email,
        password:password,
        profile_picture: await getRandomProfile(),
      });
      Alert.alert("User get Registerd");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View>
      <Formik
        initialValues={{
          email: "",
          password: "",
          username: "",
        }}
        onSubmit={(values) => {
          onsignup(values.email, values.password, values.username),
            navigation.goBack();
        }}
        validationSchema={SignupSchema}
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
                placeholder="Email"
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
                placeholder="username"
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
                style={[
                  styles.textinput,
                  {
                    borderColor:
                      values.username.length < 1 || values.username.length >= 6
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
            <View style={styles.buttonview}>
              <Button
                title="login"
                onPress={handleSubmit}
                style={styles.button(isValid)}
                disabled={!isValid}
              />
            </View>
            <View style={styles.login}>
              <Text style={{ fontSize: 16 }}>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ color: "#19B5FE", fontSize: 16 }}>log in</Text>
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
  login: {
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

export default Signup;
