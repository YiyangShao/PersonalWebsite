import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';  // Import the global stylesheet
import { Ionicons } from '@expo/vector-icons';  // Import icons for social media
import Footer from '../components/Footer';  // Import Footer component

/**
 * Home Component
 * This is the home page of the personal website. It displays a welcome message and
 * includes navigation to the Games page, social media link placeholders, and a footer.
 */
const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Personal Website</Text>
      <Text style={styles.subtitle}>This is the Home Page</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Games')}>
        <Text style={styles.buttonText}>Go to Games Page</Text>
      </TouchableOpacity>

      {/* Social Media Links */}
      <View style={styles.socialContainer}>
        <Text style={styles.subtitle}>Follow Me On:</Text>
        <View style={styles.socialLinks}>
          <TouchableOpacity style={styles.socialIcon}>
            <Ionicons name="logo-twitter" size={32} color="#1DA1F2" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <Ionicons name="logo-github" size={32} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <Ionicons name="logo-linkedin" size={32} color="#0A66C2" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <Footer />
    </View>
  );
};

export default Home;
