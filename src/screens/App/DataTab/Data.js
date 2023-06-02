import {View, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';

import {connect} from '../../../blockChain/metaMaskConfig';

const Data = () => {
  // const user = useAppSelector(state => state);
  // console.log('user--', user);
  const [isAccount, setIsAccount] = useState();

  return (
    <View style={styles.mainContainer}>
      <Button
        color={'red'}
        title={isAccount ? 'Connected' : 'Connect'}
        onPress={() => {
          setIsAccount(connect());
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Data;
