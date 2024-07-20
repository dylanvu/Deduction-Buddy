// view records
import { Text, View, StyleSheet } from "react-native";
import AppLayout from "@/components/AppLayout";

export default function UploadScreen() {
  return (
    <AppLayout>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Upload</Text>
      </View>
    </AppLayout>
  );
}
