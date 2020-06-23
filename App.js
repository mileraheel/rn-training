import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  console.log('Re rendering the component.');
  console.log(courseGoals);

  const addGoalHandler = goalTitle => {
   // console.log(enteredGoal);
    //setCourseGoals([...courseGoals, enteredGoal]);
    if (goalTitle.length === 0) {
      return;
    }
    setCourseGoals(currentGoals => [...currentGoals, 
      {id: Math.random().toString(), value: goalTitle}]);

      setIsAddMode(false);
    //  setCourseGoals([]);
    //courseGoals.map((goal) => console.log(goal));
    //console.log('Done.. cool');
  };

  const removeGoalHandler = goalId => {
    console.log('To be deleted : ' + goalId);
    console.log(courseGoals);
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
    console.log('inside delete method , ' + courseGoals);
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }
  return (   
      <View style={styles.screen}>
        <Button title="Add New Goal" onPress={()=> setIsAddMode(true)}/>
        <GoalInput visible={isAddMode}  onAddGoal={addGoalHandler}
          onCancel={cancelGoalAdditionHandler}
        />
        <FlatList keyExtractor={(item, index) => item.id}
            data={courseGoals} renderItem={itemData => 
            <GoalItem title={itemData.item.value} 
              id={itemData.item.id}
            onDelete={removeGoalHandler}/> 
        }/>
        
      </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:50
  },
  
  
  listItem: {
    padding:10,
    marginVertical:10,
    backgroundColor: '#ccc',
    borderColor:'black',
    borderWidth:1
  }

});
