import {StyleSheet} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import colors from '../../utilities/colors';
import Container from '../../components/Container';
import SubContainer from '../../components/SubContainer';
import SearchBar from '../../components/SearchBar';

//demo Data
import users from '../../data/users';
import FlatlistComp from '../../components/FlatListComp';
import UserCard from '../../components/User/UserCard';
import Fab from '../../components/Fab';

const Index = () => {
  const renderUsers = ({item}) => <UserCard item={item}></UserCard>;
  return (
    <Container>
      <Header text="Managers/Rps" color={colors.white}></Header>
      <SubContainer>
        <SearchBar placeholder={'Search Users'}></SearchBar>
        <FlatlistComp
          DATA={users}
          numberOfColumns={false}
          renderItem={renderUsers}></FlatlistComp>
        <Fab></Fab>
      </SubContainer>
    </Container>
  );
};

export default Index;

const styles = StyleSheet.create({});
