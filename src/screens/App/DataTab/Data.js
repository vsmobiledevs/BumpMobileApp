import { View, StyleSheet, Button } from 'react-native';
import React from 'react';

// import {connect} from '../../../blockChain/metaMaskConfig';

function Data() {
  // const user = useAppSelector(state => state);
  // console.log('user--', user);
  // const [isAccount, setIsAccount] = useState();

  return (
    <View style={styles.mainContainer}>
      <Button
        // color="red"
        // title={isAccount ? 'Connected' : 'Connect'}
        disabled
        title="This screen is under construction!"
        onPress={() => {
          // setIsAccount(connect());
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Data;
