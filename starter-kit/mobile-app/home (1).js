import React from 'react';
import {  StyleSheet,  View,  Image,  Text,  TouchableOpacity,  Button,  Linking,  ShadowPropTypesIOS,} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from './loading';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import AddEvents from './events-add';


const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '90%',
    padding: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  imageRow: {
    marginBottom: 100,
    padding: 20,
    height: '20%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});


const MasterStackLayout = () => (
  <Stack.Navigator>
    <Stack.Screen name="Events" component={AddEvents} />
  </Stack.Navigator>
);


const Home = ({navigation}) => (
  <View>
    <Image style={{width: '100%'}} source={require('../images/banner.png')} />

    <View style={styles.container}>
      <View style={styles.imageRow}>
        <TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <Image source={require('../images/notice.png')} />
            <Text>Notice</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>{
            navigation.navigate('<MasterStackLayout />');
          }}>
          <View style={{alignItems: 'center'}}>
            <Image source={require('../images/events.png')} />
            <Text>Events</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://developer.ibm.com/callforcode')
          }>
          <View style={{alignItems: 'center'}}>
            <Image source={require('../images/discussion.png')} />
            <Text>Discussions</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.imageRow}>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://developer.ibm.com/callforcode')
          }>
          <View style={{alignItems: 'center'}}>
            <Image source={require('../images/helpline.png')} />
            <Text>Helpline</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://developer.ibm.com/callforcode')
          }>
          <View style={{alignItems: 'center'}}>
            <Image source={require('../images/localservices.png')} />
            <Text>Local Services</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://developer.ibm.com/callforcode')
          }>
          <View style={{alignItems: 'center'}}>
            <Image source={require('../images/donations.png')} />
            <Text>Donate</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.imageRow}>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://developer.ibm.com/callforcode')
          }>
          <View style={{alignItems: 'center'}}>
            <Image source={require('../images/members.png')} />
            <Text>Members</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://developer.ibm.com/callforcode')
          }>
          <View style={{alignItems: 'center'}}>
            <Image source={require('../images/groups.png')} />
            <Text>Groups</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>{
            navigation.navigate('Chat');
          }}>
          <View style={{alignItems: 'center'}}>
            <Image source={require('../images/search.png')} />
            <Text>Search Items</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);


export default Home;
