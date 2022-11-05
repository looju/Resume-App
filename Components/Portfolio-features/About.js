import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { ThemeContext } from "./Context";
import { useFonts } from "@expo-google-fonts/dev";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as Localization from "expo-localization";
import { Translations } from "../../assets/Translations/SupportedLanguages";
import { I18n } from "i18n-js";
import * as ScreenOrientation from "expo-screen-orientation";


const i18n = new I18n(Translations);

export const About = ({ navigation }) => {
  const [orientationIsLandscape, setOrientation] = useState(true);

  const checklanguageSettings = () => {
    i18n.enableFallback = true;
    i18n.locale = Localization.locale;
  };

  async function changeScreenOrientation() {
    if (orientationIsLandscape == true) {
      ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE
      );
    } else if (orientationIsLandscape == false) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    }
  }

  const toggleOrientation = () => {
    setOrientation(!orientationIsLandscape);
    changeScreenOrientation();
  };

  const navigateToSettings = () => {
 navigation.navigate('Settings')
  };

  useEffect(() => {
    checklanguageSettings();
  }, []);

  let [fontsLoaded] = useFonts({
    Arizonia: require("../../assets/fonts/Arizonia-Regular.ttf"),
    Fredoka: require("../../assets/fonts/FredokaOne-Regular.ttf"),
    Pacific: require("../../assets/fonts/Pacifico-Regular.ttf"),
  });

  const { theme } = useContext(ThemeContext);

  if (fontsLoaded) {
    return (
      <ScrollView>
        <View
          style={theme == "light" ? styles.container : styles.containerDark}
        >
          <View>
            <TouchableOpacity style={styles.image}>
              <Image
                style={{ height: 150, width: 150, borderRadius: 100 }}
                source={require("../../assets/picture.jpeg")}
              />
            </TouchableOpacity>
          </View>
          <View style={{ paddingBottom: 40, bottom: 100, left: 40 }}>
            <TouchableOpacity onPress={toggleOrientation}>
              <MaterialCommunityIcons
                name="camera-flip"
                size={32}
                color="#FF6089"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.descriptionView}>
            <Text
              style={
                theme == "light" ? styles.description : styles.descriptionDark
              }
            >
              {i18n.t("aboutText")}
            </Text>
          </View>
          <View style={styles.detailsView}>
            <Text
              style={theme == "light" ? styles.textColor : styles.textColorDark}
            >
              {i18n.t("aboutDetails")}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.downloadButton}
            onPress={navigateToSettings}
          >
            <View
              style={
                theme == "light"
                  ? styles.downloadButtonView
                  : styles.downloadButtonViewDark
              }
            >
              <Text style={styles.downloadText}>{i18n.t("goToSettings")}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerDark: {
    flex: 1,
    backgroundColor: "#000",
  },
  textColor: {
    color: "#000",
    fontFamily: "Pacific",
    fontSize: 15,
  },
  textColorDark: {
    color: "#fff",
    fontFamily: "Pacific",
    fontSize: 15,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignItems: "center",
    left: 125,
    marginTop: 20,
    backgroundColor: "#808080",
  },
  description: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Fredoka",
    color: "#000",
    justifyContent: "center",
  },
  descriptionDark: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Fredoka",
    color: "#fff",
  },
  descriptionView: {
    bottom:25,
    maxWidth: 200,
    maxHeight: 200,
    left: 125,
  },
  detailsView: {
    marginTop:5
  },
  downloadButton: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 50,
    width: 200,
    height: 70,
    border: 5,
    borderWidth: 20,
    borderRadius: 15,
    borderColor: "#FF6089",
    backgroundColor: "#FF6089",
    left: 100,
  },
  downloadButtonView: {
    backgroundColor: "#000",
  },
  downloadButtonViewDark: {
    backgroundColor: "#fff",
  },
  downloadText: {
    backgroundColor: "#FF6089",
    fontSize: 15,
    fontWeight: "bold",
  },
});
