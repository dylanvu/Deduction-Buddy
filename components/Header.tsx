import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";

const Header = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.row}>
        <Image
          source={require("../assets/images/logo.png")}
          style={{ width: 50, height: 50, resizeMode: "contain" }}
        />
        <MaterialCommunityIcons
          name="account-circle-outline"
          size={35}
          color={Colors.darkBlue}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: 50,
    backgroundColor: Colors.white,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
  },
  leftItem: {},
  rightItem: {},
});

export default Header;
