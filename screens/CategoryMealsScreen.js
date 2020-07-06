import React from 'react';
//import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
//import Colors from '../constants/Colors';
//import MealItem from '../components/MealItem';
import MealList from '../components/MealList';

const CategoryMealScreen = props => {



    const catId = props.navigation.getParam('categoryId');

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) > -1);

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return (
        <MealList
            listData={displayedMeals}
            navigation={props.navigation}
        />
    );
};

CategoryMealScreen.navigationOptions = navigationData => {
    console.log(navigationData);
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title
        /*  headerStyle: {
             backgroundColor: Platform.OS ==='android' ? Colors.primaryColor : 'white'
         },
         headerTintColor: Platform.OS ==='android' ? 'white' : Colors.primaryColor */
    };
};


export default CategoryMealScreen;

