import {add} from "date-fns";

export const monthsToRepresent = (start) => {
    let result = [];
    let currentWeek = 1;
    let currentMonth = add(start, {weeks: -1}).getMonth();
    let currentDate = start;
    while (currentWeek <= 51) {
        currentDate = add(currentDate, {weeks: 1});
        if (currentDate.getMonth() !== currentMonth) {
            result.push({'week': currentWeek, "month": currentDate.getMonth()})
        }
        currentMonth = currentDate.getMonth();
        currentWeek++;
    }

    return result;
}