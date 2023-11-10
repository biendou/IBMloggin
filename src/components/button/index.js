import React from 'react';
import {TouchableOpacity, Image, StyleSheet, Text} from 'react-native';

const Button = ({onPress, source}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>Start</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default Button;
