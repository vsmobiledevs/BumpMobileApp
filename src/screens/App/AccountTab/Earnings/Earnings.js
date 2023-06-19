/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import EarningTabs from '../../../../navigations/earningTabs';
import { HP, colors } from '../../../../shared/exporter';
import { AuthHeader } from '../../../../components';
import { Icons } from '../../../../assets/icons';

export default function Earnings({ navigation }) {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <AuthHeader
                left={Icons.leftArrow}
                onPressLeft={() => navigation.goBack()}
            />
            <View style={styles.inner}>
                <EarningTabs />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.w1,
    },
    inner: {
        flex: 1,
        marginTop: HP(2)
    }
});
