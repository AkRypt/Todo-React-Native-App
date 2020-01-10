import React from 'react';
import { View, Text, FlatList, KeyboardAvoidingView, StyleSheet, Alert } from 'react-native';
import Mybutton from './components/Mybutton';
import Mytextinput from './components/Mytextinput';
import Realm from 'realm';
let realm;

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            FlatListItems: [],
        };
        realm = new Realm({ path: 'UserDatabase.realm' });
        var todoItems = realm.objects('todoSchema');
        this.state = {
            FlatListItems: todoItems,
        };
    }

    saveTodo = () => {
        var that = this;

        const {content} = this.state;

        if (content) {
            realm.write(() => {
                realm.create('todoSchema', {
                    content: that.state.content,
                });
                // realm.deleteAll(); 
                // ^ To delete all objects in realm
            });
            Alert.alert(
                'Success',
                'Todo Item added successfully',
                [{
                    text:'OK',
                    onPress: () => {
                        that.props.navigation.goBack();
                        that.props.navigation.navigate('Todo');
                    }
                }]
            );
        } else alert('Please type something!');
    };

    deleteItem = (index) => {
        var that = this;
        realm.write(() => {
            realm.delete(
                realm.objects('todoSchema')[index]
            );
        });
        Alert.alert(
            'Success',
            'Item deleted successfully',
            [
                {
                    text: 'Ok',
                    onPress: () => {
                        that.props.navigation.goBack();
                        that.props.navigation.navigate('Todo');
                    }
                },
            ],
            { cancealable: false}
        )
    }

    deleteAll = (index) => {
        var that = this;
        realm.write(() => {
            realm.deleteAll();
        });
        Alert.alert(
            'Success',
            'Items deleted successfully',
            [
                {
                    text: 'Ok',
                    onPress: () => {
                        that.props.navigation.goBack();
                        that.props.navigation.navigate('Todo');
                    }
                },
            ],
            { cancealable: false}
        )
    }

    ListViewItemSeparator = () => {
        return (
            <View style={{height: 0.5, width: '100%', backgroundColor: '#000', margin: 8}}/>
        );
    }

    render() {
        return (
            <View style={{marginTop: 10}}>
                <KeyboardAvoidingView behavior='padding'>
                    <Mytextinput placeholder="Enter Todo Item"
                    onChangeText={content => this.setState({content})}/>
                    <Mybutton title="Save" customClick={this.saveTodo.bind(this)}/>
                </KeyboardAvoidingView>
                <FlatList
                data={this.state.FlatListItems}
                ItemSeparatorComponent={this.ListViewItemSeparator}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                    <View style={styles.list}>
                        <Text onPress={() => this.deleteItem(index)}>{item.content}</Text>
                    </View>
                )}>
                </FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        marginHorizontal: 20,
        padding: 8,
    }
});