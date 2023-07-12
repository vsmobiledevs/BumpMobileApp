/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Formik } from 'formik';
import Toast from 'react-native-simple-toast';
import { Icons } from '../../../../assets/icons';
import { HP, WP, colors } from '../../../../shared/exporter';
import { AppButton, AppInput, AppLoader, AuthHeader } from '../../../../components';
import { cardDetails, cardDetailsVS } from '../../../../shared/utilities/validations';
import { useAddCardMutation } from '../../../../redux/api/payments';

function AddCardScreen({ navigation }) {
  const formikRef = useRef();
  const [addCard, response] = useAddCardMutation();

  // handling add card response
  useEffect(() => {
    if (response?.isSuccess) {
      console.log('add card response--', response.data);
      Toast.showWithGravity('Card Added Successfully', Toast.SHORT, Toast.BOTTOM);
      navigation.goBack();
    }
    if (response?.isError) {
      console.log(response?.error);
      Toast.showWithGravity(response?.error?.data?.message, Toast.SHORT, Toast.BOTTOM);
    }
  }, [response.isLoading]);

  const onPressAddCard = async (values) => {
    const date = values?.expiryDate.split('/');

    const body = new FormData();
    body.append('username', values.nameOnCard);
    body.append('exp_month', date[0]);
    body.append('exp_year', date[1]);
    body.append('cvc', values.cvv);
    body.append('country', values.country);
    body.append('number', values.cardNumber);
    await addCard(body);
  };

  return (
    <View style={styles.container}>
      <AuthHeader
        center="Add Card Details"
        left={Icons.leftArrow}
        onPressLeft={() => navigation.goBack()}
      />

      <View style={styles.innerContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Formik
            innerRef={formikRef}
            initialValues={cardDetails}
            onSubmit={(values, { resetForm }) => {
              onPressAddCard(values, resetForm);
            }}
            validationSchema={cardDetailsVS}
          >
            {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
              <>
                <AppInput
                  title="Card Number"
                  titleStyle={styles.titleStyle}
                  containerStyle={styles.containerStyle}
                  textInPutProps={{
                    style: { color: colors.b1 },
                    value: values.cardNumber,
                    placeholder: 'Card Number',
                    placeholderTextColor: colors.b4,
                    onChangeText: handleChange('cardNumber'),
                    onblur: handleBlur('cardNumber'),
                    autoCapitalize: 'none',
                    maxLength: 16,
                    keyboardType: 'number-pad',
                  }}
                  errorStyle={styles.errorStyle}
                  errorMessage={errors.cardNumber}
                  touched={touched.cardNumber}
                />
                <View style={styles.expiryDateContainer}>
                  <AppInput
                    title="Expiry Date"
                    titleStyle={styles.titleStyle}
                    containerStyle={[styles.containerStyle, { width: WP(40) }]}
                    textInPutProps={{
                      style: { color: colors.b1 },
                      value: values.expiryDate,
                      placeholderTextColor: colors.b4,
                      placeholder: 'mm/yy',
                      onChangeText: (text) => {
                        handleChange('expiryDate')(
                          text.length === 3 && !text.includes('/')
                            ? `${text.substring(0, 2)}/${text.substring(2)}`
                            : text
                        );
                      },
                      onblur: handleBlur('expiryDate'),
                      maxLength: 7,
                      returnKeyType: 'done',
                      autoCapitalize: 'none',
                      keyboardType: 'number-pad',
                    }}
                    errorStyle={styles.errorStyle}
                    errorMessage={errors.expiryDate}
                    touched={touched.expiryDate}
                  />
                  <AppInput
                    title="CVV"
                    titleStyle={styles.titleStyle}
                    containerStyle={[styles.containerStyle, { width: WP(40) }]}
                    textInPutProps={{
                      style: { color: colors.b1 },
                      value: values.cvv,
                      placeholder: 'CVV',
                      placeholderTextColor: colors.b4,
                      onChangeText: handleChange('cvv'),
                      onblur: handleBlur('cvv'),
                      autoCapitalize: 'none',
                      maxLength: 3,
                      keyboardType: 'number-pad',
                    }}
                    errorStyle={styles.errorStyle}
                    errorMessage={errors.cvv}
                    touched={touched.cvv}
                  />
                </View>
                <AppInput
                  title="Name On Card"
                  titleStyle={styles.titleStyle}
                  containerStyle={styles.containerStyle}
                  textInPutProps={{
                    style: { color: colors.b1 },
                    value: values.nameOnCard,
                    placeholderTextColor: colors.b4,
                    onChangeText: handleChange('nameOnCard'),
                    onblur: handleBlur('nameOnCard'),
                    autoCapitalize: 'none',
                  }}
                  errorStyle={styles.errorStyle}
                  errorMessage={errors.nameOnCard}
                  touched={touched.nameOnCard}
                />
                <AppInput
                  title="Address"
                  titleStyle={styles.titleStyle}
                  containerStyle={styles.containerStyle}
                  textInPutProps={{
                    style: { color: colors.b1 },
                    value: values.address,
                    placeholderTextColor: colors.b4,
                    onChangeText: handleChange('address'),
                    onblur: handleBlur('address'),
                    autoCapitalize: 'none',
                  }}
                  errorStyle={styles.errorStyle}
                  errorMessage={errors.address}
                  touched={touched.address}
                />
                <AppInput
                  title="Country"
                  titleStyle={styles.titleStyle}
                  containerStyle={styles.containerStyle}
                  textInPutProps={{
                    style: { color: colors.b1 },
                    value: values.country,
                    placeholderTextColor: colors.b4,
                    onChangeText: handleChange('country'),
                    onblur: handleBlur('country'),
                    autoCapitalize: 'none',
                  }}
                  errorStyle={styles.errorStyle}
                  errorMessage={errors.country}
                  touched={touched.country}
                />

                <AppButton
                  title="Add Card"
                  buttonContainer={{ marginTop: HP(5) }}
                  touchableOpacity={{
                    onPress: () => handleSubmit(),
                  }}
                />
              </>
            )}
          </Formik>
        </ScrollView>
      </View>

      <AppLoader loader_color={colors.g19} loading={response?.isLoading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  innerContainer: {
    marginHorizontal: HP(3),
  },
  expiryDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleStyle: {
    marginHorizontal: WP(2),
    marginVertical: HP(1),
  },
  containerStyle: {
    marginHorizontal: WP(0),
    paddingHorizontal: WP(0),
  },
  errorStyle: {
    marginStart: HP(1.5),
    fontSize: HP(1.4),
  },
});

export { AddCardScreen };
