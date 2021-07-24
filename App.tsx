import React from 'react';
import {
  View,
} from 'react-native';
import Accelerometer from './Components/Accelerometer';
import GPS from './Components/GPS';
import Gyroscope from './Components/Gyroscope';
import Header from './Components/Header';
import SendData from './Components/SendData';


const App = () => {
  return (
    <View>
      <Header />
      <Gyroscope />
      <Accelerometer />
      <GPS />
      <SendData />
    </View>
  );
};


export default App;
