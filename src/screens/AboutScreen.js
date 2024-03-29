import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import colors from "../../assets/colors/colors";
import { useFonts } from "expo-font";
import { Button } from "react-native-paper";

import slackLogo from "../../assets/images/slack-logo.png";
import eurekaRetailMap from "../../assets/images/eureka_retail_map.png";

// Import components and styles
import { container, headerWithoutSearch, headerContainer } from "../styles";
import HeaderText from "../components/HeaderText";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

/* Actual Customer Detail Screen */

const AboutScreen = ({ route, navigation }) => {
  if (Platform.OS == "ios") {
    StatusBar.setBarStyle("light-content", true);
  }

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
        <Text style={styles.title}>About Eureka Retail</Text>
        <Text style={styles.content}>
          This app (Eureka Retail) is built using React Native, showcasing the
          flexibility of using pro-code and open source tools such as Javascript
          to build a custom native mobile app, combining the power of the
          Salesforce Platform and multi-cloud to create an amazing Customer 360
          experience.
        </Text>

        <Button
          icon="eye"
          mode="contained"
          onPress={() => Linking.openURL("https://sforce.co/3M8hfvl")}
          marginBottom={10}
        >
          Eureka Retail Behind the Scenes
        </Button>

        <Image
          source={eurekaRetailMap}
          style={{
            height: 492,
            width: 349,
            alignSelf: "center",
            overflow: "visible",
            marginBottom: 35,
          }}
        ></Image>

        <Text style={styles.title}>Customer Data</Text>
        <Text style={styles.content}>
          Customer data interfaced within this app is directly retrieved from a
          Postgres database and an API app layer using Express Node.js, both
          hosted on Heroku. Any changes made to customer data within this app is
          synchronized with the Salesforce object in the Salesforce customer
          (demo) tenant using Heroku Connect.
        </Text>

        <Text style={styles.title}>Connect with the Eureka Team</Text>

        {/* Eureka Mobile Request Channel */}
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("slack://channel?team=T01GST6QY0G&id=C033D7XT4RG")
          }
        >
          <View style={styles.slackButton}>
            <View>
              <Text style={{ fontWeight: "bold" }}>#eureka-mobile-request</Text>
              <Text>Join our slack channel!</Text>
            </View>
            <View
              style={{
                padding: 3,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={slackLogo}
                style={{ height: 20, width: 20, marginHorizontal: 5 }}
              ></Image>
              <Text>Slack Channel</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Terence User ID */}
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("slack://user?team=T01GST6QY0G&id=U0275D3JAKD")
          }
        >
          <View style={styles.slackButton}>
            <View>
              <Text style={{ fontWeight: "bold" }}>Terence Lim</Text>
              <Text>Developer Evangelist</Text>
            </View>
            <View
              style={{
                padding: 3,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={slackLogo}
                style={{ height: 20, width: 20, marginHorizontal: 5 }}
              ></Image>
              <Text>Slack Message</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Jisoo User ID */}
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("slack://user?team=T01GST6QY0G&id=U02DFM4NWHL")
          }
        >
          <View style={styles.slackButton}>
            <View>
              <Text style={{ fontWeight: "bold" }}>Ji Soo Kim</Text>
              <Text>Senior Visual Designer</Text>
            </View>
            <View
              style={{
                padding: 3,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={slackLogo}
                style={{ height: 20, width: 20, marginHorizontal: 5 }}
              ></Image>
              <Text>Slack Message</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Ian Douglas User ID */}
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("slack://user?team=T01GST6QY0G&id=U01GM42APC1")
          }
        >
          <View style={styles.slackButton}>
            <View>
              <Text style={{ fontWeight: "bold" }}>Ian Douglas</Text>
              <Text>Director</Text>
            </View>
            <View
              style={{
                padding: 3,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={slackLogo}
                style={{ height: 20, width: 20, marginHorizontal: 5 }}
              ></Image>
              <Text>Slack Message</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Vivek User ID */}
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("slack://user?team=T01GST6QY0G&id=U01FT7G6NKZ")
          }
        >
          <View style={styles.slackButton}>
            <View>
              <Text style={{ fontWeight: "bold" }}>Vivek Mahapatra</Text>
              <Text>Senior Director</Text>
            </View>
            <View
              style={{
                padding: 3,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={slackLogo}
                style={{ height: 20, width: 20, marginHorizontal: 5 }}
              ></Image>
              <Text>Slack Message</Text>
            </View>
          </View>
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
  },
  slackButton: {
    borderWidth: 1,
    borderRadius: 15,
    height: 56,
    borderColor: colors.gray,
    padding: 10,
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default AboutScreen;
