package com.rngoexample;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

import rnSample.RnSample;

@ReactModule(name = SampleModule.NAME)
public class SampleModule extends ReactContextBaseJavaModule {
    static final String NAME = "SAMPLE_MODULE";

    public SampleModule(@NonNull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public int syncSum(int x, int y) {
        return RnSample.syncSum(x, y);
    }

    @ReactMethod
    public void asyncSum(int x, int y, int sleepMs, Promise promise) {
        Runnable fn = () -> {
            int result = RnSample.asyncSum(x, y, sleepMs);
            promise.resolve(result);
        };
        new Thread(fn).start();
    }

    @NonNull
    @Override
    public String getName() {
        return NAME;
    }
}
