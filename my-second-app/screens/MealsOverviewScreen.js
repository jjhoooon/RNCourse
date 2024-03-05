import React from 'react';
import { View, StyleSheet } from 'react-native';

const MealsOverviewScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Meals OverView</Text>
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
