import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {

  useFonts({
    'outfit':require('./../assets/fonts/Outfit-Black.ttf'),
    'outfit-medium':require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold':require('./../assets/fonts/Outfit-Bold.ttf'),
    'outfit-thin':require('./../assets/fonts/Outfit-Thin.ttf'),
    'outfit-light':require('./../assets/fonts/Outfit-Light.ttf'),
    'outfit-space':require('./../assets/fonts/SpaceMono-Regular.ttf'),
  })
  return (
    <Stack screenOptions={{
      headerShown: false,
    }
    }>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
