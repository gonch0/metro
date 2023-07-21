import React from 'react';
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
} from 'react-native';
import { useAppContext } from '../../../App';
import { navigate } from '../../common/functions/navigation';

import { STATIONS } from '../../constants';

export const StationsScreen = () => {
    const {
        location,
        setLocation,
    } = useAppContext();

    console.log(location);

    return (
        <ScrollView style={styles.scrollStyle}>
            {Object.entries(STATIONS).map(([key, station]) => (
                <Pressable
                    key={key}
                    style={styles.item}
                    onPress={() => {
                        setLocation(key);
                        navigate('TimerScreen');
                    }}
                >
                    <Text
                        style={[
                            styles.title,
                            location === key && styles.bold,
                        ]}
                    >
                        {station.name}
                    </Text>
                </Pressable>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollStyle: {
        flex: 1,
        marginTop: 0,
    },
    item: {
        backgroundColor: '#038674',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        color: '#fff',
    },
    bold: {
        color: '#FFA07A',
        fontWeight: 'bold',
    },
});
