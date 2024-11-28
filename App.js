import React, { useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper'; // Import du Provider de react-native-paper
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import FriendsListScreen from './screens/FriendsListScreen';
import FriendForumScreen from './screens/FriendForumScreen';
import MapScreen from './screens/MapScreen';
import ProfileScreen from './screens/ProfileScreen';
import theme from './config/theme';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const paperTheme = {
  ...theme, // Utilisation du thème personnalisé
  colors: {
    ...theme.colors, // Couleurs personnalisées
  },
};

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Masquer les en-têtes des onglets
        tabBarStyle: { backgroundColor: paperTheme.colors.background }, // Couleur globale
        tabBarLabelStyle: { fontSize: 14, color: paperTheme.colors.text }, // Texte global
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Text style={{ color: paperTheme.colors.primary }}>🏠</Text>, // Icône colorée
          title: 'Accueil',
        }}
      />
      <Tab.Screen
        name="FriendsList"
        component={FriendsListScreen}
        options={{
          tabBarIcon: () => <Text style={{ color: paperTheme.colors.primary }}>👥</Text>,
          title: 'Amis',
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: () => <Text style={{ color: paperTheme.colors.primary }}>🗺️</Text>,
          title: 'Carte',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <Text style={{ color: paperTheme.colors.primary }}>👤</Text>,
          title: 'Profil',
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // État global pour gérer l'authentification

  return (
    <PaperProvider theme={paperTheme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isLoggedIn ? (
            // Si l'utilisateur est connecté, affiche la navbar (MainTabs)
            <>
            <Stack.Screen name="MainTabs" component={MainTabs} />
            <Stack.Screen name="FriendForum" component={FriendForumScreen} />
          </>
          ) : (
            // Sinon, affiche les écrans de connexion et d'inscription
            <>
              <Stack.Screen name="Login">
                {(props) => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
              </Stack.Screen>
              <Stack.Screen name="Signup" component={SignupScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
