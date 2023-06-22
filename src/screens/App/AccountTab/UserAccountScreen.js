/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { AccountButtons, DummyImage } from '../../../shared/utilities/staticInfo';
import { WP, colors, HP, family } from '../../../shared/exporter';
import AccountButton from '../../../components/AccountButton';
import { Icons } from '../../../assets/icons';
import { MyStatusBar } from '../../../components';
import { logout } from '../../../redux/features/authSlice';
import { useAppSelector } from '../../../redux/store';

function UserAccountScreen({ navigation }) {
  const { user } = useAppSelector((state) => state?.authSlice);
  const dispatch = useDispatch(null);

  // open new screen
  const onPressListItem = async (item) => {
    if (item?.id === 2) {
      navigation.navigate(item?.screen);
    } else if (item?.id === 10) {
      GoogleSignin.signOut();
      dispatch(logout());
    } else {
      navigation.navigate(item?.parentScreen, {
        screen: item.screen,
        params: { screenId: item?.id },
      });
    }
  };


  return (
    <View style={styles.container}>
      <MyStatusBar animated backgroundColor={colors.P1} barStyle="light-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        contentInsetAdjustmentBehavior="automatic"
      >
        <LinearGradient colors={[colors.P1, colors.P2]} style={styles.header}>
          <View style={styles.header2}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: user?.profile_image || DummyImage }} style={styles.imageStyle} />
            </View>

            <View style={styles.nameContainer}>
              <Text style={[styles.nameStyle, { fontWeight: 'bold' }]}>{user?.name}</Text>
              <Text style={[styles.nameStyle, { fontFamily: family.Roboto_Medium }]}>
                Earning: $103.00
              </Text>
            </View>
          </View>
        </LinearGradient>

        <View style={styles.miniContainer}>
          {AccountButtons?.map((i) => (
            <AccountButton
              key={i?.id}
              title={i.title}
              leftIcon={i.leftIcon}
              rightIcon={i?.id == 9 || i?.id == 10 ? null : Icons?.rightArrow}
              onPress={() => onPressListItem(i)}
            />
          ))}
        </View>
      </ScrollView>

    </View>
  );
}

export default UserAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.w1,
  },
  header: {
    height: HP(16),
    padding: HP(3),
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    borderBottomRightRadius: HP(1.5),
    borderBottomLeftRadius: HP(1.5),
  },
  header2: {
    flexDirection: 'row',
  },
  imageStyle: { width: WP(16), height: WP(16), borderRadius: WP(16) },
  imageContainer: {
    width: WP(17),
    height: WP(17),
    borderWidth: 2,
    alignItems: 'center',
    borderRadius: WP(17),
    justifyContent: 'center',
    borderColor: colors.white,
  },
  nameContainer: { marginLeft: WP(4), alignSelf: 'center' },
  nameStyle: {
    fontFamily: family.Roboto_Bold,
    color: colors.white,
    lineHeight: HP(4),
    fontSize: WP(5),
  },
  miniContainer: {
    marginTop: HP(1),
    borderRadius: 8,
    borderWidth: 1.5,
    marginHorizontal: WP(5),
    borderColor: `${colors.g24}50`,
    marginBottom: HP(15)
  },
});
