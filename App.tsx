import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppState } from 'react-native';

import { getClosestStation } from './src/common/functions/getClosestStation';
import { getIsDayOff } from './src/common/functions/isDayOff';
import { navigationRef } from './src/common/functions/navigation';
import { parseScheduleString } from './src/common/functions/parseScheduleString';
import { Loader } from './src/components/Loader';
import { STATIONS } from './src/constants';
import { StationsScreen } from './src/screens/StationsScreen';
import { TimerScreen } from './src/screens/TimerScreen';

export const AppContext = createContext({});

export const useAppContext = () => useContext(AppContext);

const Stack = createNativeStackNavigator();

export const App = () => {
    const [isDayOff, setIsDayOff] = useState(false);
    const [location, setLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [times, setTimes] = useState({
        north: [],
        south: [],
    });
    const appState = useRef(AppState.currentState);
    const [appStatus, setAppStatus] = useState(appState.current);
    const isPermissionFetching = useRef(false);

    const getTimesAndStations = () => {
        Promise.all([
            getClosestStation(),
            getIsDayOff(),
        ]).then(([newLocation, isOff]) => {
            setLocation(newLocation);
            setIsDayOff(isOff);

            const dayOffKey = isDayOff
                ? 'dayOff'
                : 'workday';

            setTimes({
                north: parseScheduleString(STATIONS[newLocation].departures.north?.[dayOffKey] || ''),
                south: parseScheduleString(STATIONS[newLocation].departures.south?.[dayOffKey] || ''),
            });
        }).finally(() => {
            setIsLoading(false);
            isPermissionFetching.current = false;
        });
    };

    useEffect(() => {
        const subscription = AppState.addEventListener('change', (nextAppState) => {
            if (nextAppState === 'active' && !isPermissionFetching.current) {
                isPermissionFetching.current = true;
                getTimesAndStations();
            }
            appState.current = nextAppState;
            setAppStatus(appState.current);
        });

        return () => {
            subscription.remove();
        };
    }, []);

    if (isLoading) {
        return (
            <Loader />
        );
    }

    return (
        <AppContext.Provider
            value={{
                isDayOff,
                setIsDayOff,
                location,
                setLocation,
                times,
                setTimes,
                appStatus,
            }}
        >
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator>
                    <Stack.Screen
                        name='TimerScreen'
                        component={TimerScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name='StationsScreen'
                        component={StationsScreen}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </AppContext.Provider>
    );
};
