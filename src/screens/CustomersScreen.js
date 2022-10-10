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
} from "react-native";
import axios from "axios";

import NotificationPopup from "react-native-push-notification-popup";

import { TouchableOpacity } from "react-native-gesture-handler";

import trendingNowData from "../../data/trendingNowData";

import colors from "../../assets/colors/colors";

import CustomerCards from "../components/CustomerCards";

import Ionicons from "react-native-vector-icons/Ionicons";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// Import components and styles
import HeaderText from "../components/HeaderText";
import SearchBar from "../components/SearchBar";
import TrendingNowCards from "../components/TrendingNowCards";
import { container, headerWithSearch, headerContainer } from "../styles";
import { apiURL, apiCallHeader } from "../../axiosConfig";

const CustomersScreen = ({ navigation }) => {
  /* Set up state for search term */
  const [term, setTerm] = useState("");
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setErrorFlag] = useState(false);

  // Fetch Customers from Database
  const fetchCustomers = async () => {
    try {
      setIsLoading(true);
      //apiCallHeader contains the authentication using Basic Auth
      const response = await axios.get(apiURL, apiCallHeader);
      if (response.status === 200) {
        setCustomers(response.data);
        setIsLoading(false);
        return;
      } else {
        throw new Error("Failed to fetch customers from data");
      }
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Customer Data fetching cancelled");
      } else {
        console.log(error);
        setIsLoading(false);
      }
    }
  };

  // show mock up popup from return item receipt processing
  const showReceiptProcessedPopup = () => {
    popup.show({
      onPress: function () {
        navigation.navigate("ReturnHistoryScreen");
      },
      appIconSource: require("../../assets/images/eureka-lightning-logo.png"),
      appTitle: "Eureka Retail",
      timeText: "Now",
      title: "Return Item Receipt Processed Successfully",
      body: "The returned item Trapeze Heel Slingback Pumps - Chalk (CK1-60920241) has been processed.",
      slideOutTime: 3000,
    });
  };

  // load customer data from database
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchCustomers();
    });

    return unsubscribe;
  }, [navigation]);

  const filteredCustomerList = customers.filter(
    (customer) =>
      customer.name__c.toLowerCase().includes(term.toLowerCase()) ||
      customer.email__c.toLowerCase().includes(term.toLowerCase())
  );

  if (Platform.OS == "ios") {
    StatusBar.setBarStyle("light-content", true);
  }
  // define the image path for membership tier
  const membershipImage = {
    gold: require("../../assets/images/gold.png"),
    bronze: require("../../assets/images/bronze.png"),
  };
  return (
    // Overall Container Wrapper
    <ScrollView stickyHeaderIndices={[0]} bounces={false} style={container}>
      <NotificationPopup
        ref={(ref) => (popup = ref)}
        shouldChildHandleResponderStart={true}
        shouldChildHandleResponderMove={true}
      />

      {/* Header */}
      <View style={headerWithSearch}>
        <View style={headerContainer}>
          <HeaderText text="Customers" />
        </View>

        {/* Search */}
        <SearchBar
          term={term}
          onTermChange={(newTerm) => {
            setTerm(newTerm);
          }}
        />
      </View>
      {/* Content Body */}
      <TouchableOpacity
        title="Add new customer"
        style={styles.addCustomerButton}
        onPress={() => navigation.navigate("CustomerNewAddScreen")}
      >
        <Text style={styles.addCustomerButtonText}>
          + &nbsp;&nbsp;Add new customer
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {/* <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate("CustomerNewAddScreen")}
        >
          <Ionicons
            name="person-add"
            size={25}
            style={{
              color: colors.theme,
              alignSelf: "center",
              justifyContent: "center",
            }}
          />
          <Text style={styles.buttonText}>Add Customer</Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate("ItemReturnReasonScreen")}
        >
          <MaterialCommunityIcons
            name="barcode-scan"
            size={35}
            style={{
              color: colors.theme,
              alignSelf: "center",
              justifyContent: "center",
            }}
          />
          <Text style={styles.buttonText}>Return Items</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          // onPress={() => navigation.navigate("ReturnHistoryScreen")}
          onPress={() => {
            showReceiptProcessedPopup();
          }}
        >
          <MaterialCommunityIcons
            name="credit-card-refund"
            size={35}
            style={{
              color: colors.theme,
              alignSelf: "center",
              justifyContent: "center",
            }}
          />
          <Text style={styles.buttonText}>Return History</Text>
        </TouchableOpacity>
      </View>
      {/* View of Customer Cards and Potentially Trending Now */}
      <View>
        {/* Customer Cards */}
        {term == "" && (
          <CustomerCards
            navigate={navigation.navigate}
            customersData={customers}
            horizontal={true}
            isLoading={isLoading}
          />
        )}

        {/* Customers Cards with search term */}
        {term != "" && (
          <CustomerCards
            navigate={navigation.navigate}
            customersData={filteredCustomerList}
            horizontal={false}
            isLoading={isLoading}
          />
        )}

        {/* Trending Now Cards - shows up only when search term is blank */}
        {term == "" && (
          <TrendingNowCards
            navigate={navigation.navigate}
            trendingNowData={trendingNowData}
          />
        )}
        {/* 
        <TouchableOpacity
          onPress={() => navigation.navigate("CameraScreen")}
          style={{
            width: "80%",
            borderRadius: 4,
            backgroundColor: "#14274e",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: 40,
            marginTop: 30,
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
            }}
          >
            Submit Receipt to Return Items
          </Text>
        </TouchableOpacity> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  addCustomerButton: {
    alignItems: "flex-start",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 0,
    elevation: 5,
    backgroundColor: "white",
    height: 60,
  },
  addCustomerButtonText: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    color: "black",
  },
  actionButton: {
    backgroundColor: colors.white,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 5,
    height: 80,
    width: 180,
    borderRadius: 10,
    justifyContent: "space-between",
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
    alignSelf: "center",
    textAlign: "center",
  },
});

export default CustomersScreen;
