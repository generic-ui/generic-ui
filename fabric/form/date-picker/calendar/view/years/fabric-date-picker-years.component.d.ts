import { FabricDatePickerCalendarService } from '../../fabric-date-picker-calendar.service';
import { FabricDatePickerCalendarViewService } from '../../fabric-date-picker-calendar-view.service';
export declare class FabricDatePickerYearsComponent {
    private readonly calendarService;
    private readonly calendarViewService;
    selectedDate: Date;
    years: Array<Array<number>>;
    currentDay: Date;
    constructor(calendarService: FabricDatePickerCalendarService, calendarViewService: FabricDatePickerCalendarViewService);
    selectYear(year: number): void;
    isYear(date: Date, year: number): boolean;
}
