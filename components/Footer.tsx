import { Link } from "expo-router";
import React from "react";
import { View, Image, StyleSheet, Pressable } from "react-native";
import { Colors } from "@/constants/Colors";

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <View style={styles.footerColumn}>
          <Link href="/" asChild>
            <Pressable>
              <Image
                source={require("../assets/images/home-white.png")}
                style={{ width: 29, height: 29 }}
              />
            </Pressable>
          </Link>
        </View>
        <View style={styles.footerColumn}>
          <Link href="/upload" asChild>
            <Pressable>
              <Image
                source={require("../assets/images/upload-white.png")}
                style={{ width: 29, height: 29 }}
              />
            </Pressable>
          </Link>
        </View>
        <View style={styles.footerColumn}>
          <Link href="/view" asChild>
            <Pressable>
              <Image
                source={require("../assets/images/record-white.png")}
                style={{ width: 29, height: 29 }}
              />
            </Pressable>
          </Link>
        </View>
        <View style={styles.footerColumn}>
          <Link href="/info" asChild>
            <Pressable>
              <Image
                source={require("../assets/images/info-white.png")}
                style={{ width: 29, height: 29 }}
              />
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
    alignItems: "center",
    backgroundColor: Colors.darkBlue,
    height: 77,
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
