import {StyleSheet, SafeAreaView, StatusBar, LogBox} from 'react-native';
import React, {useEffect} from 'react';
import AppNavigator from './src/navigation/MainNavigator';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
  configureFonts,
} from 'react-native-paper';
import colors from './src/utilities/colors';
import fontFamily from './src/utilities/fontFamily';
import SplashScreen from 'react-native-splash-screen';
import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';

LogBox.ignoreLogs([
  'Unsupported dashed / dotted border style',
  'VirtualizedLists',
]);

const App = () => {
  const fontConfig = {
    ios: {
      regular: {
        fontFamily: fontFamily.regular,
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: fontFamily.regular,
        fontWeight: 'normal',
      },
      light: {
        fontFamily: fontFamily.regular,
        fontWeight: 'normal',
      },
      thin: {
        fontFamily: fontFamily.regular,
        fontWeight: 'normal',
      },
      bold: {
        fontFamily: fontFamily.bold,
        fontWeight: 'normal',
      },
      semibold: {
        fontFamily: fontFamily.semibold,
        fontWeight: 'normal',
      },
    },
    android: {
      regular: {
        fontFamily: fontFamily.regular,
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: fontFamily.medium,
        fontWeight: 'normal',
      },
      light: {
        fontFamily: fontFamily.regular,
        fontWeight: 'normal',
      },
      thin: {
        fontFamily: fontFamily.regular,
        fontWeight: 'normal',
      },
      bold: {
        fontFamily: fontFamily.bold,
        fontWeight: 'normal',
      },
      semibold: {
        fontFamily: fontFamily.semibold,
        fontWeight: 'normal',
      },
    },
  };
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.primary,
      secondary: colors.secondary,
    },
    fonts: configureFonts({config: fontConfig}),
  };

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
    requestPermission();
    messaging().onMessage(onMessageReceived);
  }, []);

  const onMessageReceived = async remoteMsg => {
    console.log('remoteMsg', remoteMsg);
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    await notifee.displayNotification({
      title: remoteMsg.data?.title,
      body: remoteMsg.data?.body,
      android: {
        channelId,
        pressAction: {
          id: 'default',
        },
      },
    });
  };

  const requestPermission = async () => {
    const channels = await notifee.getChannels();
    console.log({channels});
    await notifee.requestPermission();
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();
    console.log('token', token);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar animated={true} backgroundColor={colors.primary} />
      <PaperProvider theme={theme}>
        <AppNavigator />
      </PaperProvider>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
