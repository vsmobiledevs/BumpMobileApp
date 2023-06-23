/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { WP, colors, HP, family, size } from '../../../shared/exporter';
import { AuthHeader } from '../../../components';
import { Icons } from '../../../assets/icons';
import { useFaqsMutation } from '../../../redux/api/auth';
import { AppLoader } from '../../../components/AppLoader';

function FaqScreen({ navigation }) {
  const [faqs, response] = useFaqsMutation();
  const [isIndex, setIsIndex] = useState(null);
  const [FAQs, setFAQs] = useState([]);

  useEffect(() => {
    getFaqs();
  }, []);

  // handling response
  useEffect(() => {
    if (response?.isSuccess) {
      setFAQs(response?.data.faqs);
    }
    if (response?.isError) {
      /* empty */
    }
  }, [response.isLoading]);

  // get faqs
  const getFaqs = async () => {
    await faqs();
  };

  const clickOnCard = (index) => {
    setIsIndex(index);
    if (index == isIndex) {
      setIsIndex(-1)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader left={Icons.leftArrow} onPressLeft={() => navigation.goBack()} />
      <ScrollView>
        <View style={styles.miniContainer}>
          <Text style={styles.faq}>FAQs</Text>

          {FAQs.map((i, index) => (
            <LinearGradient
              key={index}
              colors={isIndex == index ? [colors.p5, colors.p5] : [colors.p4, colors.p4]}
              start={{ y: 0, x: 0 }}
              end={{ y: 0, x: 0 }}
              style={styles.questions}>
              <View style={styles.rowStyle}>
                <Text numberOfLines={1} style={[styles.text]}>{i?.question}</Text>
                <TouchableOpacity activeOpacity={0.8} onPress={() => clickOnCard(index)} style={styles.arrowBtn}>
                  {index == isIndex ? Icons.upArrow : Icons.downArrow}
                </TouchableOpacity>
              </View>
              {isIndex == index && (
                <Animatable.View animation="flipInX" duration={500} delay={100}>
                  <Text style={[styles.text1]}>{i?.answer}</Text>
                </Animatable.View>
              )}
            </LinearGradient>
          ))}
        </View>
      </ScrollView>
      {/* app loader */}
      <AppLoader loader_color={colors.g19} loading={response?.isLoading} />
    </SafeAreaView>
  );
}

export default FaqScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  faq: {
    fontFamily: family.Roboto_Bold,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: WP(5.5),
    lineHeight: WP(7),
    marginHorizontal: WP(2),
    marginVertical: HP(3),
    color: colors.g19,
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrowBtn: {
    justifyContent: 'center',

    width: WP(10),
    height: HP(2.5)
  },
  text: {
    width: WP(75),
    fontWeight: '700',
    fontSize: size.xsmall,
    lineHeight: WP(5),
    fontStyle: 'normal',
    fontFamily: family.Roboto_Medium,
    color: colors.white,
  },
  text1: {
    fontFamily: family.Roboto_Regular,
    fontSize: size.xxsmall,
    lineHeight: WP(6),
    color: colors.white,
    marginTop: HP(1),
  },
  miniContainer: {
    marginHorizontal: WP(2),
    marginTop: HP(5),
    backgroundColor: colors.white,
    borderRadius: WP(5),
    shadowColor: colors.b1,
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
    padding: 10,
    marginBottom: HP(1)
  },
  questions: {
    padding: HP(2),
    borderRadius: WP(8),
    marginVertical: HP(1),
  }
});
