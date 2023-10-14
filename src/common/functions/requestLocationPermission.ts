import { PermissionsAndroid } from 'react-native';

export const requestLocationPermission = () => {
    return Promise.resolve(
        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Разрешение определении геолокации',
                message: 'Разрешить определение геолокации?',
                buttonNegative: 'Отмена',
                buttonPositive: 'Да',
            },
        )).then((granted) => {
        if (granted !== 'granted') {
            // alert('Ошибка при определении геолокации');
            return false;
        }
        return true;
    })
};

