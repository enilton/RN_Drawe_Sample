import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default class MenuButton extends Component {
    render(){
        return (
            <TouchableOpacity   onPress={()=>{}}>
                <Text>Button</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    menuIcon: {
        zIndex: 9,
        position: 'absolute',
        top:  40,
        left: 20,
    },
})