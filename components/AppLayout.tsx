import { StyleSheet, View } from "react-native";
import Footer from "@/components/Footer";
import { Colors } from "@/constants/Colors";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.layout}>
      <View>{children}</View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: Colors.white,
    // paddingTop: 80,
    // maxWidth: 300,
  },
});

export default AppLayout;
