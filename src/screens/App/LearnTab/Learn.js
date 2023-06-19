/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useCallback, useEffect, useState } from 'react';
import { ImageBackground, View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import { HP, WP, appImages, colors, size } from '../../../shared/exporter';
import { LearnCard, MyStatusBar } from '../../../components';
import { useTermsAndPrivacyMutation } from '../../../redux/api/auth';
import { AppLoader } from '../../../components/AppLoader';

function Learn() {
  const [termsAndPrivacy, response] = useTermsAndPrivacyMutation();
  const [data, setData] = useState([]);
  const [textShown, setTextShown] = useState(false);
  const [lengthMore, setLengthMore] = useState(false);

  useEffect(() => {
    learnAboutBump();
  }, []);

  // handling response
  useEffect(() => {
    if (response?.isSuccess) {
      if (response.data.learn_about_bump) {
        setData(response.data.learn_about_bump);
      }
    }
    if (response?.isError) {
      /* empty */
    }
  }, [response.isLoading]);

  // get learning about bump
  const learnAboutBump = async () => {
    await termsAndPrivacy('learn_about_bump');
  };

  const toggleNumberOfLines = () => {
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback((e) => {
    setLengthMore(e.nativeEvent.lines.length >= 4);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.homeBackground} source={appImages.homeBackgroundBlue}>
        <MyStatusBar animated barStyle="light-content" />

        <View style={styles.innerContainer}>
          <Text style={styles.learnAboutText}>Learn About Bump</Text>
          {/* about bump section */}
          <View style={styles.aboutContainer}>
            <Text style={styles.title}>About Bump</Text>
            <Text
              onTextLayout={onTextLayout}
              numberOfLines={textShown ? undefined : 4}
              style={styles.description}
            >
              Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
              velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
              condimentum lobortis.
            </Text>

            {lengthMore ? (
              <TouchableOpacity onPress={toggleNumberOfLines} activeOpacity={0.8}>
                <Text style={styles.learnMore}>{textShown ? 'Read less...' : 'Learn More...'}</Text>
              </TouchableOpacity>
            ) : null}
          </View>

          {/* about bump images and videos list */}
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <LearnCard item={item} />}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.1}
            style={styles.randomContainer}
          />
        </View>
      </ImageBackground>
      {/* app loader */}
      <AppLoader loader_color={colors.g19} loading={response?.isLoading} />
    </View>
  );
}

export default Learn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homeBackground: {
    width: WP(100),
    height: HP(100),
    resizeMode: 'contain',
  },
  innerContainer: {
    width: WP(100),
  },
  aboutContainer: {
    width: WP(90),
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: HP(1),
    padding: HP(2),
    paddingTop: HP(4),
    paddingBottom: HP(4),
  },
  learnAboutText: {
    textAlign: 'center',
    fontSize: size.xlarge,
    color: colors.white,
    fontWeight: 'bold',
    marginVertical: HP(1.5),
    marginTop: HP(4),
  },
  title: {
    fontSize: size.large,
    color: colors.g19,
    fontWeight: 'bold',
  },
  description: {
    fontSize: size.small,
    color: colors.b1,
    textAlign: 'left',
    marginTop: HP(1),
    lineHeight: 21,
  },
  learnMore: {
    color: colors.blue,
    marginTop: HP(0.4),
    lineHeight: 21,
  },
  randomContainer: {
    marginTop: HP(1),
    marginBottom: HP(10),
    width: '90%',
    alignSelf: 'center',
  },
});
