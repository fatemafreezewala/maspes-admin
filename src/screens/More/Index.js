import React, {useContext} from 'react';
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
import AuthContext from '../../navigation/Auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useUserStore} from '../../constant/store';

const Index = ({navigation}) => {
  const {signOut} = useContext(AuthContext);
  const [user, clear] = useUserStore(s => [s.user, s.clear]);

  const renderMenu = ({item}) => (
    <Card
      onPress={async () => {
        if (item.name === 'Logout') {
          console.log('Logout pressed');
          await AsyncStorage.removeItem('USER_TOKEN');
          clear();
          signOut();
        } else {
          console.log('tables');
          navigation.navigate('Tables');
        }
      }}
      item={item}
    />
  );

  return (
    <Container>
      <Header text="MORE" color={colors.white} />
      <SubContainer>
        <ScrollView showsVerticalScrollIndicator={false}>
          <UserProfile data={user} />
          <Divider style={{marginTop: margins.m5}} />
          <FlatlistComp
            style={{marginTop: margins.m5}}
            DATA={menu}
            numberOfColumns={false}
            renderItem={renderMenu}
          />
        </ScrollView>
      </SubContainer>
    </Container>
  );
};

export default Index;
