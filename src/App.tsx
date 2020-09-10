import React, { useState, useCallback } from 'react';
import {
  Button,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useBridgeCounter } from './hooks/use-native-counter';

export default function Counter() {
  const [numberX, setNumberX] = useState<number>();
  const [numberY, setNumberY] = useState<number>();
  const { counter, isWorking, syncSum, asyncSum } = useBridgeCounter();

  const callbackSync = useCallback(() => {
    syncSum(numberX, numberY);
  }, [syncSum]);

  const callbackAsync = useCallback(() => {
    asyncSum(numberX, numberY, 2000);
  }, [asyncSum]);

  return (
    <SafeAreaView style={styles.rootView}>
      <Text>Counter value: {counter}</Text>
      <TextInput
        onChangeText={(x) => setNumberX(Number(x))}
        keyboardType={'numeric'}
        value={numberX ? numberX.toString() : '0'}
      />
      <TextInput
        onChangeText={(y) => setNumberY(Number(y))}
        keyboardType={'numeric'}
        value={numberY ? numberY.toString() : '0'}
      />
      <Button title={'Sync Sum'} onPress={callbackSync} />
      <Button title={'Async Sum'} onPress={callbackAsync} />
      {isWorking && (
        <Text>Simulating native background hard task with GO!! :)</Text>
      )}
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
