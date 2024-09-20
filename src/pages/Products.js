import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Products Component
 * This is a placeholder for the Products page. It will display available products in the future.
 */
const Products = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products Page</Text>
      <Text style={styles.subtitle}>Available products will be listed here soon.</Text>
    </View>
  );
};

// Styles for the Products component
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

export default Products;
