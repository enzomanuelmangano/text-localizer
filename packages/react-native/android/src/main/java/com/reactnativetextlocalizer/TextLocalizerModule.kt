package com.reactnativetextlocalizer

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import java.util.Locale


class TextLocalizerModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "TextLocalizer"
    }

    @ReactMethod
    fun getCurrentLanguage(promise: Promise) {
      promise.resolve(Locale.getDefault().language)
    }

}
