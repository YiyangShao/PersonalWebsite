import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Footer Component
 * Displays contact information at the bottom of each page.
 */
const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Contact: yourname@example.com</Text>
      <Text style={styles.footerText}>© 2024 My Personal Website</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f9fa',
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  footerText: {
    fontSize: 14,
    color: '#6c757d',
  },
});

export default Footer;
