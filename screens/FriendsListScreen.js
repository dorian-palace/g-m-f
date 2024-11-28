import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const friends = [
  { id: '1', name: 'Ami 1', location: 'Paris, France' },
  { id: '2', name: 'Ami 2', location: 'Lyon, France' },
  { id: '3', name: 'Ami 3', location: 'Marseille, France' },
];

export default function FriendsListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des Amis</Text>
      <FlatList
        data={friends}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.friendCard}
            onPress={() => navigation.navigate('Map', { friend: item })}
          >
            <Text style={styles.friendName}>{item.name}</Text>
            <Text style={styles.friendLocation}>{item.location}</Text>
          </TouchableOpacity>
        )}
      />
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
    marginBottom: 16,
    textAlign: 'center',
  },
  friendCard: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    elevation: 2,
  },
  friendName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  friendLocation: {
    fontSize: 14,
    color: '#666',
  },
});
