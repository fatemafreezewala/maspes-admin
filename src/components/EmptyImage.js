import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import emptyIcon from '../utilities/icons/empty';
import {SvgXml} from 'react-native-svg';

const EmptyImage = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
      }}>
      <SvgXml xml={emptyIcon()} />
    </View>
  );
};

export default EmptyImage;

const styles = StyleSheet.create({});
