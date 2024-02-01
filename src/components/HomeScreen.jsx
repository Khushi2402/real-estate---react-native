// HomeScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const HomeScreen = ({ route }) => {
    console.log('HomeScreen rendered');
    const [properties, setProperties] = useState([]);
  
    useEffect(() => {
      const initialProperties = route.params?.payload;;
      if (initialProperties) {
        setProperties(prevProperties => [...properties, initialProperties]);
      }
    }, [route.params]);

    // Generating a unique key for the FlatList
  const uniqueKey = Date.now();

  return (
    <View>
      <Text>Properties</Text>
      <FlatList
      data={properties}
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
      keyExtractor={(item) => item.propertyName}
      key={uniqueKey} 
    />
    </View>
  );
};

const styles = StyleSheet.create({
    propertyCard: {
        marginVertical: 10,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
      },
      propertyTitle: {
        fontWeight: 'bold',
        fontSize: 18,
      },
});

export default HomeScreen;