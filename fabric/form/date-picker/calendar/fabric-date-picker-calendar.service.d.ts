import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class FabricDatePickerCalendarService {
    private readonly activeMonth$;
    private readonly activeYear$;
    onActiveMonth(): Observable<number>;
    onActiveYear(): Observable<number>;
    nextMonth(year: number, month: number): void;
    prevMonth(year: number, month: number): void;
    selectYear(year: number): void;
    selectMonth(month: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricDatePickerCalendarService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FabricDatePickerCalendarService>;
}
