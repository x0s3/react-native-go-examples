package com.rngoexample;

import android.app.Application;
import android.content.Context;
import android.util.Log;

import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.TurboReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.model.ReactModuleInfo;
import com.facebook.react.module.model.ReactModuleInfoProvider;
import com.facebook.soloader.SoLoader;

import java.lang.reflect.InvocationTargetException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost =
            new ReactNativeHost(this) {
                @Override
                public boolean getUseDeveloperSupport() {
                    return BuildConfig.DEBUG;
                }

                @Override
                protected List<ReactPackage> getPackages() {
                    List<ReactPackage> packages = new PackageList(this).getPackages();
                    // Packages that cannot be autolinked yet can be added manually here, for example:
                    // packages.add(new MyReactNativePackage());

                    /*
                        TurboReactPackage will load lazily our native modules on demand,
                        doing this our module is not loaded on app init
                     */
                    packages.add(new TurboReactPackage() {
                        @Override
                        public NativeModule getModule(String name, ReactApplicationContext reactContext) {
                            if (SampleModule.NAME.equals(name)) {
                                Log.d(SampleModule.NAME, "we need it now");
                                return new SampleModule(reactContext);
                            }
                            throw new IllegalArgumentException("Could not find module " + name);
                        }

                        @Override
                        public ReactModuleInfoProvider getReactModuleInfoProvider() {
                            return () -> {
                                Map<String, ReactModuleInfo> moduleInfoMap = new HashMap<>();
                                moduleInfoMap.put(SampleModule.NAME, new ReactModuleInfo(
                                                SampleModule.NAME,
                                                "com.rngoexample.SampleModule",
                                                false,
                                                false,
                                                true,
                                                false,
                                                false
                                        )
                                );
                                return moduleInfoMap;
                            };
                        }
                    });

                    return packages;
                }

                @Override
                protected String getJSMainModuleName() {
                    return "index";
                }
            };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
        initializeFlipper(this); // Remove this line if you don't want Flipper enabled
    }

    /**
     * Loads Flipper in React Native templates.
     *
     * @param context
     */
    private static void initializeFlipper(Context context) {
        if (BuildConfig.DEBUG) {
            try {
        /*
         We use reflection here to pick up the class that initializes Flipper,
        since Flipper library is not available in release mode
        */
                Class<?> aClass = Class.forName("com.facebook.flipper.ReactNativeFlipper");
                aClass.getMethod("initializeFlipper", Context.class).invoke(null, context);
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            } catch (NoSuchMethodException e) {
                e.printStackTrace();
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            } catch (InvocationTargetException e) {
                e.printStackTrace();
            }
        }
    }
}
