import * as React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import Constants from 'expo-constants';


export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Nonogram
        </Text>
        <Image style={styles.logo} source={require('../assets/nonogram_icon.png')} />

        <View style = {{margin : 20}}>
          <Button title = "PLAY" style={{color: 'blue'}} >
          </Button>
        </View>
        <View style = {{margin : 20}}>
          <Button title = "HOW TO PLAY">
          </Button>
        </View>
      </View>

      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    fontSize: 70, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    margin : 33
  },
  logo: {
    alignItems: 'center',
    height: 128,
    width: 128,
  }
});