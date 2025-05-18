import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '../ThemeProvider';



const Home = () => {
  const theme = useTheme();
  return (
    <View >
      <Text>HomeScreen</Text>
    </View>
  )
}

export default Home