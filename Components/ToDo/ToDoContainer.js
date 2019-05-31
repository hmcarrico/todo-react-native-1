import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
//Components
import DisplayToDo from './DisplayToDo';
import AddToDo from './AddToDo';

class ToDoContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            id: 3,
            tasks: []
        }
    }

    checkTask = (id) => {
        const index = this.state.tasks.findIndex(task => {
            return task.id === id
        });
        if(index !== -1){
            let freshArray = this.state.tasks.slice();
            freshArray[index].completed = !freshArray[index].completed;
            this.setState({
                tasks: freshArray
            })
        } else {
            Alert.alert('error checking task')
        }
    }

    addToList = (title, description) => {
        let newId = this.state.id + 1
        let newItem = {
            id: newId,
            name: title,
            description: description,
            completed: false
        }
        let copiedList = this.state.tasks.slice();
        copiedList.push(newItem)
        this.setState({
            tasks: copiedList,
            id: this.state.id + 1
        })
    }

    deleteToDo = (id) => {
        
    }

    render(){
        return (
            <View>
                <Text style={styles.center}>ToDo with FlatList</Text>
                <AddToDo addTask={this.addToList} styles={styles} />
                <DisplayToDo styles={styles} checkTask={this.checkTask} tasks={this.state.tasks}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    center: {
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        width: 300,
    },
    topPad: {
        paddingTop: 10,
    },
    bold: {
        fontWeight: "bold"
    },
    black: {
        backgroundColor: 'rgba(39, 39, 32, 0.67)',
        borderRadius: 20,
        padding: 20
    },
    white: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 5
    }
});

export default ToDoContainer;