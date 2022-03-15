import { NavigationContainer } from "@react-navigation/native";
import * as Font from 'expo-font';
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { MainStackNavigator } from "./src/navigation/MainStackNavigator";

export default function App() {

  const [dataLoaded, setDataLoaded] = useState(false);
  const [loadData, setLoadData] = useState(false);

  const fetchFonts = async () => {
    await Font.loadAsync({
      acme: require('./assets/fonts/Acme-Regular.ttf')
    });
    setLoadData(true);
  };

  useEffect(() => {
    fetchFonts();
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <StatusBar style="inverted" />
          {
            loadData ? (
              <MainStackNavigator />
            ) : null
          }
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
