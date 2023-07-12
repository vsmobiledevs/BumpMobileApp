/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, View, Alert } from 'react-native';
import Toast from 'react-native-simple-toast';
import { useDeleteCardMutation, useGetAllCardsMutation } from '../../../../redux/api/payments';
import { HP, colors } from '../../../../shared/exporter';
import { Icons } from '../../../../assets/icons';
import { AppLoader, AuthHeader, SelectPaymentMethod } from '../../../../components';

function SelectMethod({ navigation }) {
  const [getAllCards, response] = useGetAllCardsMutation();
  const [deleteCard, { isLoading, isSuccess, isError, data, error }] = useDeleteCardMutation();
  const [userCards, setUserCards] = useState(null);
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 0,
      title: 'Bank',
      icon: Icons.bankFill,
      isUp: false,
      isAdd: false,
    },
    {
      id: 1,
      title: 'Credit Card',
      icon: Icons.cardFill,
      isUp: false,
      isAdd: false,
    },
  ]);

  // get all cards
  useEffect(() => {
    getCards();
  }, []);

  // handling get all cards response
  useEffect(() => {
    if (response?.isSuccess) {
      console.log('get cards success response--', response.data);
      setUserCards(response.data.user_cards);
    }
    if (response?.isError) {
      console.log('get cards error--', response.error);
      Toast.showWithGravity('No Cards Found', Toast.SHORT, Toast.BOTTOM);
    }
  }, [response.isLoading]);

  // handling delete card response
  useEffect(() => {
    if (isSuccess) {
      console.log('delete card success response--', data);
      Toast.showWithGravity('Card Deleted Successfully', Toast.SHORT, Toast.BOTTOM);
    }
    if (isError) {
      console.log('delete card error --', data);
      Toast.showWithGravity(error.data.message, Toast.SHORT, Toast.BOTTOM);
    }
  }, [isLoading]);

  const onPressCard = (id) => {
    setPaymentMethods(
      paymentMethods.map((item) => {
        if (item.id === id) {
          return { ...item, isUp: !item.isUp };
        }
        return { ...item, isUp: false };
      })
    );
  };

  const addAnotherBank = (id) => {
    setPaymentMethods(
      paymentMethods.map((item) => {
        if (item.id === id) {
          return { ...item, isAdd: true };
        }
        return { ...item, isAdd: false };
      })
    );
  };

  // get cards
  const getCards = async () => {
    await getAllCards();
  };

  // remove card
  const onPressdelete = async (item) => {
    Alert.alert('confirmation', 'Are you sure you want to delete your card?', [
      {
        text: 'No',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: async () => {
          const id = item.card_id;
          const body = new FormData();
          body.append('card_id', id);
          await deleteCard(body);
          const filteredArray = userCards.filter((item) => item.card_id !== id);
          setUserCards(filteredArray);
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader
        center="Add Payment Method"
        left={Icons.leftArrow}
        onPressLeft={() => navigation.goBack()}
      />

      {/* select payment method */}
      <View style={styles.selectorContainer}>
        {paymentMethods.map((item) => (
          <SelectPaymentMethod
            key={item?.id}
            item={item}
            onPressCard={() => onPressCard(item.id)}
            addAnotherBank={() => addAnotherBank(item.id)}
            userCards={userCards}
            deleteCard={onPressdelete}
          />
        ))}
      </View>
      <AppLoader loader_color={colors.g19} loading={response?.isLoading || isLoading} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  selectorContainer: {
    marginTop: HP(6),
  },
});

export { SelectMethod };
