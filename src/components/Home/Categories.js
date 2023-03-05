import {Image, Pressable} from 'react-native';
import React from 'react';
import globalStyle from '../../styles/globalStyle';
import TextComp from '../TextComp';
import colors from '../../utilities/colors';
import margins from '../../utilities/margins';

const Categories = ({item, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          width: '48%',
          height: 180,
          marginLeft: '2%',
          borderWidth: 1,
          borderColor: colors.borderColor,
          marginTop: margins.m5,
          borderRadius: 10,
        },
      ]}>
      <Image
        style={[
          globalStyle.w100,
          {height: 120, borderTopLeftRadius: 10, borderTopRightRadius: 10},
        ]}
        source={item.image}></Image>
      <TextComp
        style={[{textAlign: 'center', marginTop: margins.m10}]}
        type="medium"
        text={item.name}
        fontSize={12}
        color={colors.black}></TextComp>
    </Pressable>
  );
};

export default Categories;
