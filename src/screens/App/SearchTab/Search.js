import {
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  FlatList,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import {Icons} from '../../../assets/icons';
import {MyStatusBar, SearchInput} from '../../../components';
import {HP, WP, appImages, colors} from '../../../shared/exporter';

const Search = () => {
  const DATA = [1, 2, 3, 4, 5, 6];
  const [isPaid, setIsPaid] = useState(false);

  // select browsing type
  const onSelectSwitch = val => {
    setIsPaid(val === 1 ? false : true);
  };

  const addShortCut = index => {
    if (index === 5) {
      console.log('you want to add shortcut');
    }
  };

  const Card = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => addShortCut(index)}
        activeOpacity={0.8}
        style={styles.iconsMain}>
        <View style={styles.iconContainer}>{index === 5 && Icons.add}</View>
        <Text style={styles.iconText}>{'Etherium'}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <MyStatusBar backgroundColor={colors.white} />
      <ImageBackground
        style={styles.homeBackground}
        source={
          isPaid ? appImages.homeBackgroundBlue : appImages.homeBackgroundOrange
        }>
        <ScrollView>
          <ImageBackground source={appImages.homeHead} style={styles.homeHead}>
            {/* Mask icon. */}
            {/* <TouchableOpacity
              activeOpacity={0.8}
              style={styles.metaMaskIconContainer}>
              {Icons.metaMask}
            </TouchableOpacity> */}
          </ImageBackground>

          {/* Search input */}
          <SearchInput
            containerStyle={styles.inputContainer}
            leftIcon={Icons.search}
            textInPutProps={{
              style: styles.inputStyle,
              placeholder: 'Private Browsing',
              placeholderTextColor: colors.g25,
            }}
            onSelectSwitch={onSelectSwitch}
          />
          <View style={styles.innerContainer}>
            <FlatList
              style={{margin: 5}}
              data={DATA}
              numColumns={4}
              keyExtractor={(item, index) => index}
              renderItem={({item, index}) => <Card item={item} index={index} />}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  homeBackground: {
    width: WP(100),
    height: HP(100),
    resizeMode: 'contain',
  },
  homeHead: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    bottom: HP(0.1),
  },
  innerContainer: {
    marginHorizontal: HP(3),
  },
  inputStyle: {
    color: colors.g25,
    fontSize: HP(2),
  },
  inputContainer: {
    backgroundColor: colors.white,
    borderColor: colors.white,
    borderWidth: 1.5,
    marginTop: HP(4),
    height: WP(13),
  },
  metaMaskIconContainer: {
    alignSelf: 'flex-end',
    margin: HP(3),
  },
  iconContainer: {
    backgroundColor: colors.white,
    borderRadius: HP(5),
    width: WP(15),
    height: WP(15),
    margin: HP(1.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconsMain: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    color: colors.white,
  },
});
