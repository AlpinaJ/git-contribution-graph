import {add, compareAsc, format} from "date-fns";

export const makeCellsTemplate = (start, end) => {
    const result = new Map();
    let current = start;
    while(compareAsc(current, end)<1){
        result.set(format(current, 'yyyy-MM-dd'), 0);
        current = add(current, {days: 1});
    }
    return result;
}