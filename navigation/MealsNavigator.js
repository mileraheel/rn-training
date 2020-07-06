import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavouritesScreen';
import { Ionicons } from '@expo/vector-icons';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import FavourtiesScreen from '../screens/FavouritesScreen';

const defaultStackNavOptions = {
        headerTitle: 'A Screen',
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor

}

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories'
        }
    },
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
}, {
    //initialRouteName: 'MealDetail',
    defaultNavigationOptions: defaultStackNavOptions
}
);

const FavNavigator = createStackNavigator({
    Favorites: FavourtiesScreen,
    MealDetail: MealDetailScreen
},{
    defaultNavigationOptions: defaultStackNavOptions
}
);

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarLabel: 'Categories',
            tabBarIcon: tabInfo => {
                return (<Ionicons name='ios-restaurant' size={25}
                    color={tabInfo.tintColor} />);
            },
            tabBarColor:Colors.primaryColor
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return (<Ionicons name='ios-star' size={25}
                    color={tabInfo.tintColor} />);
            },
            tabBarColor:Colors.accentColor
        }
    }
}

const MealsFavTabNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(
    tabScreenConfig, {
        activeTintColor: Colors.accentColor,
        shifting: true
    }
)
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            activeTintColor: Colors.accentColor
        }
    }
    );



export default createAppContainer(MealsFavTabNavigator);
