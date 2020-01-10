import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Mybutton = props => {
    return (
        <TouchableOpacity style={styles.button}
        onPress={props.customClick}>
            <Text style={{color: 'white'}}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'powderblue',
        color: 'white',
        padding: 10,
        margin: 20,
        borderRadius: 30,
    }
});

export default Mybutton;