import { Link } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  Feather,
  Octicons,
} from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <View style={styles.footerColumn}>
          <Link href="/" asChild>
            <Pressable>
              <Octicons name="home" size={29} color={Colors.white} />
            </Pressable>
          </Link>
        </View>
        <View style={styles.footerColumn}>
          <Link href="/upload" asChild>
            <Pressable>
              <Feather name="upload" size={29} color={Colors.white} />
            </Pressable>
          </Link>
        </View>
        <View style={styles.footerColumn}>
          <Link href="/view" asChild>
            <Pressable>
              <MaterialCommunityIcons
                name="clipboard-text-outline"
                size={29}
                color={Colors.white}
              />
            </Pressable>
          </Link>
        </View>
        <View style={styles.footerColumn}>
          <Link href="/info" asChild>
            <Pressable>
              <Ionicons
                name="information-circle-outline"
                size={29}
                color={Colors.white}
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
