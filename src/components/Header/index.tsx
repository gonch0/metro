import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Switch,
} from 'react-native';

import { useAppContext } from '../../../App';
import { navigate } from '../../common/functions/navigation';
import { STATIONS } from '../../constants';

export const Header = () => {
    const {
        isDayOff,
        setIsDayOff,
        location,
    } = useAppContext();

    return (
        <View style={styles.headerStyle}>
            {location && (
                <View
                    style={[
                        styles.row,
                        styles.mb,
                    ]}
                >
                    <View>
                        <Text style={styles.text}>Ближайшая станция:</Text>
                        <Text
                            style={[
                                styles.text,
                                styles.bold,
                            ]}
                        >
                            {STATIONS[location].name}
                        </Text>
                    </View>
                    <Button
                        title='Поменять'
                        onPress={() => {

                            navigate('StationsScreen');
                        }}
                    />
                </View>
            )}

            <View style={styles.row}>
                <Text
                    style={[
                        styles.text,
                        !isDayOff && styles.bold,
                    ]}
                >
                    Рабочий день
                </Text>

                <Switch
                    trackColor={{false: 'grey'}}
                    onValueChange={setIsDayOff}
                    value={isDayOff}
                />

                <Text
                    style={[
                        styles.text,
                        isDayOff && styles.bold,
                    ]}
                >
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
    mb: {
        marginBottom: 8,
    },
    headerStyle: {
        marginVertical: 8,
        marginHorizontal: 16,
    },
    bold: {
        fontWeight: 'bold',
    },
    text: {
        color: 'grey',
    },
});
