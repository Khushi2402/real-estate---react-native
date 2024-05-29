// HomeScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AddProperty from './AddProperty';

const HomeScreen = ({ route }) => {
    const [properties, setProperties] = useState([]);
  
    useEffect(() => {
      if (route.params) {
        const receivedProperty = route.params;
      setProperties([...properties, receivedProperty]);
      }
    }, [route.params]);

  return (
    <View style={styles.container}>
      <Text>Properties</Text>
      <FlatList
      data={properties}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.propertyCard}>
          <Text style={styles.propertyTitle}>{item.propertyName}</Text>
          <Text>Property Type: {item.propertyType}</Text>
          <Text>Size: {item.size}</Text>
          <Text>Price: {item.price}</Text>
          <Text>State: {item.state}</Text>
          <Text>City: {item.city}</Text>
          <Text>Address: {item.address}</Text>
          <Text>Contact Number: {item.contactNumber}</Text>
          <Text>Description: {item.description}</Text> 
        </View>
      )}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  propertyCard: {
    marginVertical: 10,
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
  },
  propertyTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default HomeScreen;