/* eslint-disable react/prop-types */
import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { HP, WP, colors } from '../../shared/exporter';

function WithdrawButton({ bank, name, rightIcon }) {
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.withdrawButton}>
            <View style={styles.inner}>
                <View style={{ left: HP(2) }}>
                    {bank}
                </View>
                <Text style={styles.withdrawl}>{name}</Text>
                {rightIcon}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    withdrawButton: {
        padding: HP(1),
        borderRadius: HP(5),
        borderWidth: HP(0.1),
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: colors.g30,
        justifyContent: 'center',
        marginVertical: HP(0.5)
    },
    withdrawl: {
        color: colors.g19,
        fontSize: HP(1.6)
    },
    inner: {
        width: WP(72),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});

export { WithdrawButton };
