import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Auth0 from 'react-native-auth0';

const auth0 = new Auth0({
  domain: 'dev-bwo7neaswl150ly3.us.auth0.com',
  clientId: 'F1QaKM2qdJPQpSaUVLp402IqQvKydXgt',
});

const SignUp = () => {
  const navigation = useNavigation();

  const handleSignUp = () => {
    auth0.webAuth
      .authorize({
        scope: 'openid profile email', // Adjust scopes as needed
        audience: 'your-api-audience', // Replace with your API audience
        prompt: 'login',
        mode: 'signup', // Set the mode to 'signup' for signup
      })
      .then((credentials) => {
        console.log('Signup credentials:', credentials);
        // Handle successful signup, e.g., navigate to main screen
        navigation.navigate('Main');
      })
      .catch((error) => {
        console.error('Signup failed:', error);
        // Handle signup failure
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
        <Text style={styles.signupButtonText}>Sign Up with Auth0</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  signupButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default SignUp;