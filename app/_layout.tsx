import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // hide the expo navigation header, our own header is defined in components/Header.tsx
      }}
    >
      {/* define all the routes */}
      <Stack.Screen
        name="index"
        options={{
          title: "Homepage",
        }}
      />
      <Stack.Screen
        name="info"
        options={{
          title: "Information",
        }}
      />
      <Stack.Screen
        name="view"
        options={{
          title: "View Sales Tax",
        }}
      />
      <Stack.Screen
        name="upload"
        options={{
          title: "Upload Sales Tax",
        }}
      />
    </Stack>
  );
}
