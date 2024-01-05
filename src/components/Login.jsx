// Import necessary components from React and React Native
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// Functional component for the login page
const Login = () => {
  // State variables to store the entered username/email and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle login button press
  const handleLogin = () => {
    // Perform login logic here (e.g., send a request to the server)
    console.log('Logging in with:', { username, password });
  };

  return (
    <View style={styles.container}>
      {/* Username or Email Address Input */}
      <TextInput
        style={styles.input}
        placeholder="Username or Email Address"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>

      {/* Sign Up Text */}
      <Text style={styles.signUpText}>Don't have an account yet? Sign Up</Text>
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
  loginButton: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  signUpText: {
    marginTop: 16,
    color: 'blue',
  },
});

// Export the Login component
export default Login;