import Geolocation from 'react-native-geolocation-service';
import { STATIONS } from '../../constants/coords';
import { getDistance } from './getDistance';
import { requestLocationPermission } from './requestLocationPermission';

export const getLocation = (setLocation, setDistance) => {
    const result = requestLocationPermission();

    result.then(res => {
        if (res) {
            Geolocation.getCurrentPosition(
                position => {
                    setLocation(position);

                    const dist = getDistance(
                        position.coords.latitude,
                        position.coords.longitude,
                        STATIONS.station1.coords.latitude,
                        STATIONS.station1.coords.longitude,
                    );

                    setDistance(dist);
                },
                error => {
                    console.log(error.code, error.message);
                    setLocation(false);
                },
                {
                    enableHighAccuracy: true,
                    timeout: 15000,
                    maximumAge: 10000,
                },
            );
        }
    });
};
