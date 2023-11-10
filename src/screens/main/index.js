import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const Main = () => {
  const username = useSelector(state => state.auth.username);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{username}</Text>
      <Text>Hello from space !</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Main;
