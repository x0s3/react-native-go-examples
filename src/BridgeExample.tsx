import React, { useState } from 'react';
import { Button, Text, TextInput } from 'react-native';
import { useBridgeCounter } from './hooks/use-bridge-counter';

export function BridgeExample() {
  const [numberX, setNumberX] = useState<number>();
  const [numberY, setNumberY] = useState<number>();
  const { counter, isWorking, syncSum, asyncSum } = useBridgeCounter();

  const callbackSync = () => {
    syncSum(numberX, numberY);
  };

  const callbackAsync = () => {
    asyncSum(numberX, numberY, 2000);
  };

  return (
    <>
      <Text>BridgeCounter value: {counter}</Text>
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
    </>
  );
}
