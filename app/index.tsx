import React from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import App from "../App";
import widgetVersion from "./widget/WidgetConfig";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}> 
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Kama'ilio App</Text>
      </View>
    
      <View style={styles.appContainer}>
        <App />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Light gray background
  },
  header: {
    backgroundColor: '#2C3E50', // Deep blue-gray header
    paddingVertical: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  appContainer: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
  }
});


