import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import TurntableHelper from '../components/TurntableHelper/App';  // Import the Turntable component
import styles from '../styles';

/**
 * Products Component
 * Displays a product gallery and allows users to interact with the Turntable Decision Helper.
 */
const Products = () => {
  const [showTurntable, setShowTurntable] = useState(false);

  const handleShowTurntable = () => {
    setShowTurntable(true);
  };

  const handleBackToGallery = () => {
    setShowTurntable(false);
  };

  return (
    <View style={styles.container}>
      {showTurntable ? (
        <>
          {/* Back button to return to the product gallery */}
          <TouchableOpacity style={styles.backButton} onPress={handleBackToGallery}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
          <TurntableHelper />
        </>
      ) : (
        <>
          <Text style={styles.title}>Product Gallery</Text>
          <TouchableOpacity onPress={handleShowTurntable}>
            <Image 
              source={{ uri: 'https://via.placeholder.com/300x200.png?text=Turntable+Helper+Preview' }}  // Placeholder for Turntable Decision Helper
              style={styles.productImage}
            />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Products;
