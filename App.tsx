import React, {
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';
import { TimerScreen } from './src/screens/TimerScreen';

export const AppContext = createContext({});

export const useAppContext = () => useContext(AppContext);

export const App = () => {
    const [isDayOff, setIsDayOff] = useState(false);

    useEffect(() => {
        alert('mount');
    }, []);

    return (
        <AppContext.Provider
            value={{
                isDayOff,
                setIsDayOff,
            }}
        >
            <TimerScreen />
        </AppContext.Provider>
    );
};
