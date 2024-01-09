// AddProperty.jsx

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddProperty = () => {

  const navigation = useNavigation();

  const [propertyDetails, setPropertyDetails] = useState({
    propertyName: '',
    propertyType: '',
    size: '',
    price: '',
    state: '',
    city: '',
    address: '',
    contactNumber: '',
    description: '',
  });

  const handleChange = (name, value) => {
    setPropertyDetails({ ...propertyDetails, [name]: value });
  };

  const handleAddProperty = () => {
    // Implement your logic to send property details to HomeScreen
    console.log('Property details:', propertyDetails);
    // Assuming you have a navigation prop for navigation
    navigation.navigate('Home', propertyDetails);

    setPropertyDetails({
      propertyName: '',
      propertyType: '',
      size: '',
      price: '',
      state: '',
      city: '',
      address: '',
      contactNumber: '',
      description: '',
    });

    Alert.alert('Property Added Successfully!');

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Property</Text>

      {/* Your property details form */}
      <TextInput
        style={styles.input}
        placeholder="Property Name"
        onChangeText={(text) => setPropertyDetails({ ...propertyDetails, propertyName: text })}
        value={propertyDetails.propertyName}
      />

      <TextInput
        style={styles.input}
        placeholder="Property Type"
        onChangeText={(text) => setPropertyDetails({ ...propertyDetails, propertyType: text })}
        value={propertyDetails.propertyType}
      />

      <TextInput
        style={styles.input}
        placeholder="Size"
        onChangeText={(text) => setPropertyDetails({ ...propertyDetails, size: text })}
        value={propertyDetails.size}
      />

      <TextInput
        style={styles.input}
        placeholder="Price"
        onChangeText={(text) => setPropertyDetails({ ...propertyDetails, price: text })}
        value={propertyDetails.price}
      />

      <TextInput
        style={styles.input}
        placeholder="State"
        onChangeText={(text) => setPropertyDetails({ ...propertyDetails, state: text })}
        value={propertyDetails.state}
      />

      <TextInput
        style={styles.input}
        placeholder="City"
        onChangeText={(text) => setPropertyDetails({ ...propertyDetails, city: text })}
        value={propertyDetails.city}
      />

      <TextInput
        style={styles.input}
        placeholder="Address"
        onChangeText={(text) => setPropertyDetails({ ...propertyDetails, address: text })}
        value={propertyDetails.address}
      />

      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        onChangeText={(text) => setPropertyDetails({ ...propertyDetails, contactNumber: text })}
        value={propertyDetails.contactNumber}
      />

      <TextInput
        style={styles.input}
        placeholder="Description"
        onChangeText={(text) => setPropertyDetails({ ...propertyDetails, description: text })}
        value={propertyDetails.description}
      />
      
      {/* Add Property Button */}
      <TouchableOpacity style={styles.addPropertyButton} onPress={handleAddProperty}>
        <Text style={styles.buttonText}>Add Property</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingLeft: 8,
  },
  addPropertyButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default AddProperty;