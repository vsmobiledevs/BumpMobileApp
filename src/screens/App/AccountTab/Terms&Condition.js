import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import * as Animatable from 'react-native-animatable';
import {WP, colors, HP, family, size} from '../../../shared/exporter';

import {Icons} from '../../../assets/icons';
import {AuthHeader} from '../../../components';
import LinearGradient from 'react-native-linear-gradient';

const TermsScreen = ({navigation}) => {
  const [isIndex, setIsIndex] = useState(null);
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
          <Text style={styles.terms}>Terms & Conditions</Text>
        </View>
        <Text style={styles.terms1}>Terms & Conditions</Text>
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
    fontWeight: 700,
    fontSize: WP(5.5),
    lineHeight: WP(5),
    marginHorizontal: WP(2),
    marginVertical: HP(3),
    color: colors.p6,
  },

  terms1: {
    fontFamily: family.Roboto_Bold,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: WP(4.5),
    lineHeight: WP(5),
    marginHorizontal: WP(2),
    marginVertical: HP(3),
    color: colors.p6,
  },
  miniConatiner: {
    marginHorizontal: WP(2),
    marginTop: HP(1),
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0.5},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 1,
    padding: 10,
  },
});
