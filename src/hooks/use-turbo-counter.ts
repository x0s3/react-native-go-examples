import { useState } from 'react';

export function useTurboCounter() {
  const [counter, setCounter] = useState<number>(0);
  const [isWorking, setIsWorking] = useState<boolean>(false);

  function syncSum(x: number = 0, y: number = 0): void {
    const result = global.NativeGoModule.syncSum(x, y);
    setCounter((c) => c + result);
  }

  async function asyncSum(
    x: number = 0,
    y: number = 0,
    sleepMs: number = 500,
  ): Promise<void> {
    setIsWorking(true);
    const result = await global.NativeGoModule.asyncSum(x, y, sleepMs);
    setCounter((c) => c + result);
    setIsWorking(false);
  }

  return { counter, isWorking, syncSum, asyncSum };
}
