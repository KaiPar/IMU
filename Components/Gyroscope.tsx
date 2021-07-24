import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
    gyroscope,
    setUpdateIntervalForType,
    SensorTypes
  } from "react-native-sensors";

setUpdateIntervalForType(SensorTypes.gyroscope, 400); 

const X_data = () => {
    const [X, setX] = useState(0);

    useEffect(() => {
        gyroscope.subscribe(({x, y, z, timestamp}) => {
            setX(x);
        });
    }, []);

    return <Text style={styles.Gyroscope}>X: {X}</Text>
}

const Y_Data = () => {
    const [Y, setY] = useState(0);

    useEffect(() => {
        gyroscope.subscribe(({x, y, z, timestamp}) => {
            setY(y);
        });
    }, []);

    return <Text style={styles.Gyroscope}>Y: {Y}</Text>
}

const Z_data = () => {
    const [Z, setZ] = useState(0);

    useEffect(() => {
        gyroscope.subscribe(({x, y, z, timestamp}) => {
            setZ(z);
        });
    }, []);

    return <Text style={styles.Gyroscope}>Z: {Z}</Text>
}


const Gyroscope = () => {
  return (
    <View>
      <Text style={styles.Gyroscope}>
          <Text style={{fontWeight: 'bold'}}>Gyroscope Data</Text>
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
  Gyroscope: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    paddingTop: 50
  }
});

export default Gyroscope;
