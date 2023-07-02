import React, {
    useEffect,
    useState,
} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
} from 'react-native';

import { getClosestStation } from '../../common/functions/getClosestStation';
import { getIsDayOff } from '../../common/functions/isDayOff';
import { parseScheduleString } from '../../common/functions/parseScheduleString';
import { Scroll } from '../../components/Scroll';
import { STATIONS } from '../../constants';

let location = null;

export const TimerScreen = () => {
    const [isDayOff, setIsDayOff] = useState(false);
    const [timesSouth, setTimesSouth] = useState([]);
    const [timesNorth, setTimesNorth] = useState([]);

    useEffect(() => {
        let minTimer;

        getClosestStation()
            .then((loc) => {
                location = loc;

                getIsDayOff()
                    .then((isOff) => {
                        setIsDayOff(!!isOff);

                        minTimer = setInterval(() => {
                            getClosestStation().then((newLoc) => {
                                location = newLoc;
                            });
                        }, 60000);

                        const southArr = parseScheduleString(STATIONS[location].departures.south?.[isDayOff
                            ? 'dayOff'
                            : 'workday'] || '');

                        const northArr = parseScheduleString(STATIONS[location].departures.north?.[isDayOff
                            ? 'dayOff'
                            : 'workday'] || '');

                        setTimesSouth(southArr);
                        setTimesNorth(northArr);
                    })
                    .catch((error) => {
                        console.log('getIsDayOff ERR');
                        console.log(error);
                    });
            });

        return () => {
            clearInterval(minTimer);
        };
    }, []);

    return (
        <SafeAreaView style={styles.scrollStyle}>
            <Text>
                isDayOff: {String(isDayOff)}
            </Text>

            {location && (
                <Text>
                    Ближайшая станция: {STATIONS[location].name}
                </Text>
            )}

            {timesSouth.length > 0 && (
                <>
                    <Text style={styles.bg}>В сторону "Ботаническая"</Text>
                    <Scroll times={timesSouth} />
                </>
            )}

            {timesNorth.length > 0 && (
                <>
                    <Text style={styles.bg}>
                        В сторону "Проспект космонавтов"
                    </Text>
                    <Scroll times={timesNorth} />
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
    bg: {
        backgroundColor: '#FFA500',
    },
});
