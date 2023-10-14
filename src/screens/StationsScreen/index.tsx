import React from 'react';
import {
    Pressable,
    ScrollView,
    Text,
    View,
} from 'react-native';

import { useAppContext } from '../../../App';
import { navigate } from '../../common/functions/navigation';

import { STATIONS } from '../../constants';
import { stationsScreenStyles } from './styles';

export const StationsScreen = () => {
    const {
        location,
        setLocation,
    } = useAppContext();

    return (
        <ScrollView style={stationsScreenStyles.scrollStyle}>
            <View style={stationsScreenStyles.wrapper}>
                {Object.entries(STATIONS).map(([key, station]) => (
                    <Pressable
                        key={key}
                        style={stationsScreenStyles.item}
                        onPress={() => {
                            setLocation(key);
                            navigate('TimerScreen');
                        }}
                    >
                        <Text
                            style={[
                                stationsScreenStyles.title,
                                location === key && stationsScreenStyles.bold,
                            ]}
                        >
                            {station.name}
                        </Text>
                    </Pressable>
                ))}
            </View>
        </ScrollView>
    );
};
