// learn about sales tax
import { Text, View, StyleSheet } from "react-native";
import AppLayout from "@/components/AppLayout";

export default function InfoScreen() {
  return (
    <AppLayout>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Learn about sales tax</Text>
      </View>
    </AppLayout>
  );
}
