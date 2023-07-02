import React, {
    useEffect,
    useRef,
    useState,
} from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { getClosestTimeIndex } from '../../common/functions/getClosestTimeIndex';

const yCoords = [];

export const Scroll = ({ times }) => {
    const [currentIndex, setCurrentIndex] = useState(null);

    const ref = useRef();

    const scrollToIndex = (index) => {
        ref?.current?.scrollTo({
            x: 0,
            y: index > 3
                ? yCoords[index - 3]
                : yCoords[index],
            animated: true,
        });
    };

    const scroll = () => {
        const closest = getClosestTimeIndex(times);
        setCurrentIndex(closest);
        scrollToIndex(closest);
    };

    useEffect(() => {
        let timer;

        setTimeout(() => {
            scroll();
        }, 1000);

        timer = setInterval(() => {
            scroll();
        }, 5000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <ScrollView
            style={styles.scrollStyle}
            ref={ref}
        >
            {times.map((item, index) => (
                <View
                    key={item}
                    style={styles.item}
                    onLayout={(event) => {
                        const layout = event.nativeEvent.layout;
                        yCoords[index] = layout.y;
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
    );
};

const styles = StyleSheet.create({
    scrollStyle: {
        flex: 1,
        marginTop: 0,
    },
    item: {
        backgroundColor: '#038674',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        color: '#fff',
    },
    bold: {
        color: '#FFA07A',
        fontWeight: 'bold',
    },
});
