export const getIsDayOff = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDay();

    const URL = `https://isdayoff.ru/api/getdata?year=${year}&month=${month}&day=${day}`;

    return fetch(URL)
        .then((res) => res.json())
        .then((response) => {
            console.log(response);
            return response;
        })
        .catch((error) => {
            console.log('error while isDayOff', error);
        });
};
