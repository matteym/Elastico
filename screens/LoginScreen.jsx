import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import de useNavigation
import Input from '../components/reusable/input'
import Divider from '../components/reusable/divider' // Import du composant Divider
import { useTheme } from '../ThemeProvider';
import { FontAwesome } from '@expo/vector-icons'; // Import de FontAwesome pour les icônes
import ProfileBox from '../components/reusable/profileBox';
import Button from '../components/reusable/button';





const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const theme = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: '#FEF5FF' }]}>
      <View style={styles.header}>
        <Text style={[styles.title, {fontFamily: "Aladin-Regular"}]} >Elastico</Text>
        <Divider />
      </View>
      <View style={styles.form}>

      <TouchableOpacity
        style={styles.googleButton}
        onPress= {() => {}}
      >
          <FontAwesome name="google" size={24} color="black" />
          <Text style={styles.googleButtonText}>Login with Google</Text>
          <Text></Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.facebookButton}
        onPress= {() => {}}
      >
          <FontAwesome name="facebook" size={24} color="black" />
          <Text style={styles.facebookButtonText}>Login with Facebook</Text>
          <Text></Text>
      </TouchableOpacity>

      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardtype="email-adress"
        autoCapitalize="none"
        autoCorrect={false}
        />

      <Input
        placeholder="password"
        value={password}
        onChangeText={setPassword}
        keyboardtype="password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        />
      <TouchableOpacity
        style={styles.forgotPassword}
        onPress={() => {
          // Navigation vers une page de récupération de mot de passe (si elle existe)
          navigation.navigate('ForgotPasswordScreen');
        }}
      >
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
        <Text style={styles.registerLink}> Click here  </Text>
      </TouchableOpacity>

      <Button
        title= "Login"
        onPress= {()=> {}}
      ></Button>

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            // Navigation vers la page d'inscription
            navigation.navigate('Register screen');
          }}
        >
          <Text style={styles.registerLink}> Sign up</Text>
        </TouchableOpacity>
        
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    header: {
      alignItems: 'center',
      marginTop: 40,
      marginBottom: 80,
      paddingLeft:'15%',
      paddingRight:'15%',

    },
  container: {
    flex: 1,
   
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 40, // Ajout pour descendre la view form
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    flexDirection: 'row',
    
  },
  forgotPasswordText: {
  },
  googleButton: {
    width: '100%',
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#e3e3ff',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    paddingLeft:20,
  },
  googleButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  facebookButton: {
    width: '100%',
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#e3e3ff',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    paddingLeft:20,
    
  },
  facebookButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  registerText: {
    fontSize: 14,
    color: '#333',
  },
  registerLink: {
    fontSize: 14,
    color: '#dd9aff',
    fontWeight: 'bold',
  },
});

export default Login;