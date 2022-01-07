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
import colors from "../../../assets/colors/colors";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import axios from "axios";
import { apiURL, apiCallHeader, encryptedAuth } from "../../../axiosConfig";

import { useFonts } from "expo-font";

// import styles and components
import { container } from "../../styles";

/* Customer Update Details Screen */
const CustomerUpdateDetailsScreen = ({ route, navigation }) => {
  const { customer } = route.params;
  const userId = customer.id;
  const customerQueryURL = apiURL + "/" + userId;

  const initialCustomerData = {
    id: "",
    name: "",
    email: "",
    address: "",
    phone: "",
    joindate: "",
    membership: "",
    totalspent: "",
  };

  const [customerDataObject, setCustomerDataObject] =
    useState(initialCustomerData);

  // load customer data from database
  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await axios
          .get(customerQueryURL, apiCallHeader)
          .then((res) => {
            const customerObj = res.data[0];

            // once data is loaded from api, update the customer object state
            setCustomerDataObject({
              id: customerObj.id,
              name: customerObj.name__c,
              email: customerObj.email__c,
              address: customerObj.address__c,
              phone: customerObj.phone__c,
              joindate: customerObj.joindate__c,
              membership: customerObj.membership__c,
              totalspent: customerObj.totalspent__c,
            });
          });
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Customer Data fetching cancelled");
        } else {
          console.log(error);
        }
      }
    };
    fetchCustomer();
  }, []);

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
    Alert.alert("Customer details updated!");
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
            ></TextInput>
          </View>

          {/* {Line seperator} */}
          <View
            style={{
              borderBottomColor: "grey",
              borderBottomWidth: 1,
              width: "92%",
              alignSelf: "center",
            }}
          />
          <View style={styles.customerDetailLineItemBox}>
            <MaterialIcons
              name="card-membership"
              style={styles.customerDetailLineItemIcons}
            />
            <Text style={styles.customerDetailLineItemContent}>
              {customerDataObject.membership.toUpperCase()} tier member
            </Text>
          </View>
          <View style={styles.customerDetailLineItemBox}>
            <MaterialCommunityIcons
              name="account-clock"
              style={styles.customerDetailLineItemIcons}
            />
            <Text style={styles.customerDetailLineItemContent}>
              Member since{" "}
              {customerJoinDateTime.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </Text>
          </View>
          <View style={styles.customerDetailLineItemBox}>
            <Feather
              name="dollar-sign"
              style={styles.customerDetailLineItemIcons}
            />
            <Text style={styles.customerDetailLineItemContent}>
              Total spending so far: ${customerDataObject.totalspent}
            </Text>
          </View>
        </View>
        <Button
          title="Update Customer Details"
          onPress={() => handleSubmit()}
        ></Button>
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

export default CustomerUpdateDetailsScreen;
