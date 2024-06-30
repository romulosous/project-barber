import { addMinutes, format, setHours, setMinutes } from "date-fns";

export function generateDayTimeList(date: Date): string[] {
    const startTime = setMinutes(setHours(date, 9), 0); // Set start time to 09:00
    const endTime = setMinutes(setHours(date, 21), 0); // Set end time to 21:00
    const interval = 45; // Interval between each time option
    const timeList: string[] = [];

    let currentTime = startTime;
    while (currentTime <= endTime) {
        timeList.push(format(currentTime, "HH:mm"));
        currentTime = addMinutes(currentTime, interval);
    }

    return timeList
}

// import { addMinutes, format, setHours, setMinutes } from "date-fns";

// export function generateDayTimeList(date: Date): string[] {
//     const newDate = new Date();
//     const currentDay = newDate.getDate();
//     const selectedDay = date.getDate();

//     const currentHour = newDate.getHours();
//     const currentMinutes = newDate.getMinutes();

//     const interval = 45; // Interval between each time option
//     let start = 9; // Start time
//     let increment = 0; // Increment 1 hour if current time is greater than 45 minutes

//     if (currentDay === selectedDay) {
//         start = currentHour >= 9 ? currentHour : 9
//         increment = currentMinutes > 45 ? 1 : 0; // Increment 1 hour if current time is greater than 45 minutes
//     }

//     const startTime = setMinutes(setHours(date, start + increment), 0); // Set start time to 09:00
//     const endTime = setMinutes(setHours(date, 21), 0); // Set end time to 21:00
//     const timeList: string[] = [];

//     let currentTime = startTime;
//     while (currentTime <= endTime) {
//         timeList.push(format(currentTime, "HH:mm"));
//         currentTime = addMinutes(currentTime, interval);
//     }

//     return timeList
// }