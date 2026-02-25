import { supabase } from "@/services/supabase";
import { Temples } from "@/types";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Temple() {
  const [temples, setTemples] = useState<Temples[]>([]);

  useEffect(() => {
    const fetchTemples = async () => {
      const { data, error } = await supabase
        .from("temples")
        .select("*")
        .order("name", { ascending: true });

      if (error) {
        Alert.alert("คำเตือน", "เกิดข้อผิดพลาด");
      } else {
        setTemples(data);
      }
    };

    fetchTemples();
  }, []);

  const renderTempleItem = ({ item }: { item: Temples }) => (
    <TouchableOpacity
      activeOpacity={0.85}
      style={styles.cardItem}
      onPress={() =>
        router.push({
          pathname: "/detail_temple",
          params: {
            id: item.id,
            name: item.name,
            location: item.location,
            description: item.description,
            latitude: item.latitude,
            longitude: item.longitude,
            image_url: item.image_url,
          },
        })
      }
    >
      {/* IMAGE */}
      <Image source={{ uri: item.image_url }} style={styles.image} />

      {/* TEXT */}
      <View style={styles.textContainer}>
        <Text style={styles.templeName}>{item.name}</Text>

        <Text style={styles.templeLocation}>📍 {item.location}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={temples}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTempleItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 15 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // Background
  container: {
    flex: 1,
    backgroundColor: "#FFF0F6",
  },

  cardItem: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",

    borderRadius: 22,

    padding: 10,
    marginVertical: 7,

    alignItems: "center",

    borderWidth: 1,
    borderColor: "#FFD6E7",

    elevation: 7,

    shadowColor: "#FF9AC5",
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },

  image: {
    height: 85,
    width: 85,
    borderRadius: 15,
  },

  textContainer: {
    flex: 1,
    marginLeft: 14,
    justifyContent: "center",
  },

  templeName: {
    fontFamily: "Kanit_700Bold",
    fontSize: 15,
    color: "#B83280",

    flexWrap: "wrap",
  },

  templeLocation: {
    fontFamily: "Kanit_400Regular",
    fontSize: 13,
    marginTop: 6,

    color: "#8B5CF6",

    flexWrap: "wrap",
  },
});
