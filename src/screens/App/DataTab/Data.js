import {View, Button} from 'react-native';
import React, {useState} from 'react';

import {connect} from '../../../blockChain/metaMaskConfig';

const Data = () => {
  const [isAccount, setIsAccount] = useState();
  console.log(isAccount);
  return (
    <View>
      <Button
        title={isAccount ? 'Connected' : 'Connect'}
        onPress={() => {
          setIsAccount(connect());
        }}
      />
    </View>
  );
};

export default Data;
