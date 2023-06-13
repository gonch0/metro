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
    ScrollView,
} from 'react-native';
import { getClosestStation } from '../../common/functions/getClosestStation';

import { getClosestTimeIndex } from '../../common/functions/getClosestTimeIndex';
import { getLocation } from '../../common/functions/getLocation';
import { STATIONS } from '../../constants/coords';

export const TimerScreen = () => {
    const [location, setLocation] = useState('');
    const [distance, setDistance] = useState('');
    const [currentIndex, setCurrentIndex] = useState(null);
    const [yCoords, setYCoords] = useState([]);

    const ref = useRef();

    const scrollToIndex = (index) => {
        ref?.current?.scrollTo({
            x: 0,
            y: yCoords[index - 1],
            animated: true,
        });
    };

    const scroll = () => {
        const closest = getClosestTimeIndex(STATIONS.station1.departuresDefault);
        setCurrentIndex(closest);
        scrollToIndex(closest);
    };

    useEffect(() => {
        // getLocation(setLocation, setDistance);
        getClosestStation(setLocation, setDistance);

        setTimeout(() => {
            scroll();
        }, 500);

        let minTimer = setInterval(() => {
            getLocation(setLocation, setDistance);
            getClosestStation(setLocation, setDistance);
            scroll();
        }, 5000);

        return () => {
            clearInterval(minTimer);
        };
    }, []);

    return (
        <SafeAreaView style={styles.scrollStyle}>
            <Text>
                Closest: {location}
            </Text>
            <Text>
                Distance to ST1: {distance
                ? distance
                : null} km
            </Text>

            <ScrollView
                style={styles.scrollStyle}
                ref={ref}
            >
                {STATIONS.station1.departuresDefault.map((item, index) => (
                    <View
                        key={item}
                        style={styles.item}
                        onLayout={(event) => {
                            const layout = event.nativeEvent.layout;
                            yCoords[index] = layout.y;
                            setYCoords(yCoords);
                        }}
                    >
                        <Text
                            style={[
                                styles.title,
                                index === currentIndex && styles.bold,
                            ]}
                        >
                            {item}
                        </Text>
                    </View>
                ))}
            </ScrollView>
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
