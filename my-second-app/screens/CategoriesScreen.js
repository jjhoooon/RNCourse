import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

import { CATEGORIES } from '../data/dummy-data'


const CategoriesScreen = ({ navigation }) => {

    function renderCategoryItem(itemData) { //itemData -> 객체 배열?
        function pressHandler() {
            navigation.navigate('MealsOverview', { //navigate()의 두번째 params -> 어떤 정보를 넘길지
                categoryId: itemData.item.id
            })
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
