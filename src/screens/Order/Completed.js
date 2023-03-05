import React from 'react';
import {FlatList, View} from 'react-native';
import Container from '../../components/Container';
import SubContainer from '../../components/SubContainer';

//demo Data
import orders from '../../data/orders';
import FlatlistComp from '../../components/FlatListComp';
import OrderCard from '../../components/Orders/OrderCard';
import SortingPill from '../../components/Orders/SortingPill';
import {useNavigation} from '@react-navigation/native';

const Completed = () => {
  const navigation = useNavigation();
  const renderTables = ({item}) => (
    <OrderCard
      onPress={() => navigation.navigate('OrderDetails')}
      item={item}></OrderCard>
  );
  const unique = [...new Set(orders.map(item => item.star))]; // [ 'A', 'B']
  console.log(unique);
  return (
    <Container>
      <SubContainer>
        <View style={{flexDirection: 'row', overflow: 'scroll'}}>
          {unique.map(res => (
            <SortingPill
              style={{padding: 4, minWidth: 100}}
              star={res}></SortingPill>
          ))}
        </View>
        <FlatlistComp
          DATA={orders}
          numberOfColumns={false}
          renderItem={renderTables}></FlatlistComp>
      </SubContainer>
    </Container>
  );
};

export default Completed;
