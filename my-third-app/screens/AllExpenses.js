import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

const AllExpenses = () => {
    return (
        <View>
            <ExpensesOutput expensesPeriod="Total" />
        </View>
    );
}

const styles = StyleSheet.create({})

export default AllExpenses;
