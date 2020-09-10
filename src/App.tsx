import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { BridgeExample } from './BridgeExample';
import { TurboExample } from './TurboExample';

export default function App() {
  return (
    <SafeAreaView style={styles.rootView}>
      {true ? <BridgeExample /> : <TurboExample />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
