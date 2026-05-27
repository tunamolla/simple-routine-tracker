import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ActivityIndicator } from "react-native";

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    'BoldItalic': require("../../assets/fonts/Inter_24pt-BoldItalic.ttf"),
    'Regular': require("../../assets/fonts/Inter_24pt-Regular.ttf"),
  })

  if(!fontsLoaded) return <ActivityIndicator size="large"></ActivityIndicator>

  return <Stack 
    screenOptions={{ 
      headerShown: false
     }}
  />;
}
