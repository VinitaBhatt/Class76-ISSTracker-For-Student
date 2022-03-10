import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ISSLocationScreen from './screens/ISSLocationScreen';
import MeteorScreen from './screens/MeteorScreen';

export default class App extends Component {
  render(){
      return (
        <View style={styles.container}>
          <MeteorScreen/>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
