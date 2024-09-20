import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import Games from './pages/Games';
import Products from './pages/Products';
import AboutMe from './pages/AboutMe';  // Import AboutMe page
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

/**
 * Navigation Component
 * Handles tab navigation between pages in the website.
 */
const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Games') {
              iconName = focused ? 'game-controller' : 'game-controller-outline';
            } else if (route.name === 'Products') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'About Me') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#007BFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} options={{ title: 'Welcome Home' }} />
        <Tab.Screen name="Games" component={Games} options={{ title: 'Play Games' }} />
        <Tab.Screen name="Products" component={Products} options={{ title: 'Browse Products' }} />
        <Tab.Screen name="About Me" component={AboutMe} options={{ title: 'About Me' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
