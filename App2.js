import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  
  return (   
      <View style={{padding:50, flexDirection:'row', width:'80%', height:300,
            justifyContent:'space-between', alignItems:'stretch'}}>
        <View style={{backgroundColor:'red', 
                flex:1,
                //width:100, height:100,
                justifyContent:'space-around', alignItems:'center'}}>
          <Text>1</Text>
        </View>  
        <View style={{backgroundColor:'blue', 
                //width:100, height:100,
                flex:2,
                justifyContent:'center', alignItems:'center'}}>
          <Text>2</Text>
        </View>
        <View style={{backgroundColor:'green', 
                //width:100, height:100,
                //flex:2,
                justifyContent:'center', alignItems:'center'}}>
          <Text>3</Text>
        </View>
         
      </View>
  );

  }
