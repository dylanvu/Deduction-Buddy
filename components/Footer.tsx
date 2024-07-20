import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <View style={styles.footerColumn}>
          <Text style={styles.footerText}>Column 1</Text>
        </View>
        <View style={styles.footerColumn}>
          <Text style={styles.footerText}>Column 2</Text>
        </View>
        <View style={styles.footerColumn}>
          <Text style={styles.footerText}>Column 3</Text>
        </View>
        <View style={styles.footerColumn}>
          <Text style={styles.footerText}>Column 4</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end", // put the footer in the bottom
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  footerColumn: {
    flex: 1,
    alignItems: "center",
  },
  footerText: {
    fontSize: 16,
  },
});

export default Footer;
