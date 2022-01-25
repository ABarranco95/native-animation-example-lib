import React, { useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Custom components (pages)
import Test from "./Components/Test/Test";
import Sample from "./Components/Sample/Sample";
import Home from "./Components/Home/Home";
import Amele from "./Components/Amele/Amele";
import Linda from "./Components/Linda/Linda";
import Sergut from "./Components/Sergut/Sergut";
import Lisa from "./Components/Lisa/Lisa";
import Yiley from "./Components/Yiley/Yiley";
import Beakal from "./Components/Beakal/Beakal";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="Sample" component={Sample} />
        <Stack.Screen name="Amele" component={Amele} />
        <Stack.Screen name="Linda" component={Linda} />
        <Stack.Screen name="Sergut" component={Sergut} />
        <Stack.Screen name="Lisa" component={Lisa} />
        <Stack.Screen name="Yiley" component={Yiley} />
        <Stack.Screen name="Beakal" component={Beakal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
