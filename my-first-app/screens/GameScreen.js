import { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Alert, FlatList } from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';


import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import InstructionText from '../components/ui/InstructionText';
import GuessLogItem from '../components/game/GuessLogItem';
import Card from '../components/ui/Card';
import Colors from '../constants/color';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum
    }
}

let minBoundary = 1
let maxBoundary = 100

const GameScreen = ({ userNumber, onGameOver }) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [guessRounds, setGuessRounds] = useState([initialGuess])

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver])

    useEffect(() => {
        minBoundary = 1
        maxBoundary = 100
    }, [])

    function nextGuessHandler(direction) {
        //direction => 'lower', 'greater'
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie!", "You know that this is wrong...", [
                { text: 'Sorry!', style: 'cancel' }
            ])
            return
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess
        } else {
            minBoundary = currentGuess + 1
        }

        const newRndNumber = generateRandomBetween(
            minBoundary,
            maxBoundary,
            currentGuess
        )
        setCurrentGuess(newRndNumber)
        setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds])

        console.log(guessRounds)
        console.log(guessRoundsListLength)
    }

    const guessRoundsListLength = guessRounds.length

    return (
        <View style={styles.screens}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.InstructionText}>Higher or lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <MaterialIcons name="remove-circle" size={24} color={Colors.accent500} />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Entypo name="circle-with-plus" size={24} color={Colors.accent500} />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.listContainer}>
                {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) => {
                        <GuessLogItem
                            roundNumber={guessRoundsListLength - itemData.index}
                            guess={itemData.item}
                        />
                    }}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screens: {
        flex: 1,
        padding: 24,
    },
    InstructionText: {
        marginBottom: 12,
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
    listContainer: {
        flex: 1,
        padding: 16
    }
})

export default GameScreen;
