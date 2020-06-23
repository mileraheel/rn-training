import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight
    , TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native';

const GoalItem = props => {
    return (
    <TouchableOpacity  onPress={props.onDelete.bind(this, props.id)}>
        <View style={styles.listItem} >  
            <Text >{props.title}</Text>
        </View>
    </TouchableOpacity>

 // <TouchableHighlight  onPress={props.onDelete}>
   //     <View style={styles.listItem} >  
     //       <Text >{props.title}</Text>
       // </View>
  //</TouchableHighlight>

 // <TouchableNativeFeedback  onPress={props.onDelete}>
  //      <View style={styles.listItem} >  
  //          <Text >{props.title}</Text>
   //     </View>
  //</TouchableNativeFeedback>

    //<TouchableWithoutFeedback  onPress={props.onDelete}>
      //  <View style={styles.listItem} >  
        //    <Text >{props.title}</Text>
       // </View>
  //</TouchableWithoutFeedback>

    );
};

const styles = StyleSheet.create({
    listItem: {
      padding:10,
      marginVertical:10,
      backgroundColor: '#ccc',
      borderColor:'black',
      borderWidth:1
    }
  
  });
  

export default GoalItem;