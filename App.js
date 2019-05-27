import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
