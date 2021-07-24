import React, { useEffect, useRef, useState } from 'react';
import {
    Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
    gyroscope,
    accelerometer,
    setUpdateIntervalForType,
    SensorTypes
} from "react-native-sensors";


setUpdateIntervalForType(SensorTypes.gyroscope, 400);
setUpdateIntervalForType(SensorTypes.accelerometer, 400);

const SendData = () => {
    const [isPaused, setPause] = useState(false);
    const ws = useRef<any | null>(null);

    useEffect(() => {
        ws.current = new WebSocket("http://127.0.0.1:5000/");
        ws.current.onopen = () => console.log("ws opened");
        ws.current.onclose = () => console.log("ws closed");

        return () => {
            ws.current.close();
        };
    }, []);

    useEffect(() => {
        if (!ws.current) return;

        ws.current.onmessage = (e: { data: string; }) => {
            if (isPaused) return;
            const message = JSON.parse(e.data);
            console.log("e", message);
        };
    }, [isPaused]);

    return (
        <View>
            <Button
                title="Button"
                onPress={() => setPause(!isPaused)}
            />
        </View>
    );
}

export default SendData;