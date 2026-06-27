"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decomposeTime = decomposeTime;
/* tslint:disable:no-var-requires */
const gregorian = require('weeknumber');
/**
 *
 * @param ts
 * @param options
 */
function decomposeTime(ts, options) {
    options = options || {};
    options.timezone = options.timezone || 'America/Bogota';
    // 2018-12-4 17:12:05
    const date = new Date(new Date(ts).toLocaleString('en-US', { timeZone: options.timezone }));
    const { year, week, day } = gregorian.weekNumberYear(date);
    const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRY', 'SAT', 'SUN'];
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    return {
        year,
        monthStr: months[date.getMonth()].padStart(2, '0'),
        month: (date.getMonth() + 1).toString().padStart(2, '0'),
        week,
        dayOfWeek: day,
        dayOfWeekStr: daysOfWeek[day - 1],
        dayOfYear: gregorian.dayOfYear(date),
        dayOfMonth: date.getDate().toString().padStart(2, '0'),
        hourOfDay: date.getHours().toString().padStart(2, '0'),
        minute: date.getMinutes().toString().padStart(2, '0'),
        second: date.getSeconds().toString().padStart(2, '0'),
        milliseconds: ts.toString().slice(10),
    };
}
