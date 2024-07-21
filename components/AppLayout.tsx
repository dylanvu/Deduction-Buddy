import { View } from "react-native";
import Footer from "@/components/Footer";
import { Colors } from "@/constants/Colors";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <View>{children}</View>
      <Footer />
    </View>
  );
}

export default AppLayout;
