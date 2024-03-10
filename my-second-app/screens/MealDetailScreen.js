import { View, StyleSheet, Image, Text, ScrollView, Button } from 'react-native';
import { useLayoutEffect } from 'react';

import MealDetails from '../components/MealDetails';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import { MEALS } from '../data/dummy-data';
import IconButton from '../components/IconButton';


const MealDetailScreen = ({ route, navigation }) => { //route.params를 통해 screen 어디서나  데이터값 참조가능.
    const mealId = route.params.mealId

    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    function headerButtonPressHandler() {

    }

    // navigation.setOptions 부수효과 이므로 useEffect 필요, 아니면 화면 깜빡거림.
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => { //JSX코드 반환
                return (
                    <IconButton
                        icon="star"
                        color="white"
                        onPress={headerButtonPressHandler}
                    />
                )
            }
        })
    }, [navigation, headerButtonPressHandler])


    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailText: {
        color: 'white'
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%'
    },
})

export default MealDetailScreen;
