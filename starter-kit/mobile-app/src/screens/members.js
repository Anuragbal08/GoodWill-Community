import React, { Component } from "react";
import {
  StyleSheet,
  FlatList,
  View,SafeAreaView,
  Text,Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { ListItem } from "react-native-elements";
import axios from "axios";

const styles = StyleSheet.create({
  flatListView: {
    flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
  },
  blocks: {
    width: 20, 
    height: 50, 
    backgroundColor: 'green'
  },
});

type Props = {};
export default class Members extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = { list: [] };
  }

  componentDidMount() {
    axios.get("https://rickandmortyapi.com/api/character").then(response => {
      this.setState({ list: response.data.results });
    });
  }

keyExtractor = (item, index) => index.toString();
renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={"Gender: " + item.gender}
      leftAvatar={{ source: { uri: item.image } }}
      bottomDivider={true}
      onPress={() =>
        Alert.alert(
          item.name,
          `species: ${item.species}, \n gender: ${item.gender} \n location ${
            item.location.name
          }`
        )
      }
    />
  );

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.list}
          renderItem={this.renderItem}
        />
      </SafeAreaView>
    );
  }
}

