import { Link } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <View style={styles.footerColumn}>
          <Link href="/" asChild>
            <Pressable>
              <Text>Home</Text>
            </Pressable>
          </Link>
        </View>
        <View style={styles.footerColumn}>
          <Link href="/upload" asChild>
            <Pressable>
              <Text>Upload</Text>
            </Pressable>
          </Link>
        </View>
        <View style={styles.footerColumn}>
          <Link href="/view" asChild>
            <Pressable>
              <Text>Record</Text>
            </Pressable>
          </Link>
        </View>
        <View style={styles.footerColumn}>
          <Link href="/info" asChild>
            <Pressable>
              <Text>Info</Text>
            </Pressable>
          </Link>
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
    paddingTop: 20,
    paddingBottom: 40,
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
