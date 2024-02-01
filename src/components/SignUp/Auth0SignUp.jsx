import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Auth0 from 'react-native-auth0';

const auth0 = new Auth0({
  domain: 'dev-bwo7neaswl150ly3.us.auth0.com',
  clientId: 'F1QaKM2qdJPQpSaUVLp402IqQvKydXgt',
});

const Auth0SignUp = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const handleAuthentication = async () => {
      try {
        const credentials = await auth0.webAuth
          .resume()
          .then((credentials) => {
            console.log('Signup credentials:', credentials);
            // Handle successful signup, e.g., store tokens, navigate to main screen
            navigation.navigate('Main');
          })
          .catch((error) => {
            console.error('Signup failed:', error);
            // Handle signup failure
          });
      } catch (error) {
        console.error('Error resuming Auth0 authentication:', error);
        // Handle error
      }
    };

    handleAuthentication();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="green" />
      <Text style={styles.loadingText}>Signing Up...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default Auth0SignUp;
