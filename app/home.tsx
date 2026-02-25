import { router } from "expo-router";
import { useEffect, useRef } from "react";
import {
    Animated,
    FlatList,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
type Category = {
  name: string;
  route: string;
  image: any;
};

const categories: Category[] = [
  {
    name: "Tourist Attractions",
    route: "/tourist",
    image: require("../assets/images/tour.png"),
  },
  {
    name: "Restaurants",
    route: "/restaurant",
    image: require("../assets/images/restaurant.png"),
  },
  {
    name: "Temples",
    route: "/temple",
    image: require("../assets/images/temple.png"),
  },
  {
    name: "Cafes",
    route: "/cafe",
    image: require("../assets/images/cafe.png"),
  },
  {
    name: "Festivals",
    route: "/festival",
    image: require("../assets/images/festival.png"),
  },
];

export default function Home() {
  // opacity fade
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // slide up
  const translateY = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),

      Animated.timing(translateY, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim,
          transform: [{ translateY }],
        },
      ]}
    >
      <Text style={styles.title}>🌍 Explore Chiang Mai</Text>

      <FlatList
        data={categories}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ paddingBottom: 40 }}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [styles.card, pressed && styles.pressed]}
            onPress={() => router.push(item.route as any)}
          >
            <View style={styles.imageContainer}>
              <Image
                source={item.image}
                style={styles.image}
                resizeMode="contain"
              />
            </View>

            <Text style={styles.cardText}>{item.name}</Text>
          </Pressable>
        )}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF0F6",
    paddingHorizontal: 15,
    paddingTop: 25,
  },

  title: {
    fontSize: 30,
    marginBottom: 20,
    color: "#B83280",

    fontFamily: "Kanit_700Bold",
  },

  card: {
    flex: 1,
    backgroundColor: "#FFFFFF",

    height: 190,
    margin: 8,

    borderRadius: 22,

    justifyContent: "center",
    alignItems: "center",

    // Pink border soft
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

  pressed: {
    transform: [{ scale: 0.96 }],
  },

  imageContainer: {
    width: 110,
    height: 110,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  cardText: {
    fontSize: 18,
    color: "#B83280",

    fontFamily: "Kanit_600SemiBold",
  },
});
