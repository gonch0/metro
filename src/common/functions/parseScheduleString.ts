export const parseScheduleString = (schedule: string) => {
    if (schedule) {
        return schedule.split('; ');
    }
    return [];
};
