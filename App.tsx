import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {
    createContext,
    useContext,
    useState,
} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/common/functions/navigation';
import { StationsScreen } from './src/screens/StationsScreen';
import { TimerScreen } from './src/screens/TimerScreen';

export const AppContext = createContext({});

export const useAppContext = () => useContext(AppContext);

const Stack = createNativeStackNavigator();

export const App = () => {
    const [isDayOff, setIsDayOff] = useState(false);
    const [location, setLocation] = useState(null);

    return (
        <AppContext.Provider
            value={{
                isDayOff,
                setIsDayOff,
                location,
                setLocation,
            }}
        >
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator>
                    <Stack.Screen
                        name={'TimerScreen'}
                        component={TimerScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name={'StationsScreen'}
                        component={StationsScreen}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </AppContext.Provider>
    );
};
