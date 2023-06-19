/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Icons } from '../../../assets/icons';
import { AuthHeader } from '../../../components';
import { WP, colors, HP, family } from '../../../shared/exporter';
import { useTermsAndPrivacyMutation } from '../../../redux/api/auth';
import { AppLoader } from '../../../components/AppLoader';

function TermsScreen({ route, navigation }) {
  const { screenId } = route.params;
  const [termsAndPrivacy, res] = useTermsAndPrivacyMutation();
  const [title, setTitle] = useState(null);

  useEffect(() => {
    getTermsAndPrivacy();
  }, []);

  // handling response
  useEffect(() => {
    if (res?.isSuccess) {
      if (res.data.privacy_policy) {
        setTitle(res.data.privacy_policy[0].title);
      } else {
        setTitle(res.data.terms_and_conditions[0].title);
      }
    }
    if (res?.isError) {
      /* empty */
    }
  }, [res.isLoading]);

  // get terms and conditions
  const getTermsAndPrivacy = async () => {
    if (screenId === 6) {
      await termsAndPrivacy('terms_and_conditions');
    } else {
      await termsAndPrivacy('privacy_policy');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader left={Icons.leftArrow} onPressLeft={() => navigation.goBack()} />

      <View style={styles.miniContainer}>
        <View style={styles.innerContainer}>
          {Icons.condition}
          <Text style={styles.terms}>
            {screenId === 6 ? 'Terms & Conditions' : 'Privacy Policy'}
          </Text>
        </View>
        <Text style={styles.terms1}>
          {screenId === 6 ? 'Terms & Conditions' : 'Privacy Policy'}
        </Text>

        <Text style={styles.title}>{title || ''}</Text>
      </View>
      {/* app loader */}
      <AppLoader loader_color={colors.g19} loading={res?.isLoading} />
    </SafeAreaView>
  );
}

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
    color: colors.p6,
  },
  miniContainer: {
    marginHorizontal: WP(2),
    marginTop: HP(5),
    backgroundColor: 'white',
    borderRadius: WP(5),
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 1,
    padding: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: HP(3),
  },
  title: {
    marginHorizontal: WP(2),
    textAlign: 'left',
    marginTop: HP(1.5),
    fontSize: HP(1.5)
  },
});
