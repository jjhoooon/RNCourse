import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile';


const CategoriesScreen = ({ navigation }) => {

    function renderCategoryItem(itemData) { //itemData -> 객체 배열?
        function pressHandler() {
            navigation.navigate('MealsOverview')
        }

        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        )
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );
}

const styles = StyleSheet.create({})

export default CategoriesScreen;
