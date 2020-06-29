import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import Colors from '../constants/Colors';

const CategoryMealScreen = props => {

    const renderMealItem = itemData => {
        return (
            <View>
                <Text>{itemData.item.title}</Text>
            </View>
        );
    }

    const catId = props.navigation.getParam('categoryId');

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) > -1);

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return (
        <View style={styles.screen}>
            <FlatList data={displayedMeals} 
            keyExtractor={(item, index) => item.id}
            renderItem={renderMealItem}>



            </FlatList>

            {/* <Text>The Category Meal Screen!</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title='Go to Meal Details !' onPress={
                () => {
                    //props.navigation.push('CategoryMeals')
                    props.navigation.navigate({ routeName: 'MealDetail' })
                }} />

            <Button title='Go to Categories !' onPress={
                () => {
                    props.navigation.push('Categories')
                    //props.navigation.navigate({ routeName: 'MealDetail' })

                }} />
            <Button title='Go Back'
                onPress={() =>
                    props.navigation.goBack()
                    // props.navigation.pop()
                }
            /> */}
        </View>
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
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealScreen;

