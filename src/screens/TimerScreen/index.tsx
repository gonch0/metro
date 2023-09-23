import React, { useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
} from 'react-native';

import { useAppContext } from '../../../App';

import { parseScheduleString } from '../../common/functions/parseScheduleString';
import { Header } from '../../components/Header';
import { Scroll } from '../../components/Scroll';
import { STATIONS } from '../../constants';

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
                    north: parseScheduleString(STATIONS[location].departures.north?.[dayOffKey] || ''),
                    south: parseScheduleString(STATIONS[location].departures.south?.[dayOffKey] || ''),
                });
            }
        },
        [
            isDayOff,
            location,
        ],
    );

    return (
        <SafeAreaView style={styles.scrollStyle}>
            <Header />

            {times.north.length > 0 && appStatus === 'active' &&  (
                <>
                    <Text style={styles.direction}>В сторону "Проспект Космонавтов"</Text>
                    <Scroll times={times.north} />
                </>
            )}

            {times.south.length > 0 && appStatus === 'active' && (
                <>
                    <Text style={styles.direction}>В сторону "Ботаническая"</Text>
                    <Scroll times={times.south} />
                </>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    scrollStyle: {
        flex: 1,
        marginTop: 0,
        backgroundColor: 'white',
    },
    direction: {
        color: '#1b3505',
        backgroundColor: '#FFA07A',
        paddingVertical: 8,
        paddingHorizontal: 16,
        fontWeight: '500',
    },
});
