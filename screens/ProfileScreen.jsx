import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import ProfileBox from '../components/reusable/profileBox';
import Input from '../components/reusable/input'
import Button from '../components/reusable/button';

const ProfileCreation = ({navigation}) => {

  const [profilePhoto, setProfilePhoto] = useState(null);
  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState('');
  
  const [bio, setBio] = useState('');

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#FEF5FF' }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', gap: 20, paddingTop: 40 }}>
        <ProfileBox 
        username={username}
        nickname={nickname}
        profilePhoto={profilePhoto}
        bio={bio}/>
        <View style={styles.container}>
        <Input 
        placeholder="Username"
        value={username}
        onChangeText={setUsername}/>
        <Input
        placeholder="Nickname"
        value={nickname}
        onChangeText={setNickname} />
        <Input
        placeholder="bio"
        value={bio} 
        onChangeText={setBio}/>

        </View>
        <Button

        title= "Fly to Map"
        onPress= {()=> {navigation.navigate('MapScreen')}}
        />
      </View>  
      </ScrollView> 
   
  )
}

  const styles = StyleSheet.create ({
   container: { 
       flex: 1,
       gap: 10,
       marginTop: 40, 
       paddingHorizontal: 20, 
       width: '100%',
       alignItems: 'center'
       }
  })




export default ProfileCreation