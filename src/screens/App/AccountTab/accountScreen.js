import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {WP, colors, HP, family} from '../../../shared/exporter';
import AccountButton from '../../../components/AccountButton';
import {AccountButtons} from '../../../shared/utilities/dummyData';
import {Icons} from '../../../assets/icons';

const AccountScreen = ({navigation}) => {
  // open new screen
  const onPressListItem = item => {
    if (item?.id === 4) {
      navigation.navigate('auth', {screen: item?.screen});
    } else {
      navigation.navigate(item?.screen);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor={colors.P1} />

      <LinearGradient colors={[colors.P1, colors.P2]} style={styles.header}>
        <View style={styles.header2}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
              }}
              style={styles.imageStyle}
            />
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.nameStyle}>Alexander Fred</Text>
            <Text
              style={[styles.nameStyle, {fontFamily: family.Roboto_Medium}]}>
              Earning: $103.00
            </Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.miniContainer}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1, paddingBottom: HP(15)}}
          contentInsetAdjustmentBehavior="automatic">
          {AccountButtons?.map(i => {
            return (
              <AccountButton
                title={i.title}
                leftIcon={i.leftIcon}
                rightIcon={Icons?.rightArrow}
                onPress={() => {
                  i.id == 6 || 7
                    ? navigation.navigate(i.screen[0], {screenId: i.id})
                    : navigation.navigate(i.screen[0]);
                }}
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
    height: HP(20),
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: HP(3),
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
    fontSize: WP(6),
  },
  miniContainer: {
    shadowOffset: {width: 0, height: 2},
    backgroundColor: colors.white,
    marginHorizontal: WP(2),
    shadowColor: colors.b1,
    shadowOpacity: 0.4,
    marginTop: HP(1),
    borderRadius: 8,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: WP(25),
  },
});
