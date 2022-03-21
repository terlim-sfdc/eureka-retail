import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

import { Surface } from "react-native-paper";

import {
  sectionSubHeadingBox,
  sectionSubHeadingText,
  subTabScreenContainer,
  surfaceInfoCards,
} from "../../styles";

const Weekly = (props) => {
  return (
    <View style={subTabScreenContainer}>
      <WebView
        source={{
          uri: "https://public.tableau.com/views/WeeklySalesReport_15935928747460/WeeklySalesReport?:language=en-GB&:display_count=n&:origin=viz_share_link?:embed=y&:tooltip=n&:toolbar=n&:showVizHome=no&:mobile=y&:showAppBanner=n",
        }}
        style={styles.webview}
      />
      {/* <View style={sectionSubHeadingBox}>
        <Text style={sectionSubHeadingText}>Weekly Reports</Text>
      </View>

      <Surface style={surfaceInfoCards}>
        <Text>Title</Text>
        <Text>Subtitle</Text>
        <Text>Announcement Information</Text>
      </Surface>

      <Surface style={surfaceInfoCards}>
        <Text>Title</Text>
        <Text>Subtitle</Text>
        <Text>Announcement Information</Text>
      </Surface>

      <Surface style={surfaceInfoCards}>
        <Text>Title</Text>
        <Text>Subtitle</Text>
        <Text>Announcement Information</Text>
      </Surface> */}
    </View>
  );
};

const styles = StyleSheet.create({
  webview: {
    flex: 1,
  },
});

export default Weekly;
