import { DayOfTheWeek } from "../model/index";

export class DateHelper {

    static toShortDate(date: Date): string {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

    static isWeekDay(day: number): boolean {
        return !DateHelper.isWeekendDay(day);
    }

    static isWeekendDay(day: number): boolean {
        return (day == DayOfTheWeek.SATURDAY || day == DayOfTheWeek.SUNDAY);
    }

}