import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { HP, WP, colors, size } from '../../../shared/exporter';
import { Icons } from '../../../assets/icons';
import { AppButton, AuthHeader, SubscriptionPlanCard } from '../../../components';
import CustomSwitch from '../../../components/SwitchButton/CustomSwitch';

function SubscriptionPlan({ navigation }) {
    const [selectedMode, setSelectionMode] = useState(1)

    // select browsing type
    const onSelectSwitch = (val) => {
        setSelectionMode(val)
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <AuthHeader
                    center="Bump Dark Web"
                    left={Icons.leftArrow}
                    onPressLeft={() => navigation.goBack()} />

                {/* title and heading container */}
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Choose Subscription Plan</Text>
                    <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </Text>
                </View>

                {/* switch for selecting subscription plan */}
                <CustomSwitch
                    customStyle={styles.buttonsContainer}
                    option1CustomStyle={[styles.leftButtonStyle, { backgroundColor: selectedMode === 1 ? colors.p7 : colors.w1 }]}
                    option2CustomStyle={[styles.rightButtonStyle, { backgroundColor: selectedMode === 1 ? colors.w1 : colors.p7 }]}
                    selectionMode={selectedMode}
                    option1="Monthly"
                    option2="Yearly"
                    roundCorner
                    onSelectSwitch={onSelectSwitch}
                    selectionColor={colors.p4}
                    color={colors.orange}
                    color2={colors.p4}
                />

                {/* subscription plans */}
                <SubscriptionPlanCard />
                <SubscriptionPlanCard />
                <SubscriptionPlanCard />
                <AppButton
                    title="Ok"
                    touchableOpacity={{
                        // onPress: () => handleSubmit(),
                    }}
                />

            </ScrollView>
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
        alignSelf: 'center',
        marginTop: HP(3)
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
        padding: HP(0.5)
    },
    leftButtonStyle: {
        height: HP(4),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: HP(2)
    },
    rightButtonStyle: {
        height: HP(4),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: HP(2)
    }
});
