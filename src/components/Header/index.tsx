import React from 'react';
import {
    Text,
    View,
    Button,
    Pressable,
} from 'react-native';

import { useAppContext } from '../../../App';
import { navigate } from '../../common/functions/navigation';
import { STATIONS } from '../../constants';
import { headerStyles } from './styles';

export const Header = () => {
    const {
        isDayOff,
        setIsDayOff,
        location,
    } = useAppContext();

    return (
        <View style={headerStyles.headerStyle}>
            {location && (
                <View
                    style={[
                        headerStyles.rowSb,
                        headerStyles.mb,
                    ]}
                >
                    <View>
                        <Text style={headerStyles.text}>Ближайшая станция:</Text>
                        <Text
                            style={[
                                headerStyles.text,
                                headerStyles.bold,
                            ]}
                        >
                            {STATIONS[location].name}
                        </Text>
                    </View>
                    <Button
                        title='Поменять'
                        color='#038674'
                        onPress={() => {
                            navigate('StationsScreen');
                        }}
                    />
                </View>
            )}

            <View style={headerStyles.row}>
                <Pressable
                    style={headerStyles.tab}
                    onPress={() => {
                        setIsDayOff(false);
                    }}
                >
                    <Text
                        style={[
                            headerStyles.tabText,
                            !isDayOff && headerStyles.bold,
                            !isDayOff && headerStyles.border,
                        ]}
                    >
                        Рабочий день
                    </Text>
                </Pressable>
                <Pressable
                    style={headerStyles.tab}
                    onPress={() => {
                        setIsDayOff(true);
                    }}
                >
                    <Text
                        style={[
                            headerStyles.tabText,
                            isDayOff && headerStyles.bold,
                            isDayOff && headerStyles.border,
                        ]}
                    >
                        Выходной день
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};
