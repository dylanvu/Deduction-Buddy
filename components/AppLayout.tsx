import { View } from "react-native";
import Header from "./Header";
import Footer from "@/components/Footer";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      {children}
      <Footer />
    </View>
  );
}

export default AppLayout;
