import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { Icons } from '../../../assets/icons';
import { HP, WP, appImages, colors, size } from '../../../shared/exporter';
import { MyStatusBar, NftsCard, RNModal, SearchInput } from '../../../components';

function Search({ navigation }) {
  const [isPaid, setIsPaid] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [Nfts] = useState([
    {
      id: 0,
      name: 'Solana',
      icon: Icons.solana,
    },
    {
      id: 1,
      name: 'NFT',
      icon: Icons.solana,
    },
    {
      id: 2,
      name: 'Blockchain',
      icon: Icons.solana,
    },
    {
      id: 3,
      name: 'Recent View',
      icon: Icons.solana,
    },
    {
      id: 4,
      name: 'Add Shortcut',
      icon: Icons.solana,
    },
  ]);

  // select browsing type
  const onSelectSwitch = (val) => {
    setIsPaid(val !== 1);
  };

  // edit or remove NFTs from list
  const onPressIcon = () => { };

  return (
    <SafeAreaView style={styles.container}>
      <MyStatusBar backgroundColor={colors.white} />
      <ImageBackground
        style={styles.homeBackground}
        source={isPaid ? appImages.homeBackgroundBlue : appImages.homeBackgroundOrange}
      >
        <ScrollView>
          <ImageBackground source={appImages.homeHead} style={styles.homeHead}>
            <View style={styles.premiumContainer}>
              <TouchableOpacity onPress={() => navigation.navigate("accountTabScreens", { screen: "SubscriptionPlan" })} activeOpacity={0.8}>
                <Text style={styles.premiumText}>Premium</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8}>
                {Icons.metaMask}
              </TouchableOpacity>
            </View>
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

          {/* NFTs card container */}
          <View style={styles.innerContainer}>
            <FlatList
              data={Nfts}
              numColumns={4}
              keyExtractor={(item) => item?.id}
              renderItem={({ item, index }) => (
                <NftsCard
                  item={item}
                  index={index}
                  showModal={setShowModal}
                  arrayLength={Nfts.length}
                  onPressIcon={() => onPressIcon(index)}
                />
              )}
            />
          </View>
        </ScrollView>
      </ImageBackground>
      {showModal && <RNModal show={showModal} onTouchCancel={() => setShowModal(false)} />}
    </SafeAreaView>
  );
}

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
  premiumContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: HP(3),
    marginTop: HP(4)
  },
  premiumText: {
    fontSize: size.small,
    color: colors.P1,
    fontWeight: 'bold',
    marginTop: HP(1.5)
  }
});
