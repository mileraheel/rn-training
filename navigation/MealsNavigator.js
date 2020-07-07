import React from 'react';
import { Text, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavouritesScreen';
import { Ionicons } from '@expo/vector-icons';
import FilterScreen from '../screens/FiltersScreen';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import FavourtiesScreen from '../screens/FavouritesScreen';

const defaultStackNavOptions = {
    headerTitle: 'A Screen',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
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
}, {
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
            tabBarColor: Colors.primaryColor,
            tabBarLabel: Platform.OS === 'android' ? 
            <Text style={{fontFamily:'open-sans-bold'}} >Meals</Text> : 'Meal'
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return (<Ionicons name='ios-star' size={25}
                    color={tabInfo.tintColor} />);
            },
            tabBarColor: Colors.accentColor,
            tabBarLabel: Platform.OS === 'android' ? 
            <Text style={{fontFamily:'open-sans-bold'}} >Favorites</Text> : 'Favorites'
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
            labelStyle: {
                fontFamily:'open-sans'
            },
            activeTintColor: Colors.accentColor
        }
    }
    );

const FiltersNavigator = createStackNavigator({
    Filters: FilterScreen
}, {
    /* navigationOptions: {
        drawerLabel: 'Filters!!!!'
    }, */
    defaultNavigationOptions: defaultStackNavOptions
}
);

const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
});

export default createAppContainer(MainNavigator);
