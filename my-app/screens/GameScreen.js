import { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum
    }
}

const GameScreen = ({ userNumber }) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    return (
        <View style={styles.screens}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or lower?</Text>
                {/* + - */}
            </View>
            {/* Log Rounds */}
        </View>
    );
}

const styles = StyleSheet.create({
    screens: {
        flex: 1,
        padding: 24,
    }
})

export default GameScreen;
