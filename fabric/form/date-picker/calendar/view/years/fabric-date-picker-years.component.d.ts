import { FabricDatePickerCalendarService } from '../../fabric-date-picker-calendar.service';
import { FabricDatePickerCalendarViewService } from '../../fabric-date-picker-calendar-view.service';
import * as i0 from "@angular/core";
export declare class FabricDatePickerYearsComponent {
    private readonly calendarService;
    private readonly calendarViewService;
    selectedDate?: Date;
    years: Array<Array<number>>;
    currentDay: Date;
    constructor(calendarService: FabricDatePickerCalendarService, calendarViewService: FabricDatePickerCalendarViewService);
    selectYear(year: number): void;
    isYear(date: Date, year: number): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricDatePickerYearsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FabricDatePickerYearsComponent, "gui-date-picker-years-view", never, { "selectedDate": "selectedDate"; "years": "years"; }, {}, never, never>;
}
