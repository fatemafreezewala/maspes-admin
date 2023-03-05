import {StyleSheet, View} from 'react-native';
import React from 'react';
import colors from '../../utilities/colors';
import Container from '../../components/Container';
import TextComp from '../../components/TextComp';
import Button from '../../components/Button';
import TextInputComp from '../../components/TextInputComp';
const Index = ({navigation}) => {
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
            text="Welcome Back"></TextComp>
          <TextComp
            style={{textAlign: 'center'}}
            fontSize={12}
            color={colors.black}
            text="Sign in you account"></TextComp>
        </View>
        <TextInputComp placeholder="Email"></TextInputComp>
        <TextInputComp type="password" placeholder="Password"></TextInputComp>
        <Button
          onPress={() => navigation.navigate('Tabnavigation')}
          loading={false}
          text="Login"></Button>
      </View>
    </Container>
  );
};

export default Index;

const styles = StyleSheet.create({});
