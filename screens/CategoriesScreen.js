import React from 'react';
import {
    View, Text, StyleSheet,
    Button, FlatList, TouchableOpacity,
    Platform
} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {

    const renderGridItem = itemData => {
        return (
            <CategoryGridTile title={itemData.item.title} 
            color={itemData.item.color}
            onSelect={
                () => props.navigation.navigate({
                    routeName: 'CategoryMeals',
                    params: {
                        categoryId: itemData.item.id
                    }
                })
            } />
        );
    };

    //  console.log(props);
    return (
        /*  <View style={styles.screen}>
             <Text>The Categoies Screen!</Text>
             <Button title='Go to Meals!' onPress={()=> {
                 props.navigation.navigate({routeName: 'CategoryMeals'});
                 //props.navigation.replace('CategoryMeals');
             }}/>
         </View> */

        <FlatList numColumns={2}
            //only for older versions , new pick ID auto // keyExtractor={(item, index)=> item.id}
            data={CATEGORIES} renderItem={renderGridItem} />
    );


};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories'
    /* headerStyle: {
        backgroundColor: Platform.OS ==='android' ? Colors.primaryColor : 'white'
    },
    headerTintColor: Platform.OS ==='android' ? 'white' : Colors.primaryColor */
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;

