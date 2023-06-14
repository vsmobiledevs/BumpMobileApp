import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { HP, WP, colors, size } from '../../shared/exporter';
import { Icons } from '../../assets/icons';

function SubscriptionPlanCard() {
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={{}}>
                    <Text style={styles.plan}>Standard Plan</Text>
                    <View style={styles.month}>
                        <Text style={styles.price}>1.99$ /</Text>
                        <Text style={styles.title}>Month</Text>
                    </View>
                </View>

                <View style={{ width: WP(50) }}>
                    <Text style={styles.title}>You Get</Text>
                    <View style={styles.benifits}>
                        {Icons.greenTick}
                        <Text style={styles.text}>Tens of thousands of episodes and movies</Text>
                    </View>
                    <View style={styles.benifits}>
                        {Icons.greenTick}
                        <Text style={styles.text}>Download to watch later</Text>
                    </View>
                    <View style={styles.benifits}>
                        {Icons.greenTick}
                        <Text style={styles.text}>No ads, just fun</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: HP(2),
        borderColor: colors.g24,
        borderWidth: HP(0.1),
        padding: HP(1.5),
        borderRadius: HP(2),
        marginVertical: HP(1)
    },
    month: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: HP(1)
    },
    benifits: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: HP(1)
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: HP(1)
    },
    text: {
        fontSize: size.xtiny,
        marginStart: HP(1),
        color: colors.b1
    },
    plan: {
        fontSize: size.xxsmall, color: colors.b1
    },
    price: {
        fontSize: size.large, color: colors.b1, fontWeight: 'bold'
    },
    title: {
        color: colors.b1
    }
});

export { SubscriptionPlanCard };
