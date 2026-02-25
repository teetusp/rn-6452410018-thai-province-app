import * as Linking from "expo-linking";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import MapView, { Marker } from "react-native-maps";

export default function Detail_tour() {
  const params = useLocalSearchParams();

  // เปิด Google Map
  const handleOpenMapApp = () => {
    // สร้างตัวเปิด Google maps
    const googleMap = `https://maps.google.com/?q=${params.latitude},${params.longitude}`;
    // สร้างตัวเปิด Apple maps
    const appleMap = `http://maps.apple.com/?q=${params.name}&ll=${params.latitude},${params.longitude}`;
    // ตรวจสอบการเปิดลแอป Google Maps หรือ Apple Maps โดยยึด Google Maps เป็นหลัก
    Linking.canOpenURL(googleMap).then((supported) => {
      if (supported) {
        Linking.openURL(googleMap);
      } else {
        Linking.openURL(appleMap);
      }
    });
  };

  return (
    <ScrollView style={styles.container}>
      {/* Image */}
      <Image
        source={{ uri: params.image_url as string }}
        style={styles.image}
      />

      {/* Detail Card */}
      <View style={styles.card}>
        <Text style={styles.name}>{params.name as string}</Text>

        <Text style={styles.location}>📍 {params.location as string}</Text>

        <Text style={styles.description}>{params.description as string}</Text>
      </View>

      {/* Map Card */}
      <View style={styles.mapCard}>
        <Text style={styles.mapTitle}>🗺 แผนที่สถานที่ท่องเที่ยว</Text>

        <MapView
          style={styles.map}
          initialRegion={{
            latitude: parseFloat(params.latitude as string),
            longitude: parseFloat(params.longitude as string),
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{
              latitude: parseFloat(params.latitude as string),
              longitude: parseFloat(params.longitude as string),
            }}
            title={params.name as string}
            description={params.description as string}
            onPress={handleOpenMapApp}
          />
        </MapView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF0F6", // ⭐ Pink background เหมือนหน้า Home
  },

  image: {
    width: "100%",
    height: 240,
  },

  card: {
    backgroundColor: "#fff",
    margin: 15,
    padding: 16,
    borderRadius: 18,

    borderWidth: 1,
    borderColor: "#FFD6E7",

    elevation: 6,

    shadowColor: "#FF9AC5",
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },

  name: {
    fontFamily: "Kanit_700Bold",
    fontSize: 22,
    color: "#B83280",
  },

  location: {
    fontFamily: "Kanit_400Regular",
    fontSize: 16,
    marginTop: 6,
    color: "#777",
  },

  description: {
    fontFamily: "Kanit_400Regular",
    fontSize: 16,
    marginTop: 10,
    lineHeight: 24,
    color: "#333",
  },

  callButton: {
    marginTop: 15,
    backgroundColor: "#FF6FAF",

    paddingVertical: 12,
    borderRadius: 12,

    alignItems: "center",

    elevation: 4,
  },

  callText: {
    color: "#fff",
    fontFamily: "Kanit_600SemiBold",
    fontSize: 16,
  },

  mapCard: {
    backgroundColor: "#fff",
    marginHorizontal: 15,
    marginBottom: 20,
    padding: 15,
    borderRadius: 18,

    borderWidth: 1,
    borderColor: "#FFD6E7",

    elevation: 6,

    shadowColor: "#FF9AC5",
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },

  mapTitle: {
    fontFamily: "Kanit_700Bold",
    fontSize: 18,
    color: "#B83280",
    marginBottom: 10,
  },

  map: {
    width: "100%",
    height: 260,
    borderRadius: 14,
  },
});
