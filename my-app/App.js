import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

import StartGameScreens from './screens/StartGameScreens';


export default function App() {
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <StartGameScreens />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  }
});

