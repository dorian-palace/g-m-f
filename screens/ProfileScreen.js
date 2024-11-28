import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

export default function ProfileScreen({ navigation, route }) {
  // Simuler les informations de l'utilisateur connecté
  const user = {
    name: 'John Doe',
    email: 'test@test.com',
    joinedDate: '2024-01-01',
  };

  const handleLogout = () => {
    // Simuler la déconnexion
    Alert.alert('Déconnexion', 'Vous êtes déconnecté.');
    navigation.navigate('Login'); // Rediriger vers l'écran de connexion
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nom :</Text>
        <Text style={styles.value}>{user.name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email :</Text>
        <Text style={styles.value}>{user.email}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Membre depuis :</Text>
        <Text style={styles.value}>{user.joinedDate}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Modifier le profil"
          onPress={() => Alert.alert('Modifier', 'Fonctionnalité à venir...')}
        />
        <Button title="Se déconnecter" onPress={handleLogout} color="red" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
    color: '#666',
  },
  buttonContainer: {
    marginTop: 24,
  },
});
