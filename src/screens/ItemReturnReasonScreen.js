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

const ItemReturnReasonScreen = ({ navigation }) => {
  const [selectedReason, setSelectedReason] = useState("");

  return (
    <ScrollView style={{ backgroundColor: colors.background }}>
      <View style={styles.container}>
        <Text style={styles.heading}>Choose a reason for the item return:</Text>

        <TouchableOpacity
          style={
            selectedReason == "Item in Poor condition"
              ? styles.selectionItemSelected
              : styles.selectionItem
          }
          onPress={() => {
            setSelectedReason("Item in Poor condition");
          }}
        >
          <Text style={styles.selectionText}>Item in Poor condition</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            selectedReason == "Doesn't fit / size issues"
              ? styles.selectionItemSelected
              : styles.selectionItem
          }
          onPress={() => {
            setSelectedReason("Doesn't fit / size issues");
          }}
        >
          <Text style={styles.selectionText}>Doesn't fit / size issues</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            selectedReason == "Design not as expected"
              ? styles.selectionItemSelected
              : styles.selectionItem
          }
          onPress={() => {
            setSelectedReason("Design not as expected");
          }}
        >
          <Text style={styles.selectionText}>Design not as expected</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            selectedReason == "Reason unknown"
              ? styles.selectionItemSelected
              : styles.selectionItem
          }
          onPress={() => {
            setSelectedReason("Reason unknown");
          }}
        >
          <Text style={styles.selectionText}>Reason unknown</Text>
        </TouchableOpacity>

        {selectedReason != "" && (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("CameraScreen", {
                selectedReason,
              })
            }
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
              Proceed to Scan Receipt
            </Text>
          </TouchableOpacity>
        )}
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
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  selectionItem: {
    width: "80%",
    borderWidth: 1,
    padding: 10,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 10,
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
export default ItemReturnReasonScreen;
