// AddProperty.jsx

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AddProperty = () => {
  const [propertyName, setPropertyName] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [description, setDescription] = useState('');

  const handleAddProperty = () => {
    // Perform logic to add property details (e.g., send request to server)
    console.log('Adding property with details:', {
      propertyName,
      propertyType,
      size,
      price,
      state,
      city,
      address,
      contactNumber,
      description,
    });
    // Optionally, you can navigate the user to another screen or perform any other actions.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Property</Text>

      {/* Your property details form */}
      <TextInput
        style={styles.input}
        placeholder="Property Name"
        onChangeText={(text) => setPropertyName(text)}
        value={propertyName}
      />

      <TextInput
        style={styles.input}
        placeholder="Property Type"
        onChangeText={(text) => setPropertyType(text)}
        value={propertyType}
      />

      <TextInput
        style={styles.input}
        placeholder="Size"
        onChangeText={(text) => setSize(text)}
        value={size}
      />

      <TextInput
        style={styles.input}
        placeholder="Price"
        onChangeText={(text) => setPrice(text)}
        value={price}
      />

      <TextInput
        style={styles.input}
        placeholder="State"
        onChangeText={(text) => setState(text)}
        value={state}
      />

      <TextInput
        style={styles.input}
        placeholder="City"
        onChangeText={(text) => setCity(text)}
        value={city}
      />

      <TextInput
        style={styles.input}
        placeholder="Address"
        onChangeText={(text) => setAddress(text)}
        value={address}
      />

      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        onChangeText={(text) => setContactNumber(text)}
        value={contactNumber}
      />

      <TextInput
        style={styles.input}
        placeholder="Description"
        onChangeText={(text) => setDescription(text)}
        value={description}
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