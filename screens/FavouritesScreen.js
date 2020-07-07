import React from 'react';
//import {View, Text, StyleSheet} from 'react-native';
import MealList from '../components/MealList';
import {MEALS} from '../data/dummy-data';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton';

const FavourtiesScreen = props => {

const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
console.log(favMeals);
    return (
           <MealList listData={favMeals} 
           navigation={props.navigation} />     
    );
};

FavourtiesScreen.navigationOptions = (navData) => {
    return {
    headerTitle: 'Your Favourites',
    /* headerStyle: {
        backgroundColor: Platform.OS ==='android' ? Colors.primaryColor : 'white'
    },
    headerTintColor: Platform.OS ==='android' ? 'white' : Colors.primaryColor */
    headerLeft:<HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Menu' iconName='ios-menu' onPress={()=> {
            navData.navigation.toggleDrawer()
        }}/>
         </HeaderButtons>
    }
}

export default FavourtiesScreen;

