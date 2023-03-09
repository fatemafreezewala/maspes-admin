import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Header from '../../components/Header';
import colors from '../../utilities/colors';
import Container from '../../components/Container';
import SubContainer from '../../components/SubContainer';
import SearchBar from '../../components/SearchBar';
import FlatlistComp from '../../components/FlatListComp';
import Product from '../../components/Home/Product';
import Fab from '../../components/Fab';
import {api} from '../../constant/api';
import {useFocusEffect} from '@react-navigation/native';
import CategoryLoading from '../../components/Placeholders/CategoryLoading';
import TextComp from '../../components/TextComp';
import Icon from 'react-native-vector-icons/AntDesign';

const Notifications = () => {
  return (
    <Container>
      <Header text="Notifications" color={colors.white} showBack />
      <SubContainer>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7]}
          renderItem={() => {
            return (
              <View style={styles.card}>
                <Icon
                  name="bells"
                  color={colors.primary}
                  size={25}
                  style={{marginTop: 5}}
                />
                <View style={{flex: 1, marginLeft: 10}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <TextComp
                      text="New Order Received"
                      type="medium"
                      style={{flex: 1}}
                    />
                    <TextComp
                      text="5 min ago"
                      type="medium"
                      color={colors.primary}
                    />
                  </View>
                  <TextComp text="You have received a new notifiction, please check it" />
                </View>
              </View>
            );
          }}
        />
      </SubContainer>
    </Container>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#dde3ed',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    flexDirection: 'row',
  },
});
