import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import de useNavigation
import Input from '../components/reusable/input'
import Divider from '../components/reusable/divider' // Import du composant Divider
import { useTheme } from '../ThemeProvider' // Import du thème;
import Button from '../components/reusable/button';




const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const theme = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: '#FEF5FF' }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { fontFamily: 'Aladin'}]} >Elastico</Text>
        <Divider />
      </View>
      <View style={styles.form}>

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
        marginBottom={20}
        />  

    

      <Button
        title= "Sign up"
        onPress= {()=> {navigation.navigate('ProfileScreen')}}
      ></Button>

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Already have an account ?</Text>
        <TouchableOpacity
          onPress={() => {
            // Navigation vers la page d'inscription
            navigation.navigate('Register screen');
          }}
        >
          <Text style={styles.registerLink}> Log in</Text>
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
  },
  forgotPasswordText: {
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

export default Register;
