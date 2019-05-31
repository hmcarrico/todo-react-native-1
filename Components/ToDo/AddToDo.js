import React from 'react';
import { View, TextInput, Text, Button } from 'react-native';

class AddToDo extends React.Component {
    constructor(){
        super();
        this.state = {
            newTitle: '',
            newDescription: ''
        }
    }
    render(){
        const { styles, addTask } = this.props;
        const { newTitle, newDescription } = this.state;
        return (
            <View style={[styles.black, styles.center]}>
                <Text
                style={[styles.center]}>
                    Task:
                </Text>
                    <TextInput
                    placeholder='Enter Task'
                    style={[styles.white]}
                    onChangeText={(text) => this.setState({
                        newTitle: text
                    })}
                    />
                <Text
                style={[styles.center, styles.topPad]}>
                    Notes:
                </Text>
                    <TextInput
                    placeholder='Enter Notes'
                    style={[styles.white]}
                    onChangeText={(text) => this.setState({
                        newDescription: text
                    })}
                    />
                    <Button
                    title='Add Task!'
                    color='white'
                    onPress={() => addTask(newTitle, newDescription)}
                    />
            </View>
        )
    }
}

export default AddToDo;