import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const IconMenu = ({label}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.textIcon}>icon</Text>
      </View>
      <Text style={styles.textIcon}>{label}</Text>
    </TouchableOpacity>
  );
};

export default IconMenu;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    margin: 5,
    padding: 5,
    width: 84,
    justifycontent: 'center',
    alighitems: 'center',
  },
  box: {
    borderWidth: 1,
    width: 72,
    height: 72,
    alighitems: 'center',
    borderRadius: 10,
  },
  textIcon: {
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
