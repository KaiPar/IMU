import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
    accelerometer,
    setUpdateIntervalForType,
    SensorTypes
  } from "react-native-sensors";

setUpdateIntervalForType(SensorTypes.accelerometer, 400); 

const X_data = () => {
    const [X, setX] = useState(0);

    useEffect(() => {
        accelerometer.subscribe(({x, y, z, timestamp}) => {
            setX(x);
        });
    }, []);

    return <Text style={styles.Accelerometer}>X: {X}</Text>
}

const Y_Data = () => {
    const [Y, setY] = useState(0);

    useEffect(() => {
        accelerometer.subscribe(({x, y, z, timestamp}) => {
            setY(y);
        });
    }, []);

    return <Text style={styles.Accelerometer}>Y: {Y}</Text>
}

const Z_data = () => {
    const [Z, setZ] = useState(0);

    useEffect(() => {
        accelerometer.subscribe(({x, y, z, timestamp}) => {
            setZ(z);
        });
    }, []);

    return <Text style={styles.Accelerometer}>Z: {Z}</Text>
}


const Accelerometer = () => {
  return (
    <View>
      <Text style={styles.Accelerometer}>
          <Text style={{fontWeight: 'bold'}}>Accelerometer Data</Text>
          {"\n"}
          <X_data />
          {"\n"}
          <Y_Data />
          {"\n"}
          <Z_data />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Accelerometer: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    paddingTop: 50
  }
});

export default Accelerometer;
