import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BlogConsumer from './src/components/BlogConsumer';
import ModalView from './src/components/ModalView';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <BlogConsumer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: '#33adff'
  },
});
