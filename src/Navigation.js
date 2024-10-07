import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, Text } from 'react-native';
import Home from './pages/Home';
import Games from './pages/Games';
import Products from './pages/Products';
import AboutMe from './pages/AboutMe';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '@workos-inc/authkit-react';

const Tab = createBottomTabNavigator();

/**
 * Navigation Component
 * Handles tab navigation between pages in the website.
 */
const Navigation = () => {
  const { user, signIn, signOut } = useAuth();

  const handleAuthAction = () => {
    if (user) {
      signOut();  // Log out if the user is logged in
    } else {
      signIn();   // Log in if no user is logged in
    }
  };

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
          headerRight: () => (
            <TouchableOpacity onPress={handleAuthAction} style={{ marginRight: 20 }}>
              <Text style={{ color: '#fff', fontSize: 16 }}>
                {user ? 'Logout' : 'Login'}
              </Text>
            </TouchableOpacity>
          ),
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{ 
            title: user ? `Welcome Home, ${user.firstName}` : 'Welcome Home'  // Dynamic title
          }} 
        />
        <Tab.Screen name="Games" component={Games} options={{ title: 'Play Games' }} />
        <Tab.Screen name="Products" component={Products} options={{ title: 'Browse Products' }} />
        <Tab.Screen name="About Me" component={AboutMe} options={{ title: 'About Me' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
