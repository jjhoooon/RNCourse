import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile';

function renderCategoryItem(itemData) { //itemData -> 객체 배열?
    return (
        <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
    )
}

const CategoriesScreen = () => {
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
