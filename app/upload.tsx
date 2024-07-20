// view records
import { Text, View, StyleSheet } from "react-native";
import Header from "@/components/Header";

export default function Index() {
  return (
    <View>
      <Header />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Homepage</Text>
      </View>
    </View>
  );
}
