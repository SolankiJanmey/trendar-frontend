import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "./src/navigation/MainStackNavigator";
import * as Font from 'expo-font';

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
