import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import { useFonts } from "@expo-google-fonts/dev";

export const Splash = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Arizonia: require("../../assets/fonts/Arizonia-Regular.ttf"),
  });

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("CarouselSlide");
    }, 3000);
  }, []);

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <Image source={require("../../assets/resume.jpg")} />
        </View>
        <View style={styles.text}>
          <Text style={styles.displaytext}>My resume</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  image: {
    flex: 1,
  },
  text: {
    alignItems: "center",
    bottom: "50%",
  },
  displaytext: {
    color: "red",
    fontFamily: "Arizonia",
    fontSize: 25,
  },
});
