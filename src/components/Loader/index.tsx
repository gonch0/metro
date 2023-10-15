import React from 'react';
import {
    View,
    ActivityIndicator,
} from 'react-native';
import { loaderStyles } from './styles';

export const Loader = () => (
    <View style={loaderStyles.container}>
        <ActivityIndicator
            size='large'
            color='#038674'
        />
    </View>
);
