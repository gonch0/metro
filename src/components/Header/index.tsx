import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Switch,
} from 'react-native';
import { useAppContext } from '../../../App';

import { STATIONS } from '../../constants';

export const Header = ({ location }) => {
    const {
        isDayOff,
        setIsDayOff,
    } = useAppContext();

    return (
        <View style={styles.headerStyle}>
            <View style={styles.row}>
                <Text>
                    Сегодня выходной
                </Text>
                <Switch
                    onValueChange={setIsDayOff}
                    value={isDayOff}
                />
            </View>

            {location && (
                <View style={styles.row}>
                    <Text>
                        {STATIONS[location].name}
                    </Text>

                    <Button title='Сменить станцию' />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerStyle: {
        marginVertical: 8,
        marginHorizontal: 16,
    },
});
