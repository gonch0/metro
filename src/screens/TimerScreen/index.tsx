import React, {
    useEffect,
    useRef,
    useState,
} from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    FlatList,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { getClosestTimeIndex } from '../../common/functions/getClosestTimeIndex';
import { getDistance } from '../../common/functions/getDistance';

import { requestLocationPermission } from '../../common/functions/requestLocationPermission';
import { STATION1 } from '../../constants/coords';

export const TimerScreen = () => {
    const [location, setLocation] = useState(false);
    const [distance, setDistance] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);

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
    };

    const scroll = () => {
        const closest = getClosestTimeIndex(STATION1.departuresDefault);
        setCurrentIndex(closest);
        scrollToIndex(closest);
    };

    useEffect(() => {
        getLocation();

        setTimeout(() => {
            scroll();
        }, 3000);

        let minTimer = setInterval(() => {
            getLocation();
            scroll();
        }, 60000);

        return () => {
            clearInterval(minTimer);
        };
    }, []);

    const Item = ({
        title,
        index,
    }) => (
        <View style={styles.item}>
            <Text
                style={[
                    styles.title,
                    index === currentIndex && styles.bold,
                ]}
            >{title}</Text>
        </View>
    );

    const ref = useRef();

    const scrollToIndex = index => {
        ref?.current?.scrollToIndex({
            animated: true,
            index: index,
        });
    };

    return (
        <SafeAreaView style={styles.scrollStyle}>
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

            <FlatList
                data={STATION1.departuresDefault}
                renderItem={({
                    item,
                    index,
                }) => <Item
                    title={item}
                    index={index}
                />}
                keyExtractor={(index) => String(index)}
                ref={ref}
                onScrollToIndexFailed={() => {}}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    scrollStyle: {
        flex: 1,
        marginTop: 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
    },
    bold: {
        fontWeight: 'bold',
    },
});
