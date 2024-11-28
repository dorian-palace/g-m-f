import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

export default function FriendForumScreen({ route }) {
  const { friend } = route.params; // Récupère les informations de l’ami
  const [message, setMessage] = useState('');
  const [posts, setPosts] = useState([
    { id: '1', content: 'Ceci est un message initial !' },
  ]);

  const addPost = () => {
    if (message.trim()) {
      setPosts((prevPosts) => [
        ...prevPosts,
        { id: String(posts.length + 1), content: message },
      ]);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{friend.name}</Text>
      <Text style={styles.description}>{friend.description}</Text>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text style={styles.postContent}>{item.content}</Text>
          </View>
        )}
      />

      <TextInput
        style={styles.input}
        placeholder="Ajouter un message"
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Envoyer" onPress={addPost} />
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
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
    color: '#666',
  },
  post: {
    backgroundColor: '#f5f5f5',
    padding: 8,
    marginVertical: 4,
    borderRadius: 8,
  },
  postContent: {
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },
});
