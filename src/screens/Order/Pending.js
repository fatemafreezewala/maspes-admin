import React, {useState, useEffect, useCallback} from 'react';
import Container from '../../components/Container';
import SubContainer from '../../components/SubContainer';

//demo Data
import orderss from '../../data/orders';
import FlatlistComp from '../../components/FlatListComp';
import OrderCard from '../../components/Orders/OrderCard';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {api} from '../../constant/api';
import OrderLoading from '../../components/Placeholders/OrderLoading';
import EmptyImage from '../../components/EmptyImage';
import { useUserStore } from '../../constant/store';

const Index = (props) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);

  // useFocusEffect(
  //   useCallback(() => {
  //     fetchPendingOrders();
  //   }, []),
  // );

  useEffect(() => {
    fetchPendingOrders();
  },[props])

  const fetchPendingOrders = async () => {
    try {
      setLoading(true);
      const res = await api.post('/orders', {
        status: '0',
      });
      setLoading(false);
      if (res.data.status === 'success') {
        console.log(res.data.data[0])
        setOrders(res.data.data);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  const updatePendingOrders = async (id,status,o_customer_id) => {
    try {
      setLoading(true);
      const res = await api.post(`/ordersstatus`, {
        status: status,
        order_id:id,
        user_id:o_customer_id,
      });
      if (res.data.status === 'success') {
        console.log(res.data)
        fetchPendingOrders();
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const renderTables = ({item}) => (
    <OrderCard
      onPress={() =>
        navigation.navigate('OrderDetails', {
          data: item,
        })
      }
      type={'Pending'}
      RPress={() => {updatePendingOrders(item?.order_id,'3',item?.o_customer_id)}}
      APress={() => {updatePendingOrders(item?.order_id,'1',item?.o_customer_id)}}
      item={item}
    />
  );

  return (
    <Container>
      <SubContainer>
        {loading && <OrderLoading />}
        {orders.length === 0 && <EmptyImage />}
        <FlatlistComp
          DATA={orders}
          numberOfColumns={false}
          renderItem={renderTables}
        />
      </SubContainer>
    </Container>
  );
};

export default Index;
