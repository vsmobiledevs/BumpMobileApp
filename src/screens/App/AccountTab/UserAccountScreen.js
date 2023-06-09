/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';
import { AccountButtons, dummyImage } from '../../../shared/utilities/dummyData';
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
    if (item?.id === 1) {
      navigation.navigate('accountTabScreens', {
        screen: item.screen,
        params: { screenId: item?.id },
      });
    } else if (item?.id === 4) {
      navigation.navigate('accountTabScreens', {
        screen: item.screen,
        params: { screenId: item?.id },
      });
    } else if (item?.id === 9) {
      navigation.navigate('accountTabScreens', {
        screen: item.screen,
        params: { screenId: item?.id },
      });
    } else if (item?.id === 10) {
      dispatch(logout());
    } else {
      // navigation.navigate('accountTabScreens', { screen: item.screen });
    }
  };

  return (
    <View style={styles.container}>
      <MyStatusBar animated backgroundColor={colors.P1} barStyle="light-content" />
      <LinearGradient colors={[colors.P1, colors.P2]} style={styles.header}>
        <View style={styles.header2}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: user?.profile_image || dummyImage }} style={styles.imageStyle} />
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
          contentInsetAdjustmentBehavior="automatic"
        >
          {AccountButtons?.map((i) => (
            <AccountButton
              key={i?.id}
              title={i.title}
              leftIcon={i.leftIcon}
              rightIcon={Icons?.rightArrow}
              onPress={() => onPressListItem(i)}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

export default UserAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: HP(70),
    marginTop: HP(1),
    borderRadius: 8,
    borderWidth: 1.5,
    marginHorizontal: WP(5),
    borderColor: `${colors.g24}50`,
  },
});
