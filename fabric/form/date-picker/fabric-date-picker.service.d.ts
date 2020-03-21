import { Observable } from 'rxjs';
export declare class FabricDatePickerService {
    private dateMonth$;
    private dateYear$;
    private initialDate;
    private selectedDate;
    private readonly selectedDate$;
    observeDateMonth(): Observable<number>;
    observeDateYear(): Observable<number>;
    observeSelectedDate(): Observable<Date>;
    dateSelected(date: Date): void;
    nextMonth(year: number, month: number): void;
    prevMonth(year: number, month: number): void;
}
