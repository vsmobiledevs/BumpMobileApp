import {appImages, colors, WP} from '../shared/exporter';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View, Image} from 'react-native';
import React, {useEffect} from 'react';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('auth');
    }, 3000);
  }, []);

  return (
    <View style={styles.main}>
      <Image
        source={appImages.splash}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  logo: {
    width: WP('42'),
    height: WP('14'),
  },
});
