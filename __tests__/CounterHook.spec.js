import { renderHook, act } from '@testing-library/react-hooks';
import { useNativeCounter } from '../src/hooks/use-native-counter';

// TODO fix mock native module
describe('COUNTER HOOK', () => {
  describe('SYNC', () => {
    it('should increment counter sync correctly', () => {
      const { result } = renderHook(() => useNativeCounter());

      act(() => {
        result.current.syncSum(2, 2);
      });

      expect(result.current.counter).toBe(4);
    });
  });
});
