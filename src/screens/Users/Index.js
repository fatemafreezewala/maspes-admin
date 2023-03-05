import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Header from '../../components/Header';
import colors from '../../utilities/colors';
import Container from '../../components/Container';
import SubContainer from '../../components/SubContainer';
import SearchBar from '../../components/SearchBar';

//demo Data
// import users from '../../data/users';
import FlatlistComp from '../../components/FlatListComp';
import UserCard from '../../components/User/UserCard';
import Fab from '../../components/Fab';
import {api} from '../../constant/api';

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await api.get('/admin/1');
      setLoading(false);
      if (res.status === 200) {
        if (res.data.status === 'success') {
          setUsers(res.data.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const renderUsers = ({item}) => <UserCard item={item} />;
  return (
    <Container>
      <Header text="Managers/Rps" color={colors.white} />
      <SubContainer>
        <SearchBar placeholder={'Search Users'} />
        <FlatlistComp
          DATA={users}
          numberOfColumns={false}
          renderItem={renderUsers}
        />
        <Fab />
      </SubContainer>
    </Container>
  );
};

export default Index;

const styles = StyleSheet.create({});
