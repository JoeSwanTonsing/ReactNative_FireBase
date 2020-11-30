import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';

const Spinner = ({size, color, spinnerText}) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} color={color} />
      <Text style={styles.spinnerText}>{spinnerText}</Text>
    </View>
  );
};

const styles = {
  spinnerStyle: {
    marginVertical: 15,
  },
  spinnerText: {
    marginTop: 10,
    color: '#264653',
    fontSize: 18,
  },
};

export default Spinner;
