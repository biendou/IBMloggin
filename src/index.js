import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, WelcomeScreen, Main} from './screens';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const BlockScreen = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return <>{isAuthenticated ? <Main /> : <NavigationApp />}</>;
};

const NavigationApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={LoginScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BlockScreen;
