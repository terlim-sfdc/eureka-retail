import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import AppLoading from "expo-app-loading";
import colors from "../../assets/colors/colors";

import AntDesign from "react-native-vector-icons/AntDesign";

import { useFonts } from "expo-font";

// Import components and styles
import { container, headerWithoutSearch, headerContainer } from "../styles";
import HeaderText from "../components/HeaderText";

/* Actual Customer Detail Screen */

const AboutScreen = ({ route, navigation }) => {
  if (Platform.OS == "ios") {
    StatusBar.setBarStyle("light-content", true);
  }

  {
    /* load custom fonts */
  }
  let [fontsLoaded] = useFonts({
    Bodoni: require("../../assets/fonts/Bodoni.ttf"),
    BodoniBold: require("../../assets/fonts/Bodoni-bold.ttf"),
  });

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
        {/* Header */}
        <View style={headerWithoutSearch}>
          <View style={headerContainer}>
            <HeaderText text="About" />
          </View>
        </View>

        {/* Content Body */}
        <View style={styles.infoBackground}>
          <Text style={styles.title}>About This App</Text>
          <Text style={styles.content}>
            This app is built using React Native, showcasing the flexibility of
            using pro-code and open source tools such as Javascript to build a
            native mobile app.
          </Text>
          <Text style={styles.title}>Customer Data</Text>
          <Text style={styles.content}>
            Customer data interfaced within this app is directly retrieved from
            a Postgres database and an API app layer using Express Node.js, both
            hosted on Heroku. Any changes made to customer data within this app
            is synchronized with the Salesforce object in the Salesforce
            customer (demo) tenant using Heroku Connect.
          </Text>
          <Text style={styles.title}>Heroku Connect</Text>
          <Text style={styles.content}>
            Heroku Connect is an add-on that synchronizes data between a
            Salesforce organization and a Heroku Postgres database. Using Heroku
            Connect with Heroku Postgres, developers can build custom
            applications (such as this mobile app) that interacts with
            Salesforce data easily, securely and seamlessly.
          </Text>
          <Text style={styles.title}>Express Node.js</Text>
          <Text style={styles.content}>
            Express is a minimal and flexible Node.js web application framework
            that provides a robust set of features for web and mobile
            applications, which makes creating a robust API quick and easy.
          </Text>
          <Text style={styles.title}>Eureka Team</Text>
          <Text style={styles.content}>
            {"\u2022"} Terence Lim (Developer Evangelist) {"\n"}
            {"\u2022"} Ji Soo Kim (UX Designer)
          </Text>
          <Text style={styles.title}>
            Full Details on Implementation and Source Codes:
          </Text>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://milenology.com/blog/reactnativesalesforce"
              )
            }
          >
            <Text style={styles.links}>{"\u2022"}Eureka Mobile App Blog</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
};

const styles = StyleSheet.create({
  infoBackground: {
    backgroundColor: colors.white,
    padding: 15,
  },
  title: {
    fontSize: 20,
  },
  content: {
    fontSize: 15,
    marginBottom: 20,
  },
  links: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default AboutScreen;
