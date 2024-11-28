import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function MapScreen({ route, navigation }) {
  const [location, setLocation] = useState(null);
  const friend = route.params?.friend;

  useEffect(() => {
    (async () => {
      if (!friend) {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permission refusée', 'L’application a besoin de la localisation pour fonctionner.');
          return;
        }

        let userLocation = await Location.getCurrentPositionAsync({});
        setLocation({
          latitude: userLocation.coords.latitude,
          longitude: userLocation.coords.longitude,
        });
      }
    })();
  }, []);

  const friends = [
    { id: 1, name: 'Ami 1', latitude: 48.8566, longitude: 2.3522, description: 'Bonjour, voici mon profil !' },
    { id: 2, name: 'Ami 2', latitude: 48.8666, longitude: 2.3333, description: 'Un autre message sur le forum.' },
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: friend?.latitude || location?.latitude || 48.8566,
          longitude: friend?.longitude || location?.longitude || 2.3522,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {location && !friend && (
          <Marker
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            title="Votre position"
          />
        )}
        {friends.map((item) => (
          <Marker
            key={item.id}
            coordinate={{ latitude: item.latitude, longitude: item.longitude }}
            title={item.name}
            onPress={() => navigation.navigate('FriendForum', { friend: item })} // Navigation vers la page de forum
          />
        ))}
        {friend && (
          <Marker
            coordinate={{ latitude: friend.latitude, longitude: friend.longitude }}
            title={friend.name}
          />
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
