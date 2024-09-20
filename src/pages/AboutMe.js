import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from '../components/Footer';  // Import the Footer component

/**
 * AboutMe Component
 * This page gives an introduction about the person behind the website.
 */
const AboutMe = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Me</Text>
      <Text style={styles.subtitle}>
        Hi there! I'm the developer behind this website. I love coding, building cool apps, and sometimes pretending I’m a professional snack taster. 🍕
      </Text>
      <Text style={styles.subtitle}>
        I specialize in cross-platform development, React Native, and a good sense of humor. If you want to connect, check out the social media links on the Home page or find me in the footer.
      </Text>
      {/* Footer */}
      <Footer />
    </View>
  );
};

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
    textAlign: 'center',
    marginBottom: 16,
  },
});

export default AboutMe;
