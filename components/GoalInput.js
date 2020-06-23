import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet, Modal, KeyboardAvoidingView, Platform} from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        //props.onAddGoal(null);
        setEnteredGoal('');
    };

    return(
        <Modal visible={props.visible} animationType="slide"> 
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.inputContainer}>
                <TextInput placeholder="Course Goal"
                    style={styles.input} 
                    onChangeText={goalInputHandler}
                    value={enteredGoal} 
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color='red' onPress={props.onCancel}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD"  onPress={addGoalHandler}/>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    ); 
 
};
   const styles = StyleSheet.create({
   inputContainer:{
       flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        width:'80%',
        borderColor:'black',
        borderWidth:1,
        padding:10,
        marginBottom:10
    },
    buttonContainer: {
        flexDirection:'row',
        justifyContent:'space-around',
        width:'60%'
    },
    button: {
        width:'40%'
    }
});


export default GoalInput;