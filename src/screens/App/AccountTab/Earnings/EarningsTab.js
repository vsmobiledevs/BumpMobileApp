/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'
import { Divider } from 'react-native-paper';
import { HP, WP, colors } from '../../../../shared/exporter';
import { Icons } from '../../../../assets/icons';
import { AppButton, WithdrawButton } from '../../../../components';
import { WithdrawButtons } from '../../../../shared/utilities/staticInfo';

// create a component
function EarningsTab() {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedData, setSelectedDate] = useState(null);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setSelectedDate(moment(date).format('ll'))
        hideDatePicker();
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.innerContainer}>
                    <TouchableOpacity onPress={showDatePicker} style={styles.dateContainer}>
                        {Icons.previous}
                        <Text style={styles.date}>{selectedData || moment(new Date()).format('ll')}</Text>
                        {Icons.next}
                    </TouchableOpacity>

                    {/* withdrawl amount detail */}
                    <View style={styles.withdrawlContainer}>
                        <View>
                            <Text style={styles.withdrawl}>Available for withdrawal </Text>
                            <Text style={styles.price}>$103.00 </Text>
                        </View>

                        <View>
                            <Text style={styles.withdrawl}>Earning in March </Text>
                            <Text style={[styles.price, { color: colors.b1 }]}>$103.00 </Text>
                        </View>
                    </View>

                    {/* maximise earnigs section */}
                    <View style={[styles.withdrawlContainer, { marginTop: HP(5) }]}>
                        <View>
                            <Text style={styles.withdrawl}>Maximize your earnings</Text>
                            <AppButton
                                leftIcon
                                title="Maximize earnings"
                                buttonContainer={styles.buttonContainer}
                                buttonStyle={styles.buttonStyle}
                                txtStyle={styles.buttonText}
                                touchableOpacity={{
                                    // onPress: () => handleSubmit(),
                                }}
                            />
                        </View>

                        <View>
                            <Text style={styles.withdrawl}>Pending  Clearance</Text>
                            <Text style={[styles.price, { color: colors.b1, marginStart: HP(2) }]}>$0.00</Text>
                        </View>
                    </View>
                    <Divider />

                    {/* withdrawal buttons */}
                    <View>
                        <Text style={styles.withdrawlText}>WITHDRAW to</Text>
                        {WithdrawButtons.map((item) => (
                            <WithdrawButton
                                key={item?.id}
                                bank={item?.bank}
                                name={item?.bankName}
                                rightIcon={item?.rightIcon}
                            />
                        ))}
                    </View>
                </View>

                {/* date time picker modal */}
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    innerContainer: {
        width: WP(90),
        marginTop: HP(2),
        alignSelf: 'center',
        borderColor: colors.g30,
        backgroundColor: colors.white,
        borderWidth: HP(0.1),
        borderRadius: HP(2),
        paddingBottom: HP(4),
        padding: HP(2)
    },
    dateContainer: {
        width: WP(28),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'flex-end'
    },
    date: {
        color: colors.b1,
    },
    withdrawlContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: HP(2)
    },
    price: {
        marginTop: HP(1),
        color: colors.green,
        fontWeight: 'bold'
    },
    withdrawl: {
        color: colors.g19,
    },
    buttonContainer: {
        width: WP(40),
        alignSelf: 'flex-start',
    },
    buttonStyle: {
        borderRadius: WP(2),
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: WP(3),
    },
    buttonText: {
        marginStart: HP(1),
        fontWeight: '500',
        fontSize: HP(1.6)
    },
    withdrawlText: {
        color: colors.b1,
        fontSize: HP(2),
        fontWeight: 'bold',
        marginVertical: HP(3)
    },

    withdrawButton: {
        justifyContent: "space-between",
        alignItems: 'center',
        borderColor: colors.g30,
        borderWidth: HP(0.1),
        flexDirection: 'row',
        padding: HP(1),
        borderRadius: HP(6)
    }

});

export { EarningsTab }