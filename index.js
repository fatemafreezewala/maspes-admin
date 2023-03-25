/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SplashScreen from 'react-native-splash-screen';
import notifee, {EventType} from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';

notifee.onBackgroundEvent(async ({type, detail}) => {
  const {notification} = detail;
  if (type === EventType.PRESS) {
    await notifee.cancelNotification(notification.id);
  }
});

messaging().setBackgroundMessageHandler(async remoteMsg => {
  try {
    console.log('background message', remoteMsg);

    await notifee.displayNotification({
      title: remoteMsg.data?.title,
      body: remoteMsg.data?.body,
      android: {
        sound: 'default',
        channelId: 'default',
        pressAction: {
          launchActivity: 'default',
          id: 'default',
        },
      },
      ios: {
        sound: 'default',
      },
    });
  } catch (error) {
    console.log(error);
  }
});

if (Platform.OS === 'android') {
  SplashScreen.show();
}

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

AppRegistry.registerComponent(appName, () => App);
