import { useState } from 'react';
import { NativeModules } from 'react-native';

interface SampleModule {
  syncSum(x: number, y: number): number;
  asyncSum(x: number, y: number, sleepMs: number): Promise<number>;
}

export const sampleModule: SampleModule = NativeModules.SAMPLE_MODULE;

export function useNativeCounter() {
  const [counter, setCounter] = useState<number>(0);
  const [isWorking, setIsWorking] = useState<boolean>(false);

  function syncSum(x: number = 0, y: number = 0): void {
    const result = sampleModule.syncSum(x, y);
    setCounter(c => c + result);
  }

  async function asyncSum(
    x: number = 0,
    y: number = 0,
    sleepMs: number = 500,
  ): Promise<void> {
    setIsWorking(true);
    const result = await sampleModule.asyncSum(x, y, sleepMs);
    setCounter(c => c + result);
    setIsWorking(false);
  }

  return { counter, isWorking, syncSum, asyncSum };
}
