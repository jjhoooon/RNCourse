import React from 'react';
import { View, StyleSheet } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';


const RecentExpenses = () => {
    return (
        <View>
            <ExpensesOutput expensesPeriod="Last 7 Days" />
        </View>
    );
}

const styles = StyleSheet.create({})

export default RecentExpenses;
