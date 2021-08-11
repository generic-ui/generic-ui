import { FabricDatePickerService } from '../../../fabric-date-picker.service';
export declare class FabricDatePickerDaysViewComponent {
    private readonly datePickerService;
    selectedDate: Date;
    activeMonth: number;
    weeks: Array<Array<Date>>;
    daysOfTheWeek: string[];
    currentDay: Date;
    constructor(datePickerService: FabricDatePickerService);
    selectDate(date: Date): void;
    isDate(comparedDate: Date, date: Date): boolean;
    displayMonthDays(month: number): boolean;
}
