import { DEPARTURES } from './departures';

export const STATIONS = {
    station1: {
        name: 'Проспект Космонавтов',
        coords: {
            latitude: 56.900348,
            longitude: 60.613789,
        },
        departures: DEPARTURES['station1'],
    },
    station2: {
        name: 'Уралмаш',
        coords: {
            latitude: 56.887009,
            longitude: 60.612866,
        },
        departures: DEPARTURES['station2'],
    },
    station3: {
        name: 'Машиностроителей',
        coords: {
            latitude: 56.876010,
            longitude: 60.612147,
        },
        departures: DEPARTURES['station3'],
    },
    station4: {
        name: 'Уральская',
        coords: {
            latitude: 56.857739,
            longitude: 60.600073,
        },
        departures: DEPARTURES['station4'],
    },
    station5: {
        name: 'Динамо',
        coords: {
            latitude: 56.847803,
            longitude: 60.599326,
        },
        departures: DEPARTURES['station5'],
    },
    station6: {
        name: 'Площадь 1905 года',
        coords: {
            latitude: 56.835975,
            longitude: 60.598742,
        },
        departures: DEPARTURES['station6'],
    },
    station7: {
        name: 'Геологическая',
        coords: {
            latitude: 56.826450,
            longitude: 60.603044,
        },
        departures: DEPARTURES['station7'],
    },
    station8: {
        name: 'Чкаловская',
        coords: {
            latitude: 56.808266,
            longitude: 60.609595,
        },
        departures: DEPARTURES['station8'],
    },
    station9: {
        name: 'Ботаническая',
        coords: {
            latitude: 56.797351,
            longitude: 60.629553,
        },
        departures: DEPARTURES['station9'],
    },
};

export const IS_DAY_OFF_URL = 'https://isdayoff.ru/today?tz=Asia/Yekaterinburg';
export const IS_DAY_OFF_TIMEOUT = 10000;
