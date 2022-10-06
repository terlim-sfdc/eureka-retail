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
import colors from "../../assets/colors/colors";

import { container, headerWithSearch, headerContainer } from "../styles";

const ReturnHistoryScreen = ({ navigation }) => {
  const [selectedReason, setSelectedReason] = useState("");

  return (
    <ScrollView style={{ backgroundColor: colors.background }}>
      <View style={styles.container}>
        <Text style={styles.heading}>Return Items History:</Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    alignSelf: "center",
    margin: 10,
  },
  container: {
    alignContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 10,
    flex: 1,
    padding: 0,
  },
  selectionItemSelected: {
    width: "80%",
    borderWidth: 1,
    padding: 10,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    backgroundColor: colors.yellow,
  },
  selectionItem: {
    width: "80%",
    borderWidth: 1,
    padding: 10,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  selectionText: {
    fontSize: 20,
  },
  actionButton: {
    backgroundColor: colors.white,
    padding: 5,
    margin: 10,
    height: 50,
    width: 160,
    borderRadius: 10,
    justifyContent: "space-between",
  },
});
export default ReturnHistoryScreen;
