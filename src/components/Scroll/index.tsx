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

let yCoords = [];

export const Scroll = ({ times }) => {
    const [currentIndex, setCurrentIndex] = useState(null);
    const [isLayoutFinished, setIsLayoutFinished] = useState(false);

    const ref = useRef(null);

    const scrollToIndex = (index) => {

        ref?.current?.scrollTo({
            x: 0,
            y: yCoords[index - 1],
            animated: true,
        });
    };

    const scroll = () => {
        const closest = getClosestTimeIndex(times);
        setCurrentIndex(closest);
        scrollToIndex(closest);
    };

    useEffect(
        () => {
            if (isLayoutFinished) {
                scroll();
                setIsLayoutFinished(false);
                yCoords = [];
            }
        },
        [isLayoutFinished],
    );


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

                        if (index === times.length - 1) {
                            setIsLayoutFinished(true);
                        }
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
