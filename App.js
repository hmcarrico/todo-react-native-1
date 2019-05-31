import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import DisplayToDo from './Components/ToDo/ToDoContainer';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Projects</Text>
        <DisplayToDo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 50
  },
  heading: {
    color: "indigo",
    fontSize: 50
  }
});
