import {View, Text} from 'react-native';
import React from 'react';
import Login from '../screens/Auth/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home/Index';
import AuthContext, {defaultState, reducer, restoreToken} from './Auth';
import Tab from './Tab';
const Stack = createNativeStackNavigator();
const screenOptions = {
  headerShown: false,
};
const App = () => {
  const [state, dispatch] = React.useReducer(reducer, defaultState);
  React.useEffect(() => {
    restoreToken(dispatch);
  }, []);
  const authContext = React.useMemo(
    () => ({
      signIn: data => {
        dispatch({type: 'SIGN_IN', token: data});
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: data => {
        dispatch({type: 'SIGN_IN', token: data});
      },
    }),
    [],
  );

  if (state.isLoading) {
    return null;
  }
  return (
    <>
      <NavigationContainer>
        <AuthContext.Provider value={authContext}>
          <Stack.Navigator>
            {state.userToken == null ? (
              <>
                <Stack.Screen
                  options={screenOptions}
                  name="Login"
                  component={Login}></Stack.Screen>
                <Stack.Screen
                  options={screenOptions}
                  name="Tabnavigation"
                  component={Tab}></Stack.Screen>
              </>
            ) : (
              <>
                <Stack.Screen
                  options={screenOptions}
                  name="Tabnavigation"
                  component={Tab}></Stack.Screen>
              </>
            )}
          </Stack.Navigator>
        </AuthContext.Provider>
      </NavigationContainer>
    </>
  );
};

export default App;
