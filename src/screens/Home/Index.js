import React from 'react';
import Header from '../../components/Header';
import colors from '../../utilities/colors';
import Container from '../../components/Container';
import SubContainer from '../../components/SubContainer';
import SearchBar from '../../components/SearchBar';

//demo Data
import categories from '../../data/categories';
import FlatlistComp from '../../components/FlatListComp';
import Categories from '../../components/Home/Categories';
import Fab from '../../components/Fab';

const Index = ({navigation}) => {
  const renderCategories = ({item}) => (
    <Categories
      onPress={() => navigation.navigate('Products')}
      item={item}></Categories>
  );

  return (
    <Container>
      <Header text="Category" color={colors.white}></Header>
      <SubContainer>
        <SearchBar placeholder="Search Category"></SearchBar>
        <FlatlistComp
          DATA={categories}
          numColumns={2}
          renderItem={renderCategories}></FlatlistComp>
        <Fab></Fab>
      </SubContainer>
    </Container>
  );
};

export default Index;
