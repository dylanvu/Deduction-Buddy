// view sales tax
import { Text, View, StyleSheet } from "react-native";
import AppLayout from "@/components/AppLayout";

export default function ViewScreen() {
  return (
    <AppLayout>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>View</Text>
      </View>
    </AppLayout>
  );
}