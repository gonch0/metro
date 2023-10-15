import { PermissionsAndroid } from 'react-native';

export const requestLocationPermission = () => (
    Promise.resolve(
        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Разрешение определении геолокации',
                message: 'Разрешить определение геолокации?',
                buttonNegative: 'Отмена',
                buttonPositive: 'Да',
            },
        ),
    ).then((granted) => granted === 'granted'));
