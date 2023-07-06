/* eslint-disable no-lonely-if */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-extraneous-dependencies */
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Toast from 'react-native-simple-toast';
import { debounce } from 'lodash';
import { HP, WP, appImages, colors, size } from '../../../shared/exporter';
import { Icons } from '../../../assets/icons';
import {
  MyStatusBar,
  NftsCard,
  RNModal,
  SearchCard,
  SearchInput,
  AppLoader,
} from '../../../components';
import {
  useCreateShortCutMutation,
  useDeleteShortCutMutation,
  useGetShortCutsMutation,
  useGoogleSearchMutation,
  useUpdateShortCutsMutation,
} from '../../../redux/api/search';

function Search({ navigation }) {
  const [getShortCuts, getShortCutsResponse] = useGetShortCutsMutation();
  const [googleSearch, response] = useGoogleSearchMutation();
  const [updateShortCuts] = useUpdateShortCutsMutation();
  const [createShortCut] = useCreateShortCutMutation();
  const [deleteShortCut] = useDeleteShortCutMutation();

  const [searchResults, setSearchResults] = useState(null);
  const [selectedMode, setSelectedMode] = useState(1);
  const [modalTitle, setModalTitle] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [browsing, setBrowsing] = useState('');
  const [isPaid, setIsPaid] = useState(false);
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [Nfts, setNfts] = useState([
    {
      id: 0,
      name: 'Add Shortcut',
      url: '',
      favicon: '',
    },
  ]);

  useEffect(() => {
    getCreatedShortCuts();
  }, []);

  useEffect(() => {
    if (response?.isSuccess) {
      setSearchResults(response.data.search_results.items);
    }
    if (response?.isError) {
      setSearchResults(null);
      Toast.showWithGravity(response?.error?.data?.message, Toast.SHORT, Toast.BOTTOM);
    }
  }, [response.isLoading]);

  const onGoogleSearch = debounce(async (val) => {
    const body = new FormData();
    body.append('key_word', val);
    await googleSearch(body);
  }, 1000);

  // select browsing type
  const onSelectSwitch = (val) => {
    setIsPaid(val !== 1);
  };

  // edit or remove NFTs from list
  const onPressIcon = (item) => {
    setBrowsing(item?.url);
    onGoogleSearch(item?.url);
  };

  // add new shortcut
  const onAddShortCut = () => {
    setIsLoading(true);
    setShowModal(true);
    setModalTitle('Add Shortcut');
    setName('');
    setUrl('https://');
  };

  // edit shortcut
  const onEditShortCut = (item) => {
    setSelectedId(item?.id);
    setName(item?.name);
    setUrl(item?.url);
    setIsLoading(true);
    setShowModal(true);
    setModalTitle('Edit Shortcut');
  };

  // add shortcut
  const addShortCut = async () => {
    if (modalTitle === 'Edit Shortcut') {
      const body = new FormData();
      body.append('name', name);
      body.append('url', url);
      const update = await updateShortCuts({ body, id: selectedId });
      console.log(update);
      setShowModal(false);
      setIsLoading(false);

      const newArr = Nfts.map((obj) => {
        if (obj.id === selectedId) {
          return {
            ...obj,
            name: update.data.shortcut.name,
            url: update.data.shortcut.url,
            favicon: update.data.shortcut.favicon,
          };
        }
        return obj;
      });
      setNfts(newArr);
      Toast.showWithGravity('Shortcut updated successfully', Toast.SHORT, Toast.BOTTOM);
    } else {
      if (name.trim().length === 0) {
        Toast.showWithGravity('Please enter the name first', Toast.SHORT, Toast.BOTTOM);
      } else if (url.trim().length === 0) {
        Toast.showWithGravity('Please enter the URL first', Toast.SHORT, Toast.BOTTOM);
      } else {
        const body = new FormData();
        body.append('name', name);
        body.append('url', url);
        const createShortCutRes = await createShortCut(body);
        console.log(createShortCutRes);
        if (createShortCutRes.data) {
          setShowModal(false);
          setIsLoading(false);
          setNfts((prevNfts) => [...prevNfts, createShortCutRes.data.shortcut]);
          Toast.showWithGravity('Shortcut added successfully', Toast.SHORT, Toast.BOTTOM);
        }
      }
    }
  };

  // get shortCuts
  const getCreatedShortCuts = async () => {
    const shortCuts = await getShortCuts();
    if (shortCuts.data) {
      const newShortCuts = shortCuts.data.shortcuts.filter(
        (shortcut) => !Nfts.some((obj) => obj.id === shortcut.id)
      );
      setNfts((current) => [...current, ...newShortCuts]);
    }
  };

  // remove shortCuts
  const removeShortCut = async (item) => {
    const id = item?.id;
    await deleteShortCut({ id });
    const filteredArray = Nfts.filter((item) => item.id !== id);
    setNfts(filteredArray);
  };

  return (
    <SafeAreaView style={styles.container}>
      <MyStatusBar backgroundColor={colors.white} />
      <ImageBackground
        style={styles.homeBackground}
        source={isPaid ? appImages.homeBackgroundBlue : appImages.homeBackgroundOrange}
      >
        <ImageBackground source={appImages.homeHead} style={styles.homeHead}>
          <View style={styles.premiumContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('accountTabScreens', { screen: 'SubscriptionPlan' })
              }
              activeOpacity={0.8}
            >
              <Text style={styles.premiumText}>Premium</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8}>{Icons.metaMask}</TouchableOpacity>
          </View>
        </ImageBackground>

        {/* Search input */}
        <SearchInput
          containerStyle={styles.inputContainer}
          leftIcon={Icons.search}
          textInPutProps={{
            value: browsing,
            style: styles.inputStyle,
            placeholder: 'Private Browsing',
            placeholderTextColor: colors.g25,
            onChangeText: (val) => {
              setBrowsing(val);
              onGoogleSearch(val);
            },
          }}
          onSelectSwitch={onSelectSwitch}
          isSearch={browsing}
          selectedMode={selectedMode}
          onPressCross={() => {
            setBrowsing('');
            if (isPaid) {
              setSelectedMode(2);
            } else {
              setSelectedMode(1);
            }
          }}
        />

        {/* NFTs card container and search results */}
        {browsing === '' || searchResults === null ? (
          <View style={styles.innerContainer}>
            <FlatList
              data={Nfts.slice().reverse()}
              numColumns={4}
              key={Nfts.length}
              contentContainerStyle={{}}
              style={[styles.searchCardContainer, { height: HP(35) }]}
              keyExtractor={(item) => item?.id}
              renderItem={({ item, index }) => {
                const reversedIndex = Nfts.length - 1 - index;
                return (
                  <NftsCard
                    key={item.id}
                    item={item}
                    index={reversedIndex}
                    arrayLength={Nfts.length}
                    onPressIcon={() => onPressIcon(item)}
                    onAddShortCut={onAddShortCut}
                    onEditShortCut={() => onEditShortCut(item)}
                    onRemoveShortCut={() => removeShortCut(item)}
                  />
                );
              }}
            />
          </View>
        ) : (
          <View>
            <Text style={styles.search}>Search Results</Text>
            <FlatList
              data={searchResults}
              keyExtractor={(item) => item?.id}
              style={styles.searchCardContainer}
              renderItem={({ item, index }) => <SearchCard key={index} item={item} />}
            />
          </View>
        )}
      </ImageBackground>

      {/* modal component */}
      {showModal && (
        <RNModal
          title={modalTitle}
          show={showModal}
          name={name}
          setName={setName}
          url={url}
          setUrl={setUrl}
          onPressDone={addShortCut}
          onPressCancel={() => {
            setIsLoading(false);
            setShowModal(false);
          }}
          onTouchCancel={() => {
            setIsLoading(false);
            setShowModal(false);
          }}
        />
      )}

      {/* app loader */}
      <AppLoader loader_color={colors.g19} loading={isLoading || getShortCutsResponse.isLoading} />
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
    height: 280,
    width: '100%',
    bottom: HP(0.1),
    resizeMode: 'cover',
  },
  innerContainer: {
    marginHorizontal: HP(3),
    flexDirection: 'row',
  },
  inputStyle: {
    color: colors.b1,
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
    marginTop: HP(4),
  },
  premiumText: {
    fontSize: size.small,
    color: colors.P1,
    fontWeight: 'bold',
    marginTop: HP(1.5),
  },
  search: {
    marginHorizontal: HP(3),
    color: colors.white,
    fontSize: size.small,
  },
  searchCardContainer: {
    height: HP(30),
  },
  add: {
    height: HP(12),
    alignItems: 'center',
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
  iconText: {
    color: colors.white,
    fontSize: size.tiny,
  },
});
