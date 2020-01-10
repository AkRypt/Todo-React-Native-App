import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import Mybutton from './components/Mybutton';
import Realm from 'realm';
let realm;

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        realm = new Realm({
            path: 'UserDatabase.realm',
            schema: [{
                name: 'todoSchema',
                properties: {
                    content: 'string'
                }
            }]
        });
    }

    render() {
        return (
            <View>
            <ImageBackground style={styles.bg} source={require('../assets/bg.png')}>
                <Text style={styles.text}>Welcome to Todo App</Text>
                <Mybutton title="Continue"
                customClick={() => this.props.navigation.navigate('Todo')}/>
            </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    bg: {
        opacity: 0.8,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 22,
        color: 'white',
        alignSelf: 'center',
    },
});