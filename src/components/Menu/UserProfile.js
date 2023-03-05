import {View} from 'react-native';
import React from 'react';
import TextComp from '../TextComp';
import colors from '../../utilities/colors';
import margins from '../../utilities/margins';

const UserProfile = () => {
  return (
    <View style={{alignItems: 'center',marginTop:margins.m5}}>
      <View
        style={{
          width: 100,
          height: 100,
          borderRadius: 100,
          backgroundColor: colors.grey,
          borderWidth:5,
          borderColor:'#E7E9EE'
        }}></View>
      <TextComp style={{marginTop:margins.m5}} type="medium" color={colors.black} text="Hector"></TextComp>
      <TextComp
        type="normal"
        color={colors.black}
        text="maspes@gmail.com"></TextComp>
    </View>
  );
};

export default UserProfile;
