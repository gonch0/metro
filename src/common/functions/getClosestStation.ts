import Geolocation from 'react-native-geolocation-service';
import { STATIONS } from '../../constants';
import { getDistance } from './getDistance';
import { requestLocationPermission } from './requestLocationPermission';

export const getClosestStation = () => {
    const getPermission = requestLocationPermission();

    return getPermission
        .then((res) => {
            return new Promise((resolve) => {
                let currentStation = '';

                if (res) {
                    Geolocation.getCurrentPosition(
                        (position) => {
                            let minDist = getDistance(
                                position.coords.latitude,
                                position.coords.longitude,
                                STATIONS.station9.coords.latitude,
                                STATIONS.station9.coords.longitude,
                            );

                            Object.entries(STATIONS).forEach(([code, station]) => {
                                const dist = getDistance(
                                    position.coords.latitude,
                                    position.coords.longitude,
                                    station.coords.latitude,
                                    station.coords.longitude,
                                );

                                if (dist < minDist) {
                                    minDist = dist;
                                    currentStation = code;
                                }
                            });

                            resolve(currentStation);
                        },
                        (error) => {
                            console.log(error.code, error.message);
                            return null;
                        },
                        {
                            enableHighAccuracy: true,
                            timeout: 15000,
                            maximumAge: 10000,
                        },
                    );
                }

                return currentStation;
            });
        });
};
