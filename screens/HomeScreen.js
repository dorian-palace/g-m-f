import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../config/theme'; // Import du thème

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          <Text style={styles.titleBlack}>GuessMy</Text>
          <Text style={styles.titleOrange}>Fart</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background, // Utilisation du fond global
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.border, // Bordure globale
  },
  title: {
    fontSize: 28,
    fontWeight: theme.fonts.bold, // Police globale
  },
  titleBlack: {
    color: theme.colors.text, // Texte blanc global
  },
  titleOrange: {
    color: theme.colors.primary, // Orange global
  },
});
