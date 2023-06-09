import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { HP, WP, size } from '../../../shared/exporter';
import { AppButton, HistoryCard } from '../../../components';
import { History } from '../../../shared/utilities/staticInfo';

export default function SearchHistory() {
  const [checked, setChecked] = useState(false);

  const onPressChecked = () => {
    setChecked(!checked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {/* date and delete button */}
        <View style={styles.dateContainer}>
          <Text style={styles.date}>Today - Thursday, April 6, 2023 </Text>
          <AppButton
            title="Delete"
            buttonContainer={styles.buttonContainer}
            buttonStyle={styles.buttonStyle}
          />
        </View>
        <ScrollView>
          {/* market place history  */}
          {History.map((item) => (
            <HistoryCard info={item} onPressChecked={onPressChecked} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    marginHorizontal: HP(2),
  },
  buttonContainer: {
    width: WP(20),
    marginVertical: 0,
  },
  buttonStyle: {
    borderRadius: HP(1),
    paddingVertical: HP(1),
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: HP(2),
  },
  date: {
    fontSize: size.xxsmall,
  },
});
