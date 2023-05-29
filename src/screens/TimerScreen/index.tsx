import React, {
    useEffect,
    useState,
} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { getDistance } from '../../common/functions/getDistance';

import { requestLocationPermission } from '../../common/functions/requestLocationPermission';
import { STATION1 } from '../../constants/coords';

export const TimerScreen = () => {
    const [currentTime, setCurrentTime] = useState('');
    const [location, setLocation] = useState(false);
    const [distance, setDistance] = useState(false);

    const getLocation = () => {
        const result = requestLocationPermission();

        result.then(res => {
            if (res) {
                Geolocation.getCurrentPosition(
                    position => {
                        setLocation(position);

                        const dist = getDistance(
                            position.coords.latitude,
                            position.coords.longitude,
                            STATION1.coords.latitude,
                            STATION1.coords.longitude,
                        );

                        setDistance(dist);
                    },
                    error => {
                        console.log(error.code, error.message);
                        setLocation(false);
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 15000,
                        maximumAge: 10000,
                    },
                );
            }
        });
        console.log(location);
    };

    useEffect(() => {
        const hours = new Date().getHours();
        const minutes = new Date().getMinutes();

        setCurrentTime(`${hours}:${minutes}`);
        getLocation();
    }, []);

    return (
        <View>
            <Text>Time: {currentTime}</Text>
            <Text>
                Latitude: {location
                ? location.coords.latitude
                : null}
            </Text>
            <Text>
                Longitude: {location
                ? location.coords.longitude
                : null}
            </Text>
            <Text>
                Distance to ST1: {distance
                ? distance
                : null} km
            </Text>

            <ScrollView
                style={styles.scrollStyle}
            >
                {STATION1.departuresDefault.map((item) => (
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 24,
                        }}
                    >{item}</Text>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollStyle: {
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});
