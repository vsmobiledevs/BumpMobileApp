/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icons } from '../../assets/icons';
import { HP, WP, colors } from '../../shared/exporter';
import { BankDetailCard } from './BankDetailCard';

function SelectPaymentMethod({ item, onPressCard }) {
    return (
        <View>
            <TouchableOpacity onPress={onPressCard} activeOpacity={0.8} style={styles.innerContainer}>
                <View style={styles.selectorContainer}>
                    <View style={styles.selector}>
                        {item?.icon}
                        <Text style={styles.text}>{item?.title}</Text>
                    </View>
                    <TouchableOpacity style={styles.icon} activeOpacity={0.8}>
                        {item?.isUp ? Icons.up : Icons.down}
                    </TouchableOpacity>
                </View>

                {item?.isUp && <BankDetailCard />}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    innerContainer: {
        width: WP(90),
        backgroundColor: colors.white,
        borderRadius: HP(2),
        padding: HP(4),
        marginTop: HP(2),
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    selectorContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: colors.b1,
        marginStart: HP(2)
    },
    selector: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        left: HP(1.5)
    }
});

export { SelectPaymentMethod };
