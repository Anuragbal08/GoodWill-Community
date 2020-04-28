import React from 'react';
//import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PickerSelect from 'react-native-picker-select';
import { CheckedIcon, UncheckedIcon } from '../images/svg-icons';
import Geolocation from '@react-native-community/geolocation';
import { SectionList, Button,  StyleSheet,  Image,  TouchableOpacity,  Text,  View,  ShadowPropTypesIOS ,Linking  } from 'react-native';

//import { add, userID } from '../lib/utils'
/*
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '90%',
    padding: 20,
    fontWeight: 'bold',
    backgroundColor: 'white',
    justifyContent: 'center',
    fontSize: 40,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 1  ,
    paddingRight: 10,
    paddingBottom: 1,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'white',
  },
  item: {
    paddingTop: 2,
    paddingLeft: 1  ,
    paddingRight: 10,
    paddingBottom: 1,
    fontSize: 20,
    backgroundColor: 'white',
  },
})




const Helpline = function ({ navigation }) {
  


return (

//<View style={styles.splitView}>
//return(
  <View style={styles.container}>
  
  <Text 
          onPress={() => {
            //on clicking we are going to open the URL using Linking
            Linking.openURL('https://www.who.int/emergencies/diseases/novel-coronavirus-2019');
          }}>
          Click Here for -WHO Website
          </Text>
          <Text
          onPress={() => {
            //on clicking we are going to open the URL using Linking
            Linking.openURL('https://www.mohfw.gov.in/');
          }}>
          Click Here for -MOHFW Website
          </Text>

  <SectionList
    sections={[
      {title: 'Police -No', data: [' 100']},
      {title: 'Ambulance -No', data: [' 101', ' 111']},
      {title:'Covid-19 helpdesk',data: [' +91 20 26127394']},
    ]}
    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
    keyExtractor={(item, index) => index}
  />


      </View>


 );
};



export default Helpline;

*/

const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF'
  },
  scroll: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 25,
    paddingTop: 75
  },
  image: {
    alignSelf: 'flex-start',
    height: '20%',
    width:'50%',
    resizeMode: 'contain'
  },
  title: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 36,
    color: '#323232',
    paddingBottom: 15
  },
  subtitle: {
    fontFamily: 'IBMPlexSans-Light',
    fontSize: 24,
    color: '#323232',
    textDecorationColor: '#D0E2FF',
    textDecorationLine: 'underline',
    paddingBottom: 5,
    paddingTop: 20
  },
  content: {
    fontFamily: 'IBMPlexSans-Light',
    color: '#323232',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16
  },
  buttonGroup: {
    flex: 1,
    paddingTop: 15,
    width: 175
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
  container: {
    flexDirection: 'column',
    height: '90%',
    padding: 20,
    fontWeight: 'bold',
    backgroundColor: 'white',
    justifyContent: 'center',
    fontSize: 40,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 1  ,
    paddingRight: 10,
    paddingBottom: 1,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'white',
  },
  item: {
    paddingTop: 2,
    paddingLeft: 1  ,
    paddingRight: 10,
    paddingBottom: 1,
    fontSize: 20,
    backgroundColor: 'white',
  },
});


const Helpline = function ({ navigation }) {
return (

<View style={styles.center}>
    <ScrollView style={styles.scroll}>
  
      <Text style={styles.subtitle}>Important Numbers </Text>
    
      <Text style={styles.content}>
       Local Police -  100
      </Text>
      <Text style={styles.content}>
       Hospital -101 
      </Text>
      <Text style={styles.content}>
      Covid-19 helpdesk -  +91 20 26127394
      </Text>
      <Text style={styles.subtitle}>Important Link </Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.mohfw.gov.in/')}>
          <Text style={styles.button}>Gov of India website</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.who.int/emergencies/diseases/novel-coronavirus-2019')}>
          <Text style={styles.button}>WHO website</Text>
        </TouchableOpacity>
      </View>
       


    </ScrollView>
  </View>


  );
};


export default Helpline;
