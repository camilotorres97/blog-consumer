import React, { Component } from 'react';
import { AppRegistry, Modal, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import ModalView from './ModalView';

export default class BlogItem extends Component {

    _onPress = () => {
        alert("Coming Soon")
    };

    render() {
        const textColor = this.props.selected ? "red" : "black";
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View style={styles.rectangle}>
                    <Text style={styles.container}>
                        {this.props.title}
                        {this.props.content}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 2,
        fontSize: 18,
    },
    rectangle: {
        padding: 2,
        paddingLeft: 10,
        width: 'auto',
        height: 'auto',
        backgroundColor: 'transparent',
        overflow: 'hidden',
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderTopColor: 'gray',
    },
});