import { Observable } from 'rxjs';
export declare class FabricDatePickerCalendarService {
    private readonly activeMonth$;
    private readonly activeYear$;
    onActiveMonth(): Observable<number>;
    onActiveYear(): Observable<number>;
    nextMonth(year: number, month: number): void;
    prevMonth(year: number, month: number): void;
    selectYear(year: number): void;
    selectMonth(month: number): void;
}
