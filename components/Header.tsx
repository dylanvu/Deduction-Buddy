import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.leftItem}>Logo</Text>
        <Text style={styles.rightItem}>Account Icon</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: 80,
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
