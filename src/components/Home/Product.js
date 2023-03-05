import {
  Image,
  Pressable,
  TouchableOpacity,
  View,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import globalStyle from '../../styles/globalStyle';
import TextComp from '../TextComp';
import colors from '../../utilities/colors';
import margins from '../../utilities/margins';
import currency from '../../utilities/currency';
import {api, imageUrl} from '../../constant/api';
import toast from '../../utilities/toast';

const Product = ({item, onPress, fetchProducts}) => {
  const [loading, setLoading] = useState(false);
  const deleteAlert = () => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to delete this product?',
      [
        {
          text: 'Yes',
          onPress: deleteProduct,
        },
        {
          text: 'Cancel',
          onPress: () => {},
        },
      ],
    );
  };

  const deleteProduct = async () => {
    try {
      setLoading(true);
      const res = await api.delete('/product/' + item.prod_id);
      // console.log(res.data.data);
      setLoading(false);
      console.log(res.data);
      if (res.data.status === 'success') {
        toast('Product deleted successfully');
        fetchProducts();
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        source={{uri: `${imageUrl}/${item.prod_name_image}`}}
      />
      <TextComp
        style={[{marginTop: margins.m10, marginHorizontal: '5%'}]}
        type="medium"
        text={item.prod_name_en}
        fontSize={11}
        color={colors.black}
      />
      <View
        style={[
          styles.row,
          {
            justifyContent: 'space-between',
            marginHorizontal: '5%',
            marginVertical: '5%',
          },
        ]}>
        <View style={styles.row}>
          <TextComp fontSize={12} color={colors.primary} text={currency} />
          <TextComp
            type="medium"
            fontSize={12}
            color={colors.black}
            text={item.prod_offer_price}
          />
        </View>
        <TouchableOpacity>
          <TextComp fontSize={12} color={colors.primary} text="Edit" />
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteAlert}>
          <TextComp fontSize={12} color={colors.primary} text="Delete" />
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
