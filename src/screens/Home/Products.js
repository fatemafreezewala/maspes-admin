import React from 'react';
import Header from '../../components/Header';
import colors from '../../utilities/colors';
import Container from '../../components/Container';
import SubContainer from '../../components/SubContainer';
import SearchBar from '../../components/SearchBar';

//demo Data
import product from '../../data/product';
import FlatlistComp from '../../components/FlatListComp';
import Product from '../../components/Home/Product';
import Fab from '../../components/Fab';

const Index = ({navigation}) => {
  const renderProduct = ({item}) => (
    <Product
      onPress={() => navigation.navigate('Tables')}
      item={item}></Product>
  );

  return (
    <Container>
      <Header text="Product" color={colors.white}></Header>
      <SubContainer>
        <SearchBar placeholder="Search products"></SearchBar>
        <FlatlistComp
          DATA={product}
          numColumns={2}
          renderItem={renderProduct}></FlatlistComp>
        <Fab></Fab>
      </SubContainer>
    </Container>
  );
};

export default Index;
