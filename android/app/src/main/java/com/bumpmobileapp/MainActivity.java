package com.bumpmobileapp;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;
import android.os.Bundle;
import com.zoontek.rnbootsplash.RNBootSplash;

public class MainActivity extends ReactActivity {


   @Override
  protected void onCreate(Bundle savedInstanceState) {
    RNBootSplash.init(this); // ⬅️ initialize the splash screen
    super.onCreate(savedInstanceState); // or super.onCreate(null) with react-native-screens
  }

//   // Create a new event for the activity.
// @Override
// protected void onCreate(@Nullable Bundle savedInstanceState) {
//     super.onCreate(savedInstanceState);
//     // Set the layout for the content view.
//     setContentView(R.layout.main_activity);

//     // Set up an OnPreDrawListener to the root view.
//     final View content = findViewById(android.R.id.content);
//     content.getViewTreeObserver().addOnPreDrawListener(
//             new ViewTreeObserver.OnPreDrawListener() {
//                 @Override
//                 public boolean onPreDraw() {
//                     // Check whether the initial data is ready.
//                     if (mViewModel.isReady()) {
//                         // The content is ready. Start drawing.
//                         content.getViewTreeObserver().removeOnPreDrawListener(this);
//                         return true;
//                     } else {
//                         // The content isn't ready. Suspend.
//                         return false;
//                     }
//                 }
//             });
// }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "BumpMobileApp";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
        DefaultNewArchitectureEntryPoint.getFabricEnabled(), // fabricEnabled
        // If you opted-in for the New Architecture, we enable Concurrent React (i.e. React 18).
        DefaultNewArchitectureEntryPoint.getConcurrentReactEnabled() // concurrentRootEnabled
        );
  }
}
