import React from 'react';
import { StyleSheet, FlatList, View, Text, TextInput,TouchableOpacity, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { replypost, postsearch ,userID } from '../lib/utils'

const styles = StyleSheet.create({
  flatListView: {
    backgroundColor: '#FFF'
  },
  outerView: {
    flex: 1,
    padding: 22,
    backgroundColor: '#FFF'
  },
  splitView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemTouchable: {
    flexDirection: 'column',
    padding: 15,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    borderBottomColor: '#dddddd',
    borderBottomWidth: 0.25
  },
  textInput: {
    fontFamily: 'IBMPlexSans-Medium',
    flex: 1,
    borderColor: '#D0E2FF',
    borderWidth: 2,
    padding: 14,
    elevation: 2,
    marginBottom: 25
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemName: {
    fontSize: 24,
    fontFamily: 'IBMPlexSans-Medium',
  },
  itemDescription: {
    fontSize: 14,
    fontFamily: 'IBMPlexSans-Medium',
    color: 'gray'
  },
  itemQuantity: {
    fontSize: 14,
    fontFamily: 'IBMPlexSans-Medium',
    color: 'gray'
  },
  button: {
    backgroundColor: '#1062FE',
    color: '#FFFFFF',
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 16,
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
    marginTop: 15
  },
  emptyListView: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyListText: {
    fontFamily: 'IBMPlexSans-Bold',
    color: '#999999',
    fontSize: 16
  }
});

const PostSearch = function ({ navigation }) {

  const clearItem = { userID: userID(), description: '' }
  const [item, setItem] = React.useState(clearItem);
  
  const sendItem = () => {
    const payload = {
      ...item
    };

    replypost(payload)
      .then(() => {
        Alert.alert('Thank you!', 'You reply has been added to the wall', [{text: 'OK'}]);
        setItem({ ...clearItem });
      })
      .catch(err => {
        console.log(err);
        Alert.alert('ERROR', 'Please try again. If the problem persists contact an administrator.', [{text: 'OK'}]);
      });
  };
  const Reply = (props) => {
    return (
      <TouchableOpacity style={styles.itemTouchable}
          onPress={() => { navigation.navigate('Reply', { item: props }); }}>
        <Text style={styles.itemDescription}>{props.description}</Text>
      </TouchableOpacity>
    );
  };

  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    navigation.addListener('focus', () => {
       postsearch()
        .then(setItems)
        .catch(err => {
          console.log(err);
          Alert.alert('ERROR', 'Please try again. If the problem persists contact an administrator.', [{text: 'OK'}]);
        });
    })
  }, []);

  const Item = (props) => {
    return (
	
      <TouchableOpacity style={styles.itemTouchable}
          onPress={() => {sendItem}}>
        <Text style={styles.itemDescription}>{props.description}</Text>
      </TouchableOpacity>
    );
  };
 
  
  
  if (items.length > 0 && item.length >0) {
    return (
     <View>
      <FlatList style={styles.flatListView}
        data={items}
        renderItem={({ item }) => <Item {...item} />}
	keyExtractor={item => item.id || item['_id']}
	renderItem={({ reply }) => 
	<View>
	<Reply {...reply} />
        <Text style={styles.label}>Reply</Text>
      	      <TextInput
               style={styles.textInput}
               value={reply.description}
               onChangeText={(t) => setItem({ ...reply, description: t})}
               onSubmitEditing={sendItem}
               returnKeyType='send'
               enablesReturnKeyAutomatically={true}
               placeholder='e.g.,post is very useful'
             />
        {
        <TouchableOpacity onPress={sendItem}>
           <Text style={styles.button}>Reply</Text>
        </TouchableOpacity>
        }
        </View>
        }
        keyExtractor={reply => reply.id || reply['_id']}
      />
      
   </View>
    )
  } else if (items.length > 0 ) {
    return (
      <FlatList style={styles.flatListView}
        data={items}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={item => item.id || item['_id']}
      />
    )
  } else {
    return (
      <View style={styles.emptyListView}>
        <Text style={styles.emptyListText}>Info Wall have no post listed</Text>
      </View>
    )
  }
};

export default PostSearch;
