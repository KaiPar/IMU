import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const GPS = () => {  
  return (
    <View>
      <Text style={styles.GPS}>
          <Text style={{fontWeight: 'bold'}}>GPS Data</Text>
          {"\n"}
          Latitude: lat
          {"\n"}
          Longitude: long
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  GPS: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    paddingTop: 50
  }
});

export default GPS;
