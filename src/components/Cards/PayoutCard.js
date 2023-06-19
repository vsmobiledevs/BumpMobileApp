/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HP, WP, colors } from '../../shared/exporter';

// create a component
function PayoutCard({ item }) {
    return (
        <View style={styles.container}>
            <Text style={styles.date}>{item.date}</Text>
            <View style={styles.button}>
                <Text style={styles.date}>{item.status}</Text>
            </View>
            <Text style={styles.date}>{item.orderNumber}</Text>
            <Text style={styles.date}>{item.amount}</Text>
        </View>
    );
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: HP(2)
    },
    button: {
        padding: HP(1),
        backgroundColor: colors.g31,
        borderRadius: HP(2),
        paddingVertical: WP(0.8),
    },
    date: {
        fontSize: HP(1.5),
        color: colors.g1
    }
});

export { PayoutCard };
