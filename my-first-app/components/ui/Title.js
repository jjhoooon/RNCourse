import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Colors from '../../constants/color';

const Title = ({ children }) => {
    return (
        <Text style={styles.title}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'open-sans-bold',
        // fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
    }
})

export default Title;
