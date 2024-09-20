import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Home Component
 * This is the home page of the personal website. It displays a welcome message.
 */
const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Personal Website</Text>
      <Text style={styles.subtitle}>This is the Home Page</Text>
    </View>
  );
};

// Styles for the Home component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
  },
});

export default Home;
