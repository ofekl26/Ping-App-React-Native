package com.example.app;

import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

//package com.rnnativemodules;

public class CustomModule extends ReactContextBaseJavaModule {
    public static ReactApplicationContext reactContext;
    CustomModule(ReactApplicationContext context){
        super(context);
        reactContext = context;
    }
    @ReactMethod
    public void show(){
        Toast.makeText(reactContext, text: "Custom module here", Toast.LENGTH_LONG).show();
    }
    @NonNull
    @Override
    public String getName() {
        return "CustomModule";
    }
}
