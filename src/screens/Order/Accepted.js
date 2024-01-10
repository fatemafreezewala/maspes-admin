import React, {useState, useCallback, useEffect} from 'react';
import Container from '../../components/Container';
import SubContainer from '../../components/SubContainer';

//demo Data
// import orders from '../../data/orders';
import FlatlistComp from '../../components/FlatListComp';
import OrderCard from '../../components/Orders/OrderCard';
import {useNavigation} from '@react-navigation/native';
import {api} from '../../constant/api';
import OrderLoading from '../../components/Placeholders/OrderLoading';
import {useFocusEffect} from '@react-navigation/native';
import EmptyImage from '../../components/EmptyImage';
import { useUserStore } from '../../constant/store';

const Accepted = (props) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [user, clear] = useUserStore(s => [s.user, s.clear]);

  // useFocusEffect(
  //   useCallback(() => {
  //     fetchAcceptedOrders();
  //   }, []),
  // );

  useEffect(() => {
    fetchAcceptedOrders();
  },[props])


  const fetchAcceptedOrders = async () => {
    try {
      setLoading(true);
      const res = await api.post('/orders', {
        status: '1',
      });
      setLoading(false);
      if (res.data.status === 'success') {
        setOrders(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updatePendingOrders = async (id,status,o_customer_id,amount) => {
    try {
      setLoading(true);
      const res = await api.post(`/ordersstatus`, {
        status: status,
        order_id:id,
        user_id:o_customer_id,
      });
      if (res.data.status === 'success') {
        console.log(res.data)
        rewards(id,o_customer_id,amount);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const rewards = async (id,o_customer_id,amount) => {
    console.log('ID',id)
    console.log('o_customer_id',o_customer_id)
    console.log('amount',amount)
    try {
      setLoading(true);
      const res = await api.put(`/rewards`, {
        reward_amout: amount,
        order_id:id,
        user_id:o_customer_id,
      });
      if (res.data.status === 'success') {
        console.log(res.data);
        fetchAcceptedOrders();
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
      type={'Accepted'}
      CPress={() => {
        updatePendingOrders(item?.order_id,'2',item?.o_customer_id,item.o_total_amount/10/2)
      }}
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

export default Accepted;
