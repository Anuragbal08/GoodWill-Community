import 'react-native-gesture-handler';
import * as React from 'react';
import {  Button,  StyleSheet,  Image,  TouchableOpacity,  Text,  View,  ShadowPropTypesIOS } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import LoadingScreen from './src/screens/loading';
import Chat from './src/screens/chat';
//import AddEvents from './src/screens/events-add';
import PostSearch from './src/screens/Info-wall';
import Post from './src/screens/post';
import MyResources from './src/screens/resources-my';
import SearchResources from './src/screens/resources-search';
import AddEvents from './src/screens/events-add';
import AllEvents from './src/screens/events-all';
import AddResource from './src/screens/resource-add';
import EditResource from './src/screens/resource-edit';
import AddService from './src/screens/addservices';
import Helpline from './src/screens/helpline';

const Stack = createStackNavigator();

const HomeStackOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <Button onPress={() => navigation.navigate('Chat')} title="   Chat  " />
    ),
  };
};
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

{

  /*
const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
​
  if (isLoading) {
    return <LoadingScreen />;
  } else {
    return (
      <NavigationContainer>
        <HomeStackLayout/>
      </NavigationContainer>
    );
  }
};
*/
}

{
  /* export default App; */
}

const HomeScreen = ({navigation}) => (
  <View>
    <Image
      style={{width: '100%'}}
      source={require('./src/images/banner.png')}
    />

    <View style={styles.container}>
      <View style={styles.imageRow}>
        <TouchableOpacity
          onPress=
          {() => {
            navigation.navigate('Chat');
          }}>
          <View style={{alignItems: 'center'}}>
            <Image source={require('./src/images/notice.png')} />
            <Text>Notice</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress=
          {() => {
            navigation.navigate('AddEvents');
          }}>
          <View style={{alignItems: 'center'}}>
            <Image source={require('./src/images/events.png')} />
            <Text>Events</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress=
          {() => {
            navigation.navigate('Post');
          }}>
          <View style={{alignItems: 'center'}}>
            <Image source={require('./src/images/discussion.png')} />
            <Text>Discussions</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.imageRow}>
      <TouchableOpacity
          onPress=
          {() => {
            navigation.navigate('Helpline');
          }}>
          <View style={{alignItems: 'center'}}>
            <Image source={require('./src/images/helpline.png')} />
            <Text>Helpline</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress=
          {() => {
            navigation.navigate('AddService');
          }}>
          <View style={{alignItems: 'center'}}>
            <Image source={require('./src/images/localservices.png')} />
            <Text>Local Services</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress=
          {() => {
            navigation.navigate('MyResources');
          }}>
          <View style={{alignItems: 'center'}}>
            <Image source={require('./src/images/donations.png')} />
            <Text>Donate</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.imageRow}>
      <TouchableOpacity
          onPress=
          {() => {
            navigation.navigate('Chat');
          }}>
          <View style={{alignItems: 'center'}}>
            <Image source={require('./src/images/members.png')} />
            <Text>Members</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress=
          {() => {
            navigation.navigate('Chat');
          }}>
          <View style={{alignItems: 'center'}}>
            <Image source={require('./src/images/groups.png')} />
            <Text>Groups</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress=
          {() => {
            navigation.navigate('SearchResources');
          }}>
          <View style={{alignItems: 'center'}}>
            <Image source={require('./src/images/search.png')} />
            <Text>Search</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingScreen">
        <Stack.Screen name="Home" component={HomeScreen} options={HomeStackOptions} />
        <Stack.Screen name="AddEvents" component={AddEvents} />
        <Stack.Screen name="PostSearch" component={PostSearch} />
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="MyResources" component={MyResources} />
        <Stack.Screen name="SearchResources" component={SearchResources} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Helpline" component={Helpline} />
        <Stack.Screen name="AddService" component={AddService} />   
      </Stack.Navigator>
    </NavigationContainer>
  );
}
