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

export const Header = () => {
    const {
        isDayOff,
        setIsDayOff,
        location,
        setLocation,
    } = useAppContext();

    return (
        <View style={styles.headerStyle}>
            {location && (
                <View style={styles.row}>
                    <View>
                        <Text>
                            {`Ближайшая станция:`}
                        </Text>
                        <Text style={styles.bold}>
                            {STATIONS[location].name}
                        </Text>
                    </View>
                    <Button
                        title='Поменять'
                        onPress={() => setLocation('station6')}
                    />
                </View>
            )}

            <View style={styles.row}>
                <Text style={!isDayOff && styles.bold}>
                    Рабочий день
                </Text>
                <Switch
                    onValueChange={setIsDayOff}
                    value={isDayOff}
                />
                <Text style={isDayOff && styles.bold}>
                    Выходной день
                </Text>
            </View>
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
    bold: {
        fontWeight: 'bold',
    },
});
