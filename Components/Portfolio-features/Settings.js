import React, { useContext, useState, useEffect } from "react";
import { View, StyleSheet, Text, Button, Switch } from "react-native";
import { ThemeContext } from "./Context";
import { useFonts } from "@expo-google-fonts/dev";
import * as Localization from "expo-localization";
import { Translations } from "../../assets/Translations/SupportedLanguages";
import { I18n } from "i18n-js";

const i18n = new I18n(Translations);

export const Settings = ({ navigation }) => {
  const checklanguageSettings = () => {
    i18n.enableFallback = true;
    i18n.locale = Localization.locale;
  };

  useEffect(() => {
    checklanguageSettings();
  }, []);

  let [fontsLoaded] = useFonts({
    Arizonia: require("../../assets/fonts/Arizonia-Regular.ttf"),
    Fredoka: require("../../assets/fonts/FredokaOne-Regular.ttf"),
  });

  const { theme, setTheme } = useContext(ThemeContext);
  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  if (fontsLoaded) {
    return (
      <View style={theme == "light" ? styles.container : styles.containerDark}>
        <View
          style={theme == "light" ? styles.themeView : styles.themeViewDark}
        >
          <View style={theme == "light" ? styles.text : styles.textDark}>
            <Text
              style={theme == "light" ? styles.themeText : styles.themeTextDark}
            >
              {i18n.t("settingsThemeText")}
            </Text>
          </View>
          <View style={styles.toggleButton}>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#FFFF00" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
              onChange={handleThemeChange}
            />
          </View>
        </View>
      </View>
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
  themeView: {
    backgroundColor: "#808080",
    width: 400,
    height: 100,
    borderRadius: 20,
    paddingHorizontal: 20,
    marginTop: 50,
    alignContent: "space-between",
  },
  themeViewDark: {
    backgroundColor: "#D3D3D3",
    width: 400,
    height: 100,
    borderRadius: 20,
    paddingHorizontal: 20,
    marginTop: 50,
    alignContent: "space-between",
  },
  text: {
    justifyContent: "center",
    top: 30,
    fontSize: 50,
    color: "#fff",
  },
  textDark: {
    justifyContent: "center",
    top: 30,
    fontSize: 50,
    color: "#000",
  },
  themeText: {
    color: "#fff",
    fontFamily: "Arizonia",
    fontSize: 30,
  },
  themeTextDark: {
    color: "#000",
    fontFamily: "Arizonia",
    fontSize: 30,
  },
  toggleButton: {
    flex: 1,
    marginLeft: 300,
    marginBottom: 25,
    height: 50,
    width: 50,
  },
});
