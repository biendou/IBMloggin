import React from 'react';
import {View, Image, StyleSheet, SafeAreaView} from 'react-native';
import Button from '../../components/button/index';

const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={require('../../assets/logo/IBM_logo_in.jpg')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.containerButton}>
        <Button onPress={() => navigation.navigate('Login')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerImage: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
  },

  containerButton: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // marginBottom: 36,
  },
});

export default WelcomeScreen;
