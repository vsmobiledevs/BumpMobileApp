/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'
import { Divider } from 'react-native-paper';
import { HP, WP, colors } from '../../../../shared/exporter';
import { Icons } from '../../../../assets/icons';
import { PayoutsRecord } from '../../../../shared/utilities/staticInfo';
import { PayoutCard } from '../../../../components/Cards/PayoutCard';

// create a component
function PayoutTab() {
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
            <View style={styles.innerContainer}>
                <TouchableOpacity onPress={showDatePicker} style={styles.dateContainer}>
                    {Icons.previous}
                    <Text style={styles.date}>{selectedData || moment(new Date()).format('ll')}</Text>
                    {Icons.next}
                </TouchableOpacity>

                {/* status header */}
                <View style={styles.statusHeader}>
                    <Text style={styles.headerText}>Date</Text>
                    <Text style={styles.headerText}>Status</Text>
                    <Text style={styles.headerText}>Order#</Text>
                    <Text style={styles.headerText}>Amount</Text>
                </View>
                <Divider style={styles.divider} />

                {PayoutsRecord.map((item) => (
                    <PayoutCard key={item.id} item={item} />
                ))}

            </View>
            {/* date time picker modal */}
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    );
}

// define your styles
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
    statusHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: HP(3)
    },
    divider: {
        borderColor: colors.white,
        borderWidth: HP(0.1),
        borderStyle: 'dashed',
        marginTop: HP(0.8)
    },
    headerText: {
        color: colors.g19,
        fontWeight: 'bold'
    }
});

export { PayoutTab }