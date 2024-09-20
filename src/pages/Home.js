import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from '../styles';  // Import global stylesheet
import { Ionicons } from '@expo/vector-icons';  // Import icons for social media
import Footer from '../components/Footer';  // Import Footer component

/**
 * Home Component
 * The enhanced Home page with an introduction, features, and social media links.
 */
const Home = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Introduction Section */}
      <View style={styles.introContainer}>
        <Text style={styles.title}>Welcome to My Personal Website</Text>
        <Text style={styles.subtitle}>
          Hi! I'm Mike, a software engineer with a passion for creating amazing web and mobile applications.
          Explore my work, play some games, or check out the products section to see what I've been up to!
        </Text>
        <View style={styles.profileImageContainer}>
          <Image 
            source={{ uri: 'https://via.placeholder.com/150' }}  // Placeholder for your profile image
            style={styles.profileImage}
          />
        </View>
      </View>

      {/* Features Section */}
      <View style={styles.featuresContainer}>
        <Text style={styles.title}>Features of This Website</Text>
        <View style={styles.featureItem}>
          <Ionicons name="game-controller" size={32} color="#007BFF" />
          <Text style={styles.featureText}>Fun Games to play and explore</Text>
        </View>
        <View style={styles.featureItem}>
          <Ionicons name="cart" size={32} color="#007BFF" />
          <Text style={styles.featureText}>Browse cool products and services</Text>
        </View>
        <View style={styles.featureItem}>
          <Ionicons name="person" size={32} color="#007BFF" />
          <Text style={styles.featureText}>Learn more about me and my projects</Text>
        </View>
      </View>

      {/* Call-to-Action Section */}
      <View style={styles.ctaContainer}>
        <Text style={styles.title}>Start Exploring</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Games')}>
          <Text style={styles.buttonText}>Go to Games Page</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Products')}>
          <Text style={styles.buttonText}>Explore Products</Text>
        </TouchableOpacity>
      </View>

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
    </ScrollView>
  );
};

export default Home;
