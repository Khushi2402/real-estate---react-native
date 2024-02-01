import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Auth0 from 'react-native-auth0';

const auth0 = new Auth0({
  domain: 'dev-bwo7neaswl150ly3.us.auth0.com',
  clientId: 'F1QaKM2qdJPQpSaUVLp402IqQvKydXgt',
});

const Login = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    auth0.webAuth
      .authorize({
        scope: 'openid profile email', // Adjust scopes as needed
        audience: 'your-api-audience', // Replace with your API audience
        prompt: 'login',
      })
      .then((credentials) => {
        console.log('Login credentials:', credentials);
        // Handle successful login, e.g., navigate to main screen
        navigation.navigate('Main');
      })
      .catch((error) => {
        console.error('Login failed:', error);
        // Handle login failure
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login with Auth0</Text>
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
});

export default Login;