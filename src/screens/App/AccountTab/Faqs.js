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

  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader left={Icons.leftArrow} onPressLeft={() => navigation.goBack()} />
      <ScrollView>
        <View style={styles.miniContainer}>
          <Text style={styles.faq}>FAQs</Text>

          {FAQs.map((i, index) => (
            <LinearGradient
              key={index}
              colors={isIndex === index ? [colors.p5, colors.p5] : [colors.p4, colors.p4]}
              start={{ y: 0, x: 0 }}
              end={{ y: 0, x: 0 }}
              style={{
                padding: index === isIndex ? 12 : 16,
                borderRadius: index === isIndex ? WP(5) : WP(12),
                marginVertical: HP(1),
              }}
            >
              <View style={styles.rowStyle}>
                <Text style={[styles.text]}>{i?.question}</Text>
                <TouchableOpacity onPress={() => setIsIndex(index)} style={styles.arrowBtn}>
                  {index === isIndex ? Icons.upArrow : Icons.downArrow}
                </TouchableOpacity>
              </View>
              {isIndex === index && (
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
    width: WP(10),
    height: HP(3),
    justifyContent: 'center',
  },
  text: {
    fontFamily: family.Roboto_Medium,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: size.large,
    lineHeight: WP(5),
    color: colors.white,
  },
  text1: {
    fontFamily: family.Roboto_Regular,
    fontSize: size.large,
    lineHeight: WP(6),
    color: colors.white,
    marginTop: HP(0.5),
  },
  miniContainer: {
    marginHorizontal: WP(3),
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
});
