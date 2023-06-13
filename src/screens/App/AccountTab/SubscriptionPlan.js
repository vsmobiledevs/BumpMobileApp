import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { HP, WP, colors, size } from '../../../shared/exporter';
import { AuthHeader } from '../../../components';
import { Icons } from '../../../assets/icons';
import CustomSwitch from '../../../components/SwitchButton/CustomSwitch';

function SubscriptionPlan({ navigation }) {
    const onSelectSwitch = (val) => {
        console.log(val);
    };

    return (
        <SafeAreaView style={styles.container}>
            <AuthHeader
                center="Bump Dark Web"
                left={Icons.leftArrow}
                onPressLeft={() => navigation.goBack()} />

            {/* title and heading container */}
            <View style={styles.textContainer}>
                <Text style={styles.title}>Choose Subscription Plan</Text>
                <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </Text>
            </View>

            <CustomSwitch
                customStyle={styles.buttonsContainer}
                selectionMode={1}
                color={colors.p7}
                color2={colors.p7}
                roundCorner
                option1="Monthly"
                option2="Yearly"
                onSelectSwitch={onSelectSwitch} />
        </SafeAreaView>
    );
}

export default SubscriptionPlan;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.w1,
    },
    textContainer: {
        width: WP(80),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    title: {
        fontSize: size.h6,
        fontWeight: 'bold',
        color: colors.b1
    },
    description: {
        fontSize: size.tiny,
        color: colors.g29,
        textAlign: 'center',
        marginVertical: HP(1)
    },
    buttonsContainer: {
        width: WP(75),
        height: HP(5),
        flexDirection: 'row',
        borderRadius: HP(4),
        alignSelf: 'center',
        borderColor: colors.g24,
        borderWidth: HP(0.1),
        marginVertical: HP(3),
    },
});
