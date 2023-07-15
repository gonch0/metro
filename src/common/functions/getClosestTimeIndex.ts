export const getClosestTimeIndex = (intervals: Array<string>) => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    // TODO 15:58 dayOff

    for (let index = 0; index < intervals.length; index++) {
        const [hour, minute] = intervals[index].split(':').map(Number);

        if (currentHour === hour && minute >= currentMinute) {
            return index;
        }
    }

    return 0;
};
