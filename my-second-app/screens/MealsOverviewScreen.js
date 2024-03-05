import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { MEALS } from '../data/dummy-data';
import MealItem from '../components/mealItem';

const MealsOverviewScreen = ({ route }) => { // navigator의 Screen은 {navigation, route} 를 props로 제공하는데 각각 어떤 정보를 담고있는가?
    const catId = route.params.categoryId

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0
    })

    function renderMealItem(itemData) {
        const item = itemData.item

        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        }
        return (
            <MealItem {...mealItemProps} />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})

export default MealsOverviewScreen;
