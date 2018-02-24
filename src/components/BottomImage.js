import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class BottomImage extends Component {
    render() {
        return (
            <View>
                <Image
                    style={styles.imagen}
                    source={require('./../resources/images/4sd.png')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imagen: {
        width: 100,
        height: 100
    }
});