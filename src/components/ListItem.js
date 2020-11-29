import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default function ListItem({title, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = {
  container: {
    marginVertical: 10,
    padding: 15,
    paddingBottom: 7,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  text: {
    fontSize: 16,
  },
};
