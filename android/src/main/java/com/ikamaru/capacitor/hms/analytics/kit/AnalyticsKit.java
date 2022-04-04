package com.ikamaru.capacitor.hms.analytics.kit;

import android.util.Log;

import com.getcapacitor.JSObject;
//import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import com.huawei.hms.analytics.HiAnalytics;
import com.huawei.hms.analytics.HiAnalyticsInstance;

@CapacitorPlugin
public class AnalyticsKit extends Plugin {
    private static final String TAG = "CapHMSAnalyticsKitLog";
    public void load(){
        Log.i(TAG, "AnalyticsKit Loaded:");
        HiAnalyticsInstance instance = HiAnalytics.getInstance(getContext());
    }
}
