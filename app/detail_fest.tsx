import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Detail_fest() {
  const params = useLocalSearchParams();

  const getCountdown = () => {
    if (!params.event_date) return null;

    const today = new Date();

    // วันที่จาก supabase (YYYY-MM-DD)
    const eventDate = new Date(params.event_date as string);

    // เอาเฉพาะ เดือน + วัน
    const month = eventDate.getMonth();
    const day = eventDate.getDate();

    //  สร้างวันงานของ "ปีนี้"
    let nextEvent = new Date(today.getFullYear(), month, day);

    // ถ้าวันนี้ผ่านไปแล้ว → เอาปีหน้า
    if (nextEvent < today) {
      nextEvent = new Date(today.getFullYear() + 1, month, day);
    }

    // คำนวณวัน
    const diff = Math.ceil(
      (nextEvent.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
    );

    return `⏳ อีก ${diff} วันจะเริ่มงาน`;
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
        <Text style={styles.eventDate}>
          📅{" "}
          {new Date(params.event_date as string).toLocaleDateString("th-TH", {
            month: "long",
            day: "numeric",
          })}
        </Text>
        <Text style={styles.countdown}>{getCountdown()}</Text>

        <Text style={styles.description}>{params.description as string}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  countdown: {
    fontFamily: "Kanit_600SemiBold",

    fontSize: 15,

    marginTop: 10,

    paddingVertical: 8,
    paddingHorizontal: 12,

    borderRadius: 12,

    alignSelf: "flex-start",

    backgroundColor: "#FFE3F1",

    color: "#B83280",

    borderWidth: 1,
    borderColor: "#FFD6E7",

    // Shadow Android
    elevation: 3,

    // Shadow iOS
    shadowColor: "#FF9AC5",
    shadowOpacity: 0.18,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  eventDate: {
    fontFamily: "Kanit_600SemiBold",
    fontSize: 16,
    marginTop: 8,
    color: "#FF6FAF",
  },
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
