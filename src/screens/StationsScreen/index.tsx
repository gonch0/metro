import React from 'react';
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { useAppContext } from '../../../App';
import { navigate } from '../../common/functions/navigation';

import { STATIONS } from '../../constants';

export const StationsScreen = () => {
    const {
        location,
        setLocation,
        minTimer,
    } = useAppContext();

    return (
        <ScrollView style={styles.scrollStyle}>
            <View style={styles.wrapper}>
                {Object.entries(STATIONS).map(([key, station]) => (
                    <Pressable
                        key={key}
                        style={styles.item}
                        onPress={() => {
                            setLocation(key);
                            clearInterval(minTimer);
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
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollStyle: {
        flex: 1,
        marginTop: 0,
    },
    wrapper: {
        paddingVertical: 32,
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
