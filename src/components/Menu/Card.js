import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextComp from '../TextComp';
import colors from '../../utilities/colors';
import {SvgXml} from 'react-native-svg';
import margins from '../../utilities/margins';

const Card = ({item}) => {
  const xml = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 17L15 12" stroke=${colors.primary} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15 12L10 7" stroke=${colors.primary} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;
  return (
    <View style={styles.row}>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <SvgXml xml={item.image}></SvgXml>
        <TextComp
        style={{marginLeft:margins.m5}}
          text={item.name}
          type="medium"
          color={colors.black}></TextComp>
      </View>
      <SvgXml xml={xml}></SvgXml>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#EFEFEF',
    minHeight:70,
    marginTop:margins.m5,
    borderRadius:15,
    padding:10,
    alignItems:'center'
  },
});
