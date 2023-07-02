import { fetchWithTimeout } from './fetchWithTimeout';

export const getIsDayOff = () => {
    const URL = 'https://isdayoff.ru/today?tz=Asia/Yekaterinburg';

    return fetchWithTimeout(URL, 5000)
        .then((res) => res.json())
        .then((response) => {
            return response;
        })
        .catch(() => {
            alert('error while isDayOff');
            const today = new Date().getDay();
            return today === 6 || today === 0;
        });
};
