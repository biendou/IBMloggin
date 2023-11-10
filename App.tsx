import * as React from 'react';
import store from './src/app/store';
import {Provider} from 'react-redux';
import NavigationApp from './src';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationApp />
    </Provider>
  );
};

export default App;
