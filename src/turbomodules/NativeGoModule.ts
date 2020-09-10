import type { TurboModule } from 'react-native/Libraries/TurboModule/RCTExport';
import * as TurboModuleRegistry from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

export interface Spec extends TurboModule {
  // Exported methods.
  syncSum: (a: number, b: number) => number;
  asyncSum: (a: number, b: number, s: number) => Promise<number>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SyncStorage') as Spec;
