import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ExpensesSummary = ({ expenses, periodName }) => {
    const expensesSum = expenses.reduce((sum, expense) => sum + expense.amount, 0)

    return (
        <View>
            <Text>{periodName}</Text>
            <Text>${expensesSum.toFixed(2)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default ExpensesSummary;
