import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import whitebackground from "../Assets/Footer/white_background.png";
import { Button, Divider } from "react-native-elements";
const white =
  "https://drive.google.com/file/d/1-gRjl3ew0d-KNnC0eazuNkcxCCVTFXrH/view?usp=share_link";

const uploadPostSchema = Yup.object().shape({
  imageurl: Yup.string().url().required("A url is required"),
  caption: Yup.string().max(2200, "caption has reached its limits"),
});
const FormikPost = ({navigation}) => {
  const [thumbnail, Setthumbnail] = useState(whitebackground);
  return (
    <Formik
      initialValues={{
        caption: "",
        imageurl: "",
      }}
      onSubmit={(values) => {
        console.log(values),
      navigation.goBack()
      }}
      validationSchema={uploadPostSchema}
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
          <View style={{ flexDirection: "row" }}>
            <Image
              source={
                values.imageurl.length !== 0
                  ? { uri: values.imageurl }
                  : thumbnail
              }
              style={{ width: 100, height: 100, margin: 20 }}
            />
            <View style={{ flex: 1, marginTop: 20 }}>
              <TextInput
                placeholder="Write a Caption"
                multiline={true}
                onChangeText={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
                style={{ fontSize: 18 }}
              />
            </View>
          </View>
          <Divider width={1} />
          <TextInput
            onChange={(e) => Setthumbnail(e.nativeEvent.text)}
            placeholder="Enter your image url"
            onChangeText={handleChange("imageurl")}
            onBlur={handleBlur("imageurl")}
            value={values.imageurl}
            style={{ fontSize: 15, marginLeft: 18 }}
          />

          {errors.imageurl && (
            <Text style={{ fontSize: 10, color: "red", marginLeft: 18 }}>
              {errors.imageurl}
            </Text>
          )}
          <View
            style={{
              width: 100,
              flex: 1,
              alignSelf: "center",
              marginTop: 10,
              borderRadius: 15,
            }}
          >
            <Button onPress={handleSubmit} title="Share" disabled={!isValid} />
          </View>
        </>
      )}
    </Formik>
  );
};

export default FormikPost;
