import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FAB} from 'react-native-paper';
import colors from '../utilities/colors';

const Fab = ({icon="plus"}) => {
  return (
    <FAB
      style={styles.fab}
      icon={icon} color='#fff'></FAB>
  );
};

export default Fab;

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        height: 60,
        width: 60,
        borderRadius: 60,
        right: 0,
        bottom: 0,
        backgroundColor: colors.primary,
      },
});
