import React from 'react';
//import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PickerSelect from 'react-native-picker-select';
import { CheckedIcon, UncheckedIcon } from '../images/svg-icons';
import Geolocation from '@react-native-community/geolocation';
import { SectionList, Button,  StyleSheet,  Image,  TouchableOpacity,  Text,  View,  ShadowPropTypesIOS ,Linking  } from 'react-native';
//import { add, userID } from '../lib/utils'

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

