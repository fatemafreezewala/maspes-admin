import {StyleSheet, TextInput, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import colors from '../../utilities/colors';
import Container from '../../components/Container';
import TextComp from '../../components/TextComp';
import Button from '../../components/Button';
import TextInputComp from '../../components/TextInputComp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../../navigation/Auth';
import toast from '../../utilities/toast';
import {api} from '../../constant/api';
import {stringMd5} from 'react-native-quick-md5';
import {useUserStore} from '../../constant/store';

const Index = ({navigation}) => {
  const [setUser] = useUserStore(state => [state.setUser]);
  const {signIn} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    if (email === '' || password === '') {
      toast('Please enter email and password');
      return;
    }

    try {
      console.log('email',email);
      console.log('password',stringMd5(password));
      setLoading(true);
      const res = await api.post('/admin', {
        admin_email: email,
        admin_password: password,
      });
      console.log(res.data);
      if (res.status === 200) {
        if (res.data.status === 'success') {
          addToken(res?.data?.data)
        } else {
          toast(res.data?.message);
        }
      } else {
        toast(res.data?.message);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const addToken = async (data) => {
    console.log('ID',data?.admin_id)
    try {
      const res = await api.post(`/admin/${data?.admin_id}`, {
        token: global.token,
      });
      setLoading(false);
      console.log(res.data);
      if (res.status === 200) {
        if (res.data.status === 'success') {
          await AsyncStorage.setItem('USER_TOKEN', '123');
          setUser(data);
          signIn('123');
        } else {
          toast(res.data?.message);
        }
      } else {
        toast(res.data?.message);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <Container>
      <View
        style={{
          width: '100%',
          flex: 1,
          padding: 15,
        }}>
        <View style={{marginVertical: '30%', alignSelf: 'center'}}>
          <TextComp
            style={{textAlign: 'center'}}
            fontSize={20}
            type="medium"
            color={colors.primary}
            text="Welcome Back"
          />
          <TextComp
            style={{textAlign: 'center'}}
            fontSize={12}
            color={colors.black}
            text="Sign in you account"
          />
        </View>
        <TextInputComp
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="email"
          keyboardType="email-address"
          type="email"
          onChangeText={setEmail}
          value={email}
        />
        <TextInputComp
          type="password"
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          texttype={true}
        />
        <Button onPress={onLogin} loading={loading} text="Login" />
      </View>
    </Container>
  );
};

export default Index;

const styles = StyleSheet.create({});
