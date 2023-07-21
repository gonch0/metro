export const getClosestTimeIndex = (intervals: Array<string>) => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    for (let index = 0; index < intervals.length; index++) {
        const [hour, minute] = intervals[index].split(':').map(Number);

        if (currentHour === hour) {
            if (minute >= currentMinute) {
                return index;
            }

            const [nextHour] = intervals[index + 1]?.split(':') || [];

            if (Number(nextHour) === currentHour + 1) {
                return intervals[index + 1]
                    ? index + 1
                    : 0;
            }
        }
    }

    return 0;
};
