import Geolocation from 'react-native-geolocation-service';
import { STATIONS } from '../../constants/coords';
import { getDistance } from './getDistance';
import { requestLocationPermission } from './requestLocationPermission';

export const getClosestStation = (setLocation, setDistance) => {
    const result = requestLocationPermission();

    result.then(res => {
        if (res) {
            Geolocation.getCurrentPosition(
                (position) => {

                    let minDist = getDistance(
                        position.coords.latitude,
                        position.coords.longitude,
                        STATIONS.station9.coords.latitude,
                        STATIONS.station9.coords.longitude,
                    );

                    let currentStation = STATIONS.station9.name;

                    Object.values(STATIONS).forEach((station) => {
                        console.log(position.coords.latitude);
                        console.log(position.coords.longitude);

                        const dist = getDistance(
                            position.coords.latitude,
                            position.coords.longitude,
                            station.coords.latitude,
                            station.coords.longitude,
                        );

                        if (dist < minDist) {
                            minDist = dist;
                            currentStation = station.name;
                        }
                    });

                    setLocation(currentStation);
                    setDistance(minDist);
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
