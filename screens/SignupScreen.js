import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, username }),
      });
  
      // Si le body est vide, éviter le JSON parse error
      const data = response.status !== 204 ? await response.json() : {};
  
      if (response.ok) {
        Alert.alert('Succès', data.message || 'Compte créé avec succès.');
      } else {
        Alert.alert('Erreur', data.error || 'Une erreur est survenue.');
      }
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error);
      Alert.alert('Erreur', 'Impossible de communiquer avec le serveur.');
    }
  };
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Créer un compte</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom d'utilisateur"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Créer un compte" onPress={handleSignup} />
      <Button
        title="Retour à la connexion"
        onPress={() => navigation.navigate('Login')}
        color="blue"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
});
