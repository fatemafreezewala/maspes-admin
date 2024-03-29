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

const Rejected = (props) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);

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
        status: '3',
      });
      setLoading(false);
      if (res.data.status === 'success') {
        setOrders(res.data.data);
      }
    } catch (error) {
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

export default Rejected;