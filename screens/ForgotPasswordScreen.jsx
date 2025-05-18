import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import de useNavigation
import Input from '../components/reusable/input'
import Divider from '../components/reusable/divider' // Import du composant Divider
import { useTheme } from '../ThemeProvider';
import { FontAwesome } from '@expo/vector-icons'; // Import de FontAwesome pour les icônes
import ProfileBox from '../components/reusable/profileBox';
import Button from '../components/reusable/button';





const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  
  return (
    <ScrollView style={[styles.container, { backgroundColor: '#FEF5FF' }]}>
      <View style={styles.header}>
        <Text style={[styles.title, {fontFamily: "Aladin-Regular"}]} >Forgot your password</Text>
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

      <Button
        title= "Send reset link"
        onPress= {()=> {navigation.navigate('LoginScreen')}}
      ></Button>

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
      paddingRight:'15%'

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
    fontSize: 34,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
});


export default ForgotPassword