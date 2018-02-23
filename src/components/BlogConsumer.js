import React, { Component } from 'react';
import { ActivityIndicator, AppRegistry, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import BlogItem from './BlogItem';

export default class BlogConsumer extends React.Component {

  _keyExtractor = (item, index) => item.title.rendered;
  _keyExtractor = (item, index) => item.content.rendered;

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null,
      visible: false,
    }
  }

  componentDidMount() {
    return this.buscar(null);
  }

  _renderItem = ({ item }) => (
    <BlogItem
      id={item.id}
      title={item.title.rendered}
    //content={item.content.rendered}
    />
  );

  buscar(text) {
    let url = null;
    if (text == null || text.text == null) {
      url = 'https://www.4softwaredevelopers.com/wp-json/wp/v2/posts';
    } else {
      url = 'https://www.4softwaredevelopers.com/wp-json/wp/v2/posts?search=' + text.text;
    }
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          data: responseJson
        }, function () {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View>
        <TextInput
          style={styles.bar}
          onChangeText={(text) => this.buscar({ text })}
          value={this.state.text}
          placeholder="Buscar"
          underlineColorAndroid="transparent"
        />
        <FlatList style={styles.container}
          data={this.state.data}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  bar: {
    fontSize: 20,
    borderBottomWidth: 1,
    paddingTop: 30,
    width: 'auto',
    backgroundColor: "gray"
  },
});