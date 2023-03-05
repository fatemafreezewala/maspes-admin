import {
  Image,
  Pressable,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import React from 'react';
import globalStyle from '../../styles/globalStyle';
import TextComp from '../TextComp';
import colors from '../../utilities/colors';
import margins from '../../utilities/margins';
import currency from '../../utilities/currency';

const Product = ({item, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          width: '48%',
          minHeight: 180,
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
        style={[{marginTop: margins.m10,marginHorizontal:'5%'}]}
        type="medium"
        text={item.name}
        fontSize={11}
        color={colors.black}></TextComp>
      <View style={[styles.row,{justifyContent:'space-between',marginHorizontal:'5%',marginVertical:'5%'}]}>
        <View style={styles.row}>
          <TextComp fontSize={12} color={colors.primary} text={currency}></TextComp>
          <TextComp
            type="medium"
            fontSize={12}
            color={colors.black}
            text={'150'}></TextComp>
        </View>
        <TouchableOpacity>
          <TextComp fontSize={12} color={colors.primary} text="Edit"></TextComp>
        </TouchableOpacity>
        <TouchableOpacity>
          <TextComp fontSize={12} color={colors.primary} text="Delete"></TextComp>
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

export default Product;
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});
