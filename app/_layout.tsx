import Header from "@/components/Header";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        // custom header
        header: () => <Header />,
      }}
    >
      {/* define all the routes */}
      <Stack.Screen
        name="index"
        options={{
          title: "",
          // header: () => <Header />,
        }}
      />
      <Stack.Screen
        name="info"
        options={{
          title: "Tax Information",
          // header: () => <Header />,
        }}
      />
      <Stack.Screen
        name="view"
        options={{
          title: "View Records",
          // header: () => <Header />,
        }}
      />
      <Stack.Screen
        name="upload"
        options={{
          title: "Upload",
          // header: () => <Header />,
        }}
      />
    </Stack>
  );
}
