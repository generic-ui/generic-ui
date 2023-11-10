import { FabricDatePickerService } from '../../../fabric-date-picker.service';
import * as i0 from "@angular/core";
export declare class FabricDatePickerDaysViewComponent {
    private readonly datePickerService;
    selectedDate?: Date;
    activeMonth: number;
    weeks: Array<Array<Date>>;
    daysOfTheWeek: string[];
    currentDay: Date;
    constructor(datePickerService: FabricDatePickerService);
    selectDate(date: Date): void;
    isDate(comparedDate: Date, date: Date): boolean;
    displayMonthDays(month: number): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricDatePickerDaysViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FabricDatePickerDaysViewComponent, "gui-date-picker-days-view", never, { "selectedDate": { "alias": "selectedDate"; "required": false; }; "activeMonth": { "alias": "activeMonth"; "required": false; }; "weeks": { "alias": "weeks"; "required": false; }; }, {}, never, never, false, never>;
}
