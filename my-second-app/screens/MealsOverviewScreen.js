import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const MealsOverviewScreen = ({ route }) => { // navigator의 Screen은 {navigation, route} 를 props로 제공하는데 각각 어떤 정보를 담고있는가?
    const catId = route.params.categoryId

    return (
        <View style={styles.container}>
            <Text>Meals Overview Screen - {catId}</Text>
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
