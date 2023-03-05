import React from 'react';
import Header from '../../components/Header';
import colors from '../../utilities/colors';
import Container from '../../components/Container';
import SubContainer from '../../components/SubContainer';
import UserProfile from '../../components/Menu/UserProfile';
import FlatlistComp from '../../components/FlatListComp';
import Card from '../../components/Menu/Card';
import {Divider} from 'react-native-paper';
import {ScrollView} from 'react-native';
//demo Data
import menu from '../../data/menu';
import margins from '../../utilities/margins';

const Index = ({navigation}) => {
  const renderMenu = ({item}) => (
    <Card onPress={() => navigation.navigate('Tables')} item={item}></Card>
  );

  return (
    <Container>
      <Header text="MORE" color={colors.white}></Header>
      <SubContainer>
        <ScrollView showsVerticalScrollIndicator={false}>
          <UserProfile></UserProfile>
          <Divider style={{marginTop: margins.m5}}></Divider>
          <FlatlistComp
            style={{marginTop: margins.m5}}
            DATA={menu}
            numberOfColumns={false}
            renderItem={renderMenu}></FlatlistComp>
        </ScrollView>
      </SubContainer>
    </Container>
  );
};

export default Index;
