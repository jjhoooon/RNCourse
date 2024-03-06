import React from 'react';
import { View, StyleSheet, Pressable, Image, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import MealDetails from './MealDetails';

const MealItem = ({ id, title, imageUrl, affordability, complexity, duration }) => {
    const navigation = useNavigation()

    function selectMealItemHandler() {
        navigation.navigate('MealDetail', {
            mealId: id,
        })
    }

    return (
        <View style={styles.MealItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
                onPress={selectMealItemHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>{duration}m</Text>
                        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    }
})

export default MealItem;
