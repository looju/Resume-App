import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { Splash } from "./Components/Splash/Splash";
import { About } from "./Components/Portfolio-features/About";
import { Settings } from "./Components/Portfolio-features/Settings";
import { Works } from "./Components/Portfolio-features/Works";
import { CarouselSlide } from "./Components/Portfolio-features/Carousel";
import { Context } from "./Components/Portfolio-features/Context";
import { ThemeContext } from "./Components/Portfolio-features/Context";


const Drawer = createDrawerNavigator();

function DrawerTabs() {
  const { theme } = useContext(ThemeContext);

  return (
    <Drawer.Navigator
      initialRouteName="About"
      component={About}
      screenOptions={{
        drawerPosition: "right",
        swipeEnabled: true,
        drawerActiveTintColor: "#ADD8E6",
        drawerInactiveTintColor: "#808080",
        drawerStyle: {
          backgroundColor: theme == "light" ? "#000" : "#fff",
        },
        headerStyle: {
          backgroundColor: theme == "light" ? "#fff" : "#000",
        },
        headerTitleAlign: "center",
        headerTintColor: theme == "light" ? "#000" : "#fff",
        headerTitle: {
          color: theme == "light" ? "#000" : "#fff",
        },
        headerRight: () => (
          <DrawerToggleButton tintColor={theme == "light" ? "#000" : "#fff"} />
        ),
        headerLeft: false,
      }}
    >
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          headerTitle: {
            color: theme == "light" ? "#000" : "#fff",
          },
        }}
      />
      <Drawer.Screen name="Works" component={Works} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <Context>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" component={Splash}>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CarouselSlide"
            component={CarouselSlide}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DrawerTabs"
            component={DrawerTabs}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Context>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
