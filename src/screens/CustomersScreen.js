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

import { TouchableOpacity } from "react-native-gesture-handler";

import trendingNowData from "../../data/trendingNowData";

import CustomerCards from "../components/CustomerCards";

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
    silver: require("../../assets/images/silver.png"),
    bronze: require("../../assets/images/bronze.png"),
  };
  return (
    // Overall Container Wrapper
    <View stickyHeaderIndices={[0]} bounces={false} style={container}>
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
      </View>
    </View>
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
    letterSpacing: 0.25,
    color: "black",
  },
});

export default CustomersScreen;
