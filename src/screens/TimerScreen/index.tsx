import React, {
    useEffect,
    useState,
} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
} from 'react-native';

import { useAppContext } from '../../../App';
import { getClosestStation } from '../../common/functions/getClosestStation';
import { getIsDayOff } from '../../common/functions/isDayOff';
import { parseScheduleString } from '../../common/functions/parseScheduleString';
import { Header } from '../../components/Header';
import { Scroll } from '../../components/Scroll';
import { STATIONS } from '../../constants';

export const TimerScreen = () => {
    const {
        isDayOff,
        setIsDayOff,
        location,
        setLocation,
    } = useAppContext();

    const [times, setTimes] = useState({
        north: [],
        south: [],
    });

    useEffect(() => {
        let minTimer;

        Promise.all([
            getClosestStation(),
            getIsDayOff(),
        ]).then((res) => {
            const newLocation = res[0];
            setLocation(newLocation);

            setIsDayOff(!!res[1]);

            minTimer = setInterval(() => {
                getClosestStation().then((loc) => {
                    setLocation(loc);
                });
            }, 60000);

            const dayOffKey = isDayOff
                ? 'dayOff'
                : 'workday';

            setTimes({
                north: parseScheduleString(STATIONS[newLocation].departures.north?.[dayOffKey] || ''),
                south: parseScheduleString(STATIONS[newLocation].departures.south?.[dayOffKey] || ''),
            });
        });

        return () => {
            clearInterval(minTimer);
        };
    }, []);

    useEffect(() => {
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

            {times.south.length > 0 && (
                <>
                    <Text style={styles.direction}>В сторону "Ботаническая"</Text>
                    <Scroll times={times.south} />
                </>
            )}

            {times.north.length > 0 && (
                <>
                    <Text style={styles.direction}>В сторону "Проспект Космонавтов"</Text>
                    <Scroll times={times.north} />
                </>
            )}

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    scrollStyle: {
        flex: 1,
        marginTop: 0,
    },
    direction: {
        backgroundColor: 'orange',
        paddingVertical: 8,
        paddingHorizontal: 16,
        fontWeight: '500',
    },
});
