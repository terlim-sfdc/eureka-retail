import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
} from "react-native";
import AppLoading from "expo-app-loading";

import * as SplashScreen from "expo-splash-screen";

import colors from "../../../assets/colors/colors";

import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import axios from "axios";
import { apiURL, apiCallHeader, encryptedAuth } from "../../../axiosConfig";

import { useFonts } from "expo-font";

// import styles and components
import { container } from "../../styles";

/* Customer Update Details Screen */
const CustomerNewAddScreen = ({ navigation }) => {
  // get date today
  let ts = Date.now();

  let date_ob = new Date(ts);
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();

  // prints date & time in YYYY-MM-DD format
  let date_today = year + "-" + month + "-" + date;

  const initialCustomerData = {
    id: "",
    name: "",
    email: "",
    address: "",
    phone: "",
    joindate: date_today,
    membership: "ordinary",
    totalspent: 0,
  };

  const [customerDataObject, setCustomerDataObject] =
    useState(initialCustomerData);

  const handleSubmit = () => {
    var axios = require("axios");
    var qs = require("qs");
    var data = qs.stringify(customerDataObject);
    var config = {
      method: "post",
      url: apiURL,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: encryptedAuth,
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
    Alert.alert("Customer added!");
  };

  if (Platform.OS == "ios") {
    StatusBar.setBarStyle("light-content", true);
  }

  {
    /* load custom fonts */
  }
  let [fontsLoaded] = useFonts({
    Bodoni: require("../../../assets/fonts/Bodoni.ttf"),
    BodoniBold: require("../../../assets/fonts/Bodoni-bold.ttf"),
  });

  const customerJoinDateTime = new Date(customerDataObject.joindate);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else
    return (
      // Overall Container Wrapper
      <ScrollView
        style={container}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        bounces={false}
      >
        <View style={{ alignItems: "flex-end" }}>
          <AntDesign
            name="closecircleo"
            size={25}
            color={colors.theme}
            style={{ padding: 10 }}
            onPress={() => navigation.goBack()}
          />
        </View>

        {/* Content Body */}
        <View style={styles.customerDetailBox}>
          <View style={styles.customerDetailLineItemBox}>
            <AntDesign name="user" style={styles.customerDetailLineItemIcons} />
            <TextInput
              style={styles.customerUpdateInputBox}
              onChangeText={(updatedName) =>
                setCustomerDataObject({
                  ...customerDataObject,
                  name: updatedName,
                })
              }
              name="name"
              type="text"
              autoCorrect={false}
              autoCapitalize="words"
              autoComplete="off"
              value={customerDataObject.name}
              placeholder="Name"
            ></TextInput>
          </View>

          <View style={styles.customerDetailLineItemBox}>
            <AntDesign
              name="mobile1"
              style={styles.customerDetailLineItemIcons}
            />
            <TextInput
              style={styles.customerUpdateInputBox}
              onChangeText={(updatedPhone) =>
                setCustomerDataObject({
                  ...customerDataObject,
                  phone: updatedPhone,
                })
              }
              name="phone"
              keyboardType="numeric"
              autoCorrect={false}
              autoComplete="off"
              value={customerDataObject.phone}
              placeholder="Mobile"
            ></TextInput>
          </View>
          <View style={styles.customerDetailLineItemBox}>
            <Feather name="mail" style={styles.customerDetailLineItemIcons} />

            <TextInput
              style={styles.customerUpdateInputBox}
              onChangeText={(updatedEmail) =>
                setCustomerDataObject({
                  ...customerDataObject,
                  email: updatedEmail,
                })
              }
              name="email"
              autoCorrect={false}
              autoComplete="off"
              value={customerDataObject.email}
              placeholder="Email"
            ></TextInput>
          </View>
          <View style={styles.customerDetailLineItemBox}>
            <AntDesign name="home" style={styles.customerDetailLineItemIcons} />

            <TextInput
              style={[styles.customerUpdateInputBox, { height: 80 }]}
              multiline={true}
              numberofLines={5}
              onChangeText={(updatedAddress) =>
                setCustomerDataObject({
                  ...customerDataObject,
                  address: updatedAddress,
                })
              }
              name="address"
              autoCorrect={false}
              autoComplete="off"
              value={customerDataObject.address}
              placeholder="Address"
            ></TextInput>
          </View>
          <TouchableOpacity
            onPress={() => {
              handleSubmit();
              navigation.goBack();
            }}
            style={{
              width: "80%",
              borderRadius: 4,
              backgroundColor: "#14274e",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: 50,
              marginTop: 40,
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: 20,
              }}
            >
              Add Customer
            </Text>
          </TouchableOpacity>
        </View>

        {/* <Button
          title="Add Customer"
          onPress={() => {
            handleSubmit();
            navigation.goBack();
          }}
        ></Button> */}
      </ScrollView>
    );
};

const styles = StyleSheet.create({
  customerDetailBox: {
    height: "90%",
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  customerDetailLineItemBox: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  customerDetailLineItemIcons: {
    marginTop: 3,
    marginHorizontal: 15,
    color: colors.theme,
  },
  customerDetailLineItemContent: { fontSize: 15 },
  customerUpdateInputBox: {
    height: 40,
    borderWidth: 1,
    width: "80%",
    padding: 5,
    fontSize: 20,
    borderColor: colors.theme,
  },
});

export default CustomerNewAddScreen;
