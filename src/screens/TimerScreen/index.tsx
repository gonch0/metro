import React, { useEffect } from 'react';
import {
    SafeAreaView,
    Text,
} from 'react-native';

import { useAppContext } from '../../../App';

import { Header } from '../../components/Header';
import { Scroll } from '../../components/Scroll';
import { STATIONS } from '../../constants';
import { timerScreenStyles } from './styles';

export const TimerScreen = () => {
    const {
        isDayOff,
        location,
        times,
        setTimes,
        appStatus,
    } = useAppContext();

    useEffect(
        () => {
            if (location) {
                const dayOffKey = isDayOff
                    ? 'dayOff'
                    : 'workday';

                setTimes({
                    north: STATIONS[location].departures.north?.[dayOffKey] || '',
                    south: STATIONS[location].departures.south?.[dayOffKey] || '',
                });
            }
        },
        [
            isDayOff,
            location,
        ],
    );

    return (
        <SafeAreaView style={timerScreenStyles.scrollStyle}>
            <Header />

            {times.north.length > 0 && appStatus === 'active' && (
                <>
                    <Text style={timerScreenStyles.direction}>В сторону "Проспект Космонавтов"</Text>
                    <Scroll times={times.north} />
                </>
            )}

            {times.south.length > 0 && appStatus === 'active' && (
                <>
                    <Text style={timerScreenStyles.direction}>В сторону "Ботаническая"</Text>
                    <Scroll times={times.south} />
                </>
            )}
        </SafeAreaView>
    );
};
