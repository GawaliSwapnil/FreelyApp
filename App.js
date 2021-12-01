import React, {Fragment, useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './components/navigation/BottomTabs';
import {Provider} from 'react-redux';
import store from './states/store';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    // <Provider store={store}>
    <Fragment>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </Fragment>
    // </Provider>
  );
};

export default App;
