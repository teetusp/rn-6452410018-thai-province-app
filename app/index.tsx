import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

const logo = require("@/assets/images/logo.jpg");

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      // ใช้ replace เพื่อไม่ให้กด Back กลับมาหน้านี้ได้
      router.replace("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>ยินดีต้อนรับสู่จังหวัดเชียงใหม่</Text>
      <Text style={styles.caption}>
        ดอยสุเทพเป็นศรี ประเพณีเป็นสง่า บุปผชาติล้วนงามตา นามล้ำค่านครพิงค์
      </Text>
      <ActivityIndicator
        size="large"
        color="#b92093ff"
        style={{ marginTop: 30 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffffff",
  },
  logo: { width: 150, height: 150, marginBottom: 20, borderRadius: 20 },
  title: { fontFamily: "Kanit_700Bold", fontSize: 28, color: "#53321eff" },
  caption: {
    fontFamily: "Kanit_400Regular",
    fontSize: 16,
    color: "#888",
    marginTop: 10,
    textAlign: "center",
    paddingHorizontal: 25,
  },
});
