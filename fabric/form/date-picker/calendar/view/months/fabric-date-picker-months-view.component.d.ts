import { FabricDatePickerCalendarViewService } from '../../fabric-date-picker-calendar-view.service';
import { FabricDatePickerCalendarService } from '../../fabric-date-picker-calendar.service';
import * as i0 from "@angular/core";
export declare class FabricDatePickerMonthsViewComponent {
    private readonly calendarService;
    private readonly calendarViewService;
    selectedDate?: Date;
    activeYear: number;
    currentDay: Date;
    readonly monthsPerQuarters: {
        nr: number;
        name: string;
    }[][];
    constructor(calendarService: FabricDatePickerCalendarService, calendarViewService: FabricDatePickerCalendarViewService);
    isMonth(date: Date, month: number): boolean;
    selectMonth(month: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricDatePickerMonthsViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FabricDatePickerMonthsViewComponent, "gui-date-picker-months-view", never, { "selectedDate": "selectedDate"; "activeYear": "activeYear"; }, {}, never, never, false>;
}
