import { FabricDatePickerCalendarViewService } from '../../fabric-date-picker-calendar-view.service';
import { FabricDatePickerCalendarService } from '../../fabric-date-picker-calendar.service';
export declare class FabricDatePickerMonthsViewComponent {
    private readonly calendarService;
    private readonly calendarViewService;
    selectedDate: Date;
    activeYear: number;
    currentDay: Date;
    readonly monthsPerQuarters: {
        nr: number;
        name: string;
    }[][];
    constructor(calendarService: FabricDatePickerCalendarService, calendarViewService: FabricDatePickerCalendarViewService);
    isMonth(date: Date, month: number): boolean;
    selectMonth(month: number): void;
}
