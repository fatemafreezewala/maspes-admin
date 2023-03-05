import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../utilities/colors';
import TextComp from './TextComp';
import fontSize from '../utilities/fontSize';
import globalStyle from '../styles/globalStyle';

const Header = ({color, text}) => {
  return (
    <View
      style={[
        {height: '12%', backgroundColor: colors.primary, width: '100%'},
        globalStyle.rowCenter,
      ]}>
      <TextComp
        color={color}
        fontSize={fontSize.fs18}
        text={text}
        style={{textTransform: 'uppercase'}}
        type={'medium'}></TextComp>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
