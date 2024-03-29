import React, {
    useEffect,
    useRef,
    useState,
} from 'react';
import {
    ScrollView,
    Text,
    View,
} from 'react-native';
import { useAppContext } from '../../../App';

import { getClosestTimeIndex } from '../../common/functions/getClosestTimeIndex';
import { scrollStyles } from './styles';

let yCoords = [];

export const Scroll = ({ times }) => {
    const { location } = useAppContext();
    const [currentIndex, setCurrentIndex] = useState(null);
    const [isLayoutFinished, setIsLayoutFinished] = useState(false);

    const ref = useRef(null);

    const offset = [
        'station1',
        'station9',
    ].includes(location)
        ? 2
        : 1;

    const scrollToIndex = (index) => {
        ref?.current?.scrollTo({
            x: 0,
            y: yCoords[index - offset],
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
            style={scrollStyles.scrollStyle}
            ref={ref}
        >
            {times.map((item, index) => (
                <View
                    key={item}
                    style={scrollStyles.item}
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
                            scrollStyles.title,
                            index === currentIndex && scrollStyles.bold,
                        ]}
                    >
                        {item}
                    </Text>
                </View>
            ))}
        </ScrollView>
    );
};
