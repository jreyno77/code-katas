import * as zod  from 'zod'

type Year = number | string | Date;
// const date = zod.iso.date();
export const isLeapYear: (year: Year) => boolean = (year: Year) => {
    // date.parse(year);
    return true;
};