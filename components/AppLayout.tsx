import { View } from "react-native";
import Footer from "@/components/Footer";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <View style={{ flex: 1 }}>
      {children}
      <Footer />
    </View>
  );
}

export default AppLayout;
