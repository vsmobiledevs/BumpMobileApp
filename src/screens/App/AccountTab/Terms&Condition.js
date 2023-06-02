import React from 'react';
import {Icons} from '../../../assets/icons';
import {AuthHeader} from '../../../components';
import {WP, colors, HP, family} from '../../../shared/exporter';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

const TermsScreen = ({route, navigation}) => {
  const {screenId} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader
        left={Icons.leftArrow}
        onPressLeft={() => navigation.goBack()}
      />

      <View style={styles.miniConatiner}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: HP(3),
          }}>
          {Icons.condition}
          <Text style={styles.terms}>
            {screenId == 6 ? 'Terms & Conditions' : 'Privacy Policy'}
          </Text>
        </View>
        <Text style={styles.terms1}>
          {screenId == 6 ? 'Terms & Conditions' : 'Privacy Policy'}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default TermsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  terms: {
    fontFamily: family.Roboto_Bold,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: WP(5.5),
    lineHeight: WP(7),
    marginHorizontal: WP(2),
    marginVertical: HP(3),
    color: colors.p6,
  },

  terms1: {
    fontFamily: family.Roboto_Bold,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: WP(4.5),
    lineHeight: WP(7),
    marginHorizontal: WP(2),
    marginVertical: HP(3),
    color: colors.p6,
  },
  miniConatiner: {
    marginHorizontal: WP(2),
    marginTop: HP(5),
    backgroundColor: 'white',
    borderRadius: WP(5),
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0.5},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 1,
    padding: 10,
  },
});
