import React from 'react';
import Container from '../../components/Container';
import SubContainer from '../../components/SubContainer';

//demo Data
import orders from '../../data/orders';
import FlatlistComp from '../../components/FlatListComp';
import OrderCard from '../../components/Orders/OrderCard';
import {useNavigation} from '@react-navigation/native';

const Index = () => {
  const navigation = useNavigation();
  const renderTables = ({item}) => (
    <OrderCard
      onPress={() => navigation.navigate('OrderDetails')}
      item={item}></OrderCard>
  );

  return (
    <Container>
      <SubContainer>
        <FlatlistComp
          DATA={orders}
          numberOfColumns={false}
          renderItem={renderTables}></FlatlistComp>
      </SubContainer>
    </Container>
  );
};

export default Index;
