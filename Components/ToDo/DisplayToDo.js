import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { CheckBox } from 'react-native-elements'

class DisplayToDo extends React.Component{
    render(){
        const {styles, checkTask} = this.props;
        return (
            <View>
                <FlatList 
                data={this.props.tasks}
                keyExtractor={(item) => item.id}
                extraData={this.props}
                renderItem={({item}) => 
                <View style={[styles.center, styles.topPad]}>
                        <CheckBox
                        center
                        title={item.name}
                        checked={item.completed}
                        onPress={() => checkTask(item.id)}
                        />
                        <Text style={[styles.center, styles.topPad]}>{item.description}</Text>
                    </View>}
                />
            </View>
        )
    }
}

export default DisplayToDo;