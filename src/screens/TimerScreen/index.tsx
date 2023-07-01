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
                        }, 4000);

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
                    Closest: {STATIONS[location].name}
                </Text>
            )}

            <Text style={styles.bg}>
                south
            </Text>
            {timesSouth.length > 0 && <Scroll times={timesSouth} />}

            <Text style={styles.bg}>
                north
            </Text>

            {timesNorth.length > 0 && <Scroll times={timesNorth} />}
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
