import {
    IS_DAY_OFF_TIMEOUT,
    IS_DAY_OFF_URL,
} from '../../constants';
import { fetchWithTimeout } from './fetchWithTimeout';

export const getIsDayOff = () => fetchWithTimeout(IS_DAY_OFF_URL, IS_DAY_OFF_TIMEOUT)
    .then((res) => res.json())
    .then((response) => response)
    .catch(() => {
        // alert('Ошибка определения типа дня');
        const today = new Date().getDay();
        return today === 6 || today === 0;
    });
