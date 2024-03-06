import React, { useLayoutEffect } from 'react';
import { View, StyleSheet, FlatList, Platform } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const MealsOverviewScreen = ({ route, navigation }) => { // navigator의 Screen은 {navigation, route} 를 props로 제공하는데 각각 어떤 정보를 담고있는가?
    const catId = route.params.categoryId

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0
    })

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(
            (category) => category.id === catId
        ).title

        navigation.setOptions({
            title: categoryTitle,
        })
    }, [catId, navigation])

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
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
});

export default MealsOverviewScreen;
