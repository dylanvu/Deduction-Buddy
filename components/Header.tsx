import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.leftItem}>Logo</Text>
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
    paddingTop: 40,
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
