// Import necessary components from React and React Native
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Functional component for the sign-up page
const SignUp = () => {

  const navigation = useNavigation();
  
  // State variables to store the entered full name, email, and password
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle sign-up button press
  const handleSignUp = () => {
    // Perform sign-up logic here (e.g., send a request to the server)
    console.log('Signing up with:', { fullName, email, password });

    navigation.navigate('Main');
  };

  // Function to navigate to the sign-in page
  const navigateToSignIn = () => {
    navigation.navigate('Login'); // Assuming you have a 'SignIn' screen in your navigation
  };

  return (
    <View style={styles.container}>
      {/* Full Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        onChangeText={(text) => setFullName(text)}
        value={fullName}
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      {/* Sign-Up Button */}
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Sign In Text */}
      <TouchableOpacity onPress={navigateToSignIn}>
        <Text style={styles.signInText}>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
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
  signUpButton: {
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  signInText: {
    marginTop: 16,
    color: 'blue',
  },
});

// Export the SignUp component
export default SignUp;