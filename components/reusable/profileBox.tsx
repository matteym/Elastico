import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const ProfileBox = ({username, profilePhoto, nickname}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: "bold", fontSize: 18}}> {username || "Username"}</Text>
      <Image
        source = {profilePhoto ? { uri: profilePhoto } : require('../../assets/images/defaultProfileImage.png')}
        style={styles.profilePhoto } />
      
      <Text style={styles.nickname}>" {nickname || "nickname"} "</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        minHeight: 200,
        gap: 5,
        width: '100%',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center', 
        justifyContent: 'center',
      },

      profilePhoto: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#000',
      },

      
       nickname: { 
        fontFamily: 'Aladin',
        fontSize: 22,
        color: '#8F0000',
      },

       bio: {
        fontSize: 16,
        marginBottom: 20,
        color: '#000',
        maxWidth: 400,
        textAlign: 'center',
      },
 

    
})

export default ProfileBox








