import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, Alert } from 'react-native';
import Constants from 'expo-constants';


export default function Home({navigation}) {
    return (
      <View style={styles.container}>
        <Text style={{
    margin: 24,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  }}>
          Welcome to Young&Young NoNogram
        
        </Text>
        <Image source={require('../assets/YYNN.png')} style = {{width: 395, height: 178}}/>
        <View style={{width: 395, height: 70}}/>
        <View style={{width: 395, height: 40}}>
          <Button title = "Play" color = "steelblue" onPress={() => navigation.navigate('GamePlay')}/>
        </View>
        <View style={{width: 395, height: 40}}>
          <Button title = "How to Play" color = "steelblue"/>
        </View>
        <View style={{width: 395, height: 40}}>
          <Button title = "Language" color = "steelblue"/>
        </View>
        <View style={{width: 395, height: 40}}>
          <Button title = "Information" color = "steelblue"/>
        </View>
      </View>
      
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});