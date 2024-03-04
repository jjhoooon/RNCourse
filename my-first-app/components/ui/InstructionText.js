import React from 'react';
import { Text, StyleSheet } from 'react-native';

import Colors from '../../constants/color';

const InstructionText = ({ children, style }) => {
    return (
        <Text style={[styles.InstructionText, style]}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    InstructionText: {
        color: Colors.accent500,
        fontSize: 24,
        fontFamily: 'open-sans'
    }
})

export default InstructionText;
