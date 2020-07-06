import React from 'react';
//import {View, Text, StyleSheet} from 'react-native';
import MealList from '../components/MealList';
import {MEALS} from '../data/dummy-data';

const FavourtiesScreen = props => {

const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
console.log(favMeals);
    return (
           <MealList listData={favMeals} 
           navigation={props.navigation} />     
    );
};

FavourtiesScreen.navigationOptions = {
    headerTitle: 'Your Favourites'
}

export default FavourtiesScreen;

