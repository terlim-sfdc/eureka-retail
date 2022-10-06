import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Surface, useTheme } from "react-native-paper";
import colors from "../../../assets/colors/colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

// temporarily using sample customer data
import customersData from "../../../data/customersData";

// import styles and components
import {
  container,
  headerContainer,
  headerWithoutSearch,
  prevPageLinkContentBox,
  sectionSubHeadingBox,
  sectionSubHeadingText,
  subTabText,
  activeSubTabButton,
  inactiveSubTabButton,
  prevPageLink,
  subTabScreenContainer,
  surfaceInfoCards,
} from "../../styles";

// props contain customer
const Recommendations = (props) => {
  return (
    <View style={subTabScreenContainer}>
      <View style={sectionSubHeadingBox}>
        <Text style={sectionSubHeadingText}>
          Products recommended for customer
        </Text>
      </View>
      {/* View Box for Recommended Products Flatlist */}

      {props.recommendations != null && (
        <View style={{ height: 210 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            // data={customersData[0].recommendedItems}
            data={props.recommendations}
            keyExtractor={(recommendedItem) => recommendedItem.id}
            renderItem={(recommendedItem) => {
              return (
                <View>
                  <View style={styles.recommendedItemsView}>
                    <Image
                      style={styles.imageStyle}
                      source={{
                        url: recommendedItem.item.imageUrl,
                      }}
                    />
                    <Text style={styles.recommendedItemsText}>
                      {recommendedItem.item.name}
                    </Text>
                    <Text style={styles.recommendedPriceText}>
                      ${recommendedItem.item.price}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      )}

      {/* <TouchableOpacity
        onPress={() =>
          props.navigate("RecommendedItemsCardsScreen", {
            customerName: props.customer.name,
          })
        }
      >
        <Surface
          style={[styles.infoCards, { elevation: 4, marginVertical: 20 }]}
        >
          <Text style={{ fontWeight: "bold" }}>
            Reserve & Locate Products for Customer
          </Text>
        </Surface>
      </TouchableOpacity> */}

      <View style={sectionSubHeadingBox}>
        <Text style={sectionSubHeadingText}>Good to let customer know</Text>
      </View>
      <Surface style={[surfaceInfoCards, { flexDirection: "row" }]}>
        <FontAwesome5 name="percentage" style={styles.infoCardIcons} />
        <Text style={{ flex: 7 }}>
          20% off selected kids wear for 2 kids, 10 % off selected men's wear
        </Text>
        <FontAwesome5 name="info-circle" style={[styles.infoCardIcons]} />
      </Surface>
      <Surface style={[surfaceInfoCards, { flexDirection: "row" }]}>
        <FontAwesome5 name="gift" style={styles.infoCardIcons} />
        <Text style={{ flex: 7 }}>
          Upload a photo of your purchase using the #gotbags hashtag to receive
          a free gift
        </Text>
        <FontAwesome5 name="info-circle" style={styles.infoCardIcons} />
      </Surface>
      <Surface style={[surfaceInfoCards, { flexDirection: "row" }]}>
        <FontAwesome5 name="percentage" style={styles.infoCardIcons} />

        <Text style={{ flex: 7 }}>
          Buy 3 pairs of Men's wear pants and get a 15% discount on all items
        </Text>
        <FontAwesome5 name="info-circle" style={styles.infoCardIcons} />
      </Surface>
    </View>
  );
};

const styles = StyleSheet.create({
  recommendedItemsView: {
    width: 150,
    marginHorizontal: 7,
    height: 150,
    marginLeft: 20,
  },
  recommendedItemsText: {
    fontSize: 15,
    marginHorizontal: 6,
    fontWeight: "bold",
  },
  recommendedPriceText: {
    fontSize: 15,
    marginHorizontal: 6,
  },
  imageStyle: {
    height: 150,
    width: 150,
    borderRadius: 10,
  },
  infoCards: {
    margin: 5,
    height: 70,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",
  },
  infoCardIcons: {
    fontSize: 30,
    paddingHorizontal: 10,
    color: colors.theme,
    flex: 1,
  },
  probabilityContainer: {
    marginTop: -200,
    marginLeft: 10,
    borderWidth: 0,
    borderRadius: 1000,
    width: 60,
    backgroundColor: colors.theme,
    padding: 5,
  },
  probabilityText: {
    fontSize: 20,
    color: colors.white,
    fontWeight: "bold",
  },
});

export default Recommendations;
