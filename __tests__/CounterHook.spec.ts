import 'react-native';
import { renderHook, act } from '@testing-library/react-hooks';
import { useBridgeCounter } from '../src/hooks/use-native-counter';

// mock our native go methods :)
jest.mock('react-native', () => ({
  NativeModules: {
    SAMPLE_MODULE: {
      syncSum: (a: number, b: number) => a + b,
      asyncSum: (a: number, b: number, s: number) =>
        new Promise((res) => res(a + b)),
    },
  },
}));

describe('COUNTER HOOK', () => {
  describe('SYNC SUM', () => {
    it('should increment counter sync correctly', () => {
      const { result } = renderHook(useBridgeCounter);

      act(() => {
        result.current.syncSum(2, 2);
      });

      expect(result.current.counter).toBe(4);
    });
  });

  describe('ASYNC SUM', () => {
    it('should increment counter async correctly', async () => {
      const { result, waitForNextUpdate } = renderHook(useBridgeCounter);

      act(() => {
        result.current.asyncSum(2, 2, 500);
      });

      expect(result.current.isWorking).toBeTruthy();

      await waitForNextUpdate();

      expect(result.current.counter).toBe(4);
      expect(result.current.isWorking).toBeFalsy();
    });
  });
});
