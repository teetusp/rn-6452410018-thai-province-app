import {
  Kanit_400Regular,
  Kanit_500Medium,
  Kanit_600SemiBold,
  Kanit_700Bold,
  useFonts,
} from "@expo-google-fonts/kanit";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Kanit_400Regular,
    Kanit_500Medium,
    Kanit_700Bold,
    Kanit_600SemiBold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="home"
        options={{
          title: "หน้าหลัก",
          headerTitleAlign: "center",
          headerBackButtonDisplayMode: "minimal",
          headerTitleStyle: {
            fontFamily: "Kanit_400Regular",
            color: "#ffffff",
          },
          headerStyle: {
            backgroundColor: "#b92093ff",
          },
        }}
      />
      <Stack.Screen
        name="tourist"
        options={{
          title: "สถานที่ท่องเที่ยว",
          headerTitleAlign: "center",
          headerBackButtonDisplayMode: "minimal",
          headerTitleStyle: {
            fontFamily: "Kanit_400Regular",
            color: "#ffffff",
          },

          headerStyle: {
            backgroundColor: "#b92093ff",
          },
          headerTintColor: "#ffffff",
        }}
      />
      <Stack.Screen
        name="restaurant"
        options={{
          title: "ร้านอาหาร",
          headerTitleAlign: "center",
          headerBackButtonDisplayMode: "minimal",
          headerTitleStyle: {
            fontFamily: "Kanit_400Regular",
            color: "#ffffff",
          },

          headerStyle: {
            backgroundColor: "#b92093ff",
          },
          headerTintColor: "#ffffff",
        }}
      />
      <Stack.Screen
        name="cafe"
        options={{
          title: "ร้านคาเฟ่",
          headerTitleAlign: "center",
          headerBackButtonDisplayMode: "minimal",
          headerTitleStyle: {
            fontFamily: "Kanit_400Regular",
            color: "#ffffff",
          },

          headerStyle: {
            backgroundColor: "#b92093ff",
          },
          headerTintColor: "#ffffff",
        }}
      />
      <Stack.Screen
        name="temple"
        options={{
          title: "วัดและศาสนสถาน",
          headerTitleAlign: "center",
          headerBackButtonDisplayMode: "minimal",
          headerTitleStyle: {
            fontFamily: "Kanit_400Regular",
            color: "#ffffff",
          },

          headerStyle: {
            backgroundColor: "#b92093ff",
          },
          headerTintColor: "#ffffff",
        }}
      />
      <Stack.Screen
        name="festival"
        options={{
          title: "เทศกาลและประเพณี",
          headerTitleAlign: "center",
          headerBackButtonDisplayMode: "minimal",
          headerTitleStyle: {
            fontFamily: "Kanit_400Regular",
            color: "#ffffff",
          },

          headerStyle: {
            backgroundColor: "#b92093ff",
          },
          headerTintColor: "#ffffff",
        }}
      />
      <Stack.Screen
        name="detail_tour"
        options={{
          title: "รายละเอียดสถานที่ท่องเที่ยว",
          headerTitleAlign: "center",
          headerBackButtonDisplayMode: "minimal",
          headerTitleStyle: {
            fontFamily: "Kanit_400Regular",
            color: "#ffffff",
          },

          headerStyle: {
            backgroundColor: "#b92093ff",
          },
          headerTintColor: "#ffffff",
        }}
      />
      <Stack.Screen
        name="detail_rest"
        options={{
          title: "รายละเอียดร้านอาหาร",
          headerTitleAlign: "center",
          headerBackButtonDisplayMode: "minimal",
          headerTitleStyle: {
            fontFamily: "Kanit_400Regular",
            color: "#ffffff",
          },

          headerStyle: {
            backgroundColor: "#b92093ff",
          },
          headerTintColor: "#ffffff",
        }}
      />
      <Stack.Screen
        name="detail_cafe"
        options={{
          title: "รายละเอียดร้านคาเฟ่",
          headerTitleAlign: "center",
          headerBackButtonDisplayMode: "minimal",
          headerTitleStyle: {
            fontFamily: "Kanit_400Regular",
            color: "#ffffff",
          },

          headerStyle: {
            backgroundColor: "#b92093ff",
          },
          headerTintColor: "#ffffff",
        }}
      />
      <Stack.Screen
        name="detail_temple"
        options={{
          title: "รายละเอียดวัดและศาสนสถาน",
          headerTitleAlign: "center",
          headerBackButtonDisplayMode: "minimal",
          headerTitleStyle: {
            fontFamily: "Kanit_400Regular",
            color: "#ffffff",
          },

          headerStyle: {
            backgroundColor: "#b92093ff",
          },
          headerTintColor: "#ffffff",
        }}
      />
      <Stack.Screen
        name="detail_fest"
        options={{
          title: "รายละเอียดเทศกาลและประเพณี",
          headerTitleAlign: "center",
          headerBackButtonDisplayMode: "minimal",
          headerTitleStyle: {
            fontFamily: "Kanit_400Regular",
            color: "#ffffff",
          },

          headerStyle: {
            backgroundColor: "#b92093ff",
          },
          headerTintColor: "#ffffff",
        }}
      />
    </Stack>
  );
}
