import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.leftItem}>Left Item</Text>
        <Text style={styles.rightItem}>Right Item</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  leftItem: {},
  rightItem: {},
});

export default Header;
