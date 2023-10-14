import React from 'react';
import {
    Text,
    View,
    Button,
    Switch,
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
                        headerStyles.row,
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
                        onPress={() => {

                            navigate('StationsScreen');
                        }}
                    />
                </View>
            )}

            <View style={headerStyles.row}>
                <Text
                    style={[
                        headerStyles.text,
                        !isDayOff && headerStyles.bold,
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
                        headerStyles.text,
                        isDayOff && headerStyles.bold,
                    ]}
                >
                    Выходной день
                </Text>
            </View>
        </View>
    );
};
