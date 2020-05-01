import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Button,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {search, userID} from '../lib/utils';

const styles = StyleSheet.create({
  flatListView: {
    backgroundColor: '#FFF',
  },
  itemTouchable: {
    flexDirection: 'column',
    padding: 15,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    borderBottomColor: '#dddddd',
    borderBottomWidth: 0.25,
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemName: {
    fontSize: 24,
    fontFamily: 'IBMPlexSans-Medium',
  },
  itemDescription: {
    fontSize: 14,
    fontFamily: 'IBMPlexSans-Medium',
    color: 'gray',
  },
  itemQuantity: {
    fontSize: 14,
    fontFamily: 'IBMPlexSans-Medium',
    color: 'gray',
  },
  listButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 50,
  },
  emptyListView: {
    backgroundColor: '#FFFFFF',
    flex: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyListText: {
    fontFamily: 'IBMPlexSans-Bold',
    color: '#999999',
    fontSize: 16,
  },
});

const MyResources = function ({navigation}) { 
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    navigation.addListener('focus', () => {
      search({userID: userID()})
        .then(setItems)
        .catch((err) => {
          console.log(err);
          Alert.alert(
            'ERROR',
            'Please try again. If the problem persists contact an administrator.',
            [{text: 'OK'}],
          );
        });
    });
  }, []);

  const Item = (props) => {
    return (
      <TouchableOpacity
        style={styles.itemTouchable}
        onPress={() => {
          props.navigation.navigate('Edit Donation', {item: props});
        }}>
        <View style={styles.itemView}>
          <Text style={styles.itemName}>{props.name}</Text>
          <Text style={styles.itemQuantity}> ( {props.quantity} ) </Text>
        </View>
        <Text style={styles.itemDescription}>{props.description}</Text>
      </TouchableOpacity>
    );
  };

  if (items.length > 0) {
    return (
      <View>
      <View style={styles.listButtons}>
          <Button title='Add Donation' onPress=
          {() => {
            navigation.navigate('AddResource');
          }} />
          <Button title='Edit Donation' onPress=
          {() => {
            navigation.navigate('EditResource');
          }} />
          
        </View>
      <FlatList
        style={styles.flatListView}
        data={items}
        renderItem={({item}) => <Item {...item} />}
        keyExtractor={(item) => item.id || item['_id']}
      />
      </View>
    );
  } else {
    return (
      <View style={styles.flatListView}>
        <View style={styles.listButtons}>
          <Button title='Add Donation' onPress=
          {() => {
            navigation.navigate('AddResource');
          }} />
          <Button title='Edit Donation' onPress=
          {() => {
            navigation.navigate('EditResource');
          }} />
        </View>

        <View style={styles.emptyListView}>
          <Text style={styles.emptyListText}>
            You currently have no donations listed
          </Text>
        </View>
      </View>
    );
  }
};

export default MyResources;
