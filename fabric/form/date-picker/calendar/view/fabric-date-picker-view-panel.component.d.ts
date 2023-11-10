import { FabricCalendarView } from '../../models/fabric-calendar-view';
import { FabricDatePickerCalendarViewService } from '../fabric-date-picker-calendar-view.service';
import { FabricCalendarCardView } from '../../models/fabric-calendar-card-view';
import { Direction } from '../../../../common/icons/arrow-icon/direction';
import { FabricDatePickerYears } from '../years/fabric-date-picker.years';
import { FabricDatePickerCalendarService } from '../fabric-date-picker-calendar.service';
import { FabricDatePickerYearsService } from '../years/fabric-date-picker-years.service';
import * as i0 from "@angular/core";
export declare class FabricDatePickerViewPanelComponent {
    private readonly calendarViewService;
    private readonly calendarService;
    private readonly datePickerYearsService;
    private readonly datePickerYears;
    fabricCalendarView: FabricCalendarView;
    selectedDate?: Date;
    activeMonth: number;
    activeYear: number;
    years: Array<Array<number>>;
    Direction: typeof Direction;
    FabricCalendarCardView: typeof FabricCalendarCardView;
    constructor(calendarViewService: FabricDatePickerCalendarViewService, calendarService: FabricDatePickerCalendarService, datePickerYearsService: FabricDatePickerYearsService, datePickerYears: FabricDatePickerYears);
    getDisplayedDate(): string;
    switchCalendarView(): void;
    switchCard(cardView: FabricCalendarCardView): void;
    getDisplayedYearRange(): string;
    private handleMonthChange;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricDatePickerViewPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FabricDatePickerViewPanelComponent, "gui-date-picker-view-panel", never, { "fabricCalendarView": { "alias": "fabricCalendarView"; "required": false; }; "selectedDate": { "alias": "selectedDate"; "required": false; }; "activeMonth": { "alias": "activeMonth"; "required": false; }; "activeYear": { "alias": "activeYear"; "required": false; }; "years": { "alias": "years"; "required": false; }; }, {}, never, never, false, never>;
}
