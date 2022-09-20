import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  StatusBar,
  TextInput,
  Pressable,
  FlatList,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";

import * as FileSystem from "expo-file-system";

import axios from "axios";
import { receiptSubmitURL } from "../../axiosConfig";

import { Camera, CameraType } from "expo-camera";

import { container, headerWithSearch, headerContainer } from "../styles";

const CameraScreen = ({ navigation }) => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      setImage(data.uri);
    }
  };

  const submitReceipt = async () => {
    const base64Img = await FileSystem.readAsStringAsync(image, {
      encoding: "base64",
    });

    var qs = require("qs");
    var data = qs.stringify({
      emailContent: "Hello World from Postman",
      imageb64: base64Img,
    });

    var config = {
      method: "post",
      url: "https://eureka-nodemailer.herokuapp.com/send-email-sendgrid",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    Alert.alert("Receipt Submitted");
    navigation.goBack();
  };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 0.98 }}>
      {!image && (
        <View style={styles.cameraContainer}>
          <Camera
            ref={(ref) => setCamera(ref)}
            style={styles.fixedRatio}
            type={type}
            ratio={"4:3"}
          />
        </View>
      )}
      {/* <Button
        title="Flip Camera"
        onPress={() => {
          setType(
            type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
          );
        }}
      ></Button> */}
      {/* <Button title="Take Picture" onPress={() => takePicture()} /> */}
      {image && <Image source={{ uri: image }} style={{ flex: 1 }} />}
      {!image && (
        <TouchableOpacity
          onPress={() => takePicture()}
          style={styles.cameraButton}
        >
          <Text style={{ fontSize: 14 }}> Capture Receipt </Text>
        </TouchableOpacity>
      )}

      {image && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => submitReceipt()}
            style={styles.cameraButton}
          >
            <Text style={{ fontSize: 14 }}> Submit Receipt </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setImage(null)}
            style={styles.cameraButton}
          >
            <Text style={{ fontSize: 14 }}> Retake Receipt </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  cameraContainer: {
    flex: 0.97,
    flexDirection: "row",
    borderWidth: 1,
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 0.5,
  },
  cameraButton: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    margin: 20,
  },
});
export default CameraScreen;
