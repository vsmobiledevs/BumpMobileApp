import React, { useCallback, useState } from 'react';
import { ImageBackground, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MyStatusBar } from '../../../components';
import { HP, WP, appImages, colors, size } from '../../../shared/exporter';

function Learn() {
  const [textShown, setTextShown] = useState(false);
  const [lengthMore, setLengthMore] = useState(false);

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
          <View style={styles.aboutContainer}>
            {/* about bump section */}
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
        </View>
      </ImageBackground>
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
});
