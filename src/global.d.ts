// @ts-ignore
declare const global: {
  NativeGoModule: {
    syncSum: (a: number, b: number) => number;
    asyncSum: (a: number, b: number, s: number) => Promise<number>;
  };
};
