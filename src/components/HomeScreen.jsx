// HomeScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AddProperty from './AddProperty';

const HomeScreen = ({ route }) => {
    const [properties, setProperties] = useState(null);
  
    useEffect(() => {
      const receivedProperty = route.params;
      setProperties([...properties, receivedProperty]);
    }, [route.params]);

  return (
    <View>
      <Text>Properties</Text>

      <FlatList
      data={properties}
      renderItem={({ item }) => (
        <View style={styles.propertyCard}>
          <Text style={styles.propertyTitle}>{property.propertyName}</Text>
          <Text>Property Type: {property.propertyType}</Text>
          <Text>Size: {property.size}</Text>
          <Text>Price: {property.price}</Text>
          <Text>State: {property.state}</Text>
          <Text>City: {property.city}</Text>
          <Text>Address: {property.address}</Text>
          <Text>Contact Number: {property.contactNumber}</Text>
          <Text>Description: {property.description}</Text> 
        </View>
      )}
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