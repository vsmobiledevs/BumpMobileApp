import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {AccountButtons} from '../../../shared/utilities/dummyData';
import {WP, colors, HP, family} from '../../../shared/exporter';
import AccountButton from '../../../components/AccountButton';
import LinearGradient from 'react-native-linear-gradient';
import {Icons} from '../../../assets/icons';
import {MyStatusBar} from '../../../components';
import {useDispatch} from 'react-redux';
import {logout} from '../../../redux/features/authSlice';

const dummyImage =
  'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg';

const AccountScreen = ({navigation}) => {
  const dispatch = useDispatch(null);
  // open new screen
  const onPressListItem = async item => {
    if (item?.id === 6) {
      navigation.navigate('accountTabScreens', {
        screen: item.screen,
        params: {screenId: item?.id},
      });
    } else if (item?.id === 7) {
      navigation.navigate('accountTabScreens', {
        screen: item.screen,
        params: {screenId: item?.id},
      });
    } else if (item?.id === 10) {
      console.log('perform logout action here');
      dispatch(logout());
    } else {
      navigation.navigate('accountTabScreens', {screen: item.screen});
    }
  };
  return (
    <View style={styles.container}>
      <MyStatusBar backgroundColor={colors.P1} barStyle={'light-content'} />

      <LinearGradient colors={[colors.P1, colors.P2]} style={styles.header}>
        <View style={styles.header2}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: dummyImage,
              }}
              style={styles.imageStyle}
            />
          </View>
          <View style={styles.nameContainer}>
            <Text style={[styles.nameStyle, {fontWeight: 'bold'}]}>
              {'Alexander Fred'}
            </Text>
            <Text
              style={[styles.nameStyle, {fontFamily: family.Roboto_Medium}]}>
              {'Earning: $103.00'}
            </Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.miniContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}
          contentInsetAdjustmentBehavior="automatic">
          {AccountButtons?.map(i => {
            return (
              <AccountButton
                key={i?.id}
                title={i.title}
                leftIcon={i.leftIcon}
                rightIcon={Icons?.rightArrow}
                onPress={() => onPressListItem(i)}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    padding: HP(3),
    height: HP(13),
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    borderBottomRightRadius: HP(1.5),
    borderBottomLeftRadius: HP(1.5),
  },
  header2: {
    flexDirection: 'row',
  },
  imageStyle: {width: WP(16), height: WP(16), borderRadius: WP(16)},
  imageContainer: {
    width: WP(17),
    height: WP(17),
    borderRadius: WP(17),
    borderColor: colors.white,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameContainer: {marginLeft: WP(4), alignSelf: 'center'},
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
    backgroundColor: colors.white,
    borderColor: `${colors.g24}50`,
  },
});
