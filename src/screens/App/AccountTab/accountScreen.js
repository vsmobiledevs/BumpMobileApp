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
import {AccountBtns} from '../../../shared/utilities/dummyData';
import {Icons} from '../../../assets/icons';

const AccountScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        translucent={true}
        backgroundColor={'transparent'}
      />

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
      <ScrollView>
        <View style={styles.miniConatiner}>
          {AccountBtns?.map(i => {
            return (
              <AccountButton
                title={i.title}
                leftIcon={i.leftIcon}
                rightIcon={Icons?.rightArrow}
                onPress={() => navigation.navigate(i.screen[0])}
              />
            );
          })}
        </View>
      </ScrollView>
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
    fontSize: WP(6),
    lineHeight: HP(4),
    color: colors.white,
  },
  miniConatiner: {
    marginHorizontal: WP(2),
    marginTop: HP(1),
    borderRadius: WP(1.5),
    shadowOffset: 1,
    shadowColor: colors.P1,
    elevation: 0.1,
    shadowOpacity: 0.2,
  },
});
