import { ChangeDetectorRef, OnInit } from '@angular/core';
import { FabricDatePickerService } from '../fabric-date-picker.service';
import { FabricDatePickerWeeks } from './weeks/fabric-date-picker.weeks';
import { FabricDatePickerYears } from './years/fabric-date-picker.years';
import { FabricReactive } from '../../../common/fabric-reactive';
import { FabricCalendarView } from '../models/fabric-calendar-view';
import { FabricDatePickerCalendarViewService } from './fabric-date-picker-calendar-view.service';
import { FabricDatePickerCalendarService } from './fabric-date-picker-calendar.service';
import { FabricDatePickerYearsService } from './years/fabric-date-picker-years.service';
import { FabricDatePickerCompositionService } from '../fabric-date-picker-composition.service';
import { FabricDatePickerComposition } from '../models/fabric-date-picker-composition';
import * as i0 from "@angular/core";
export declare class FabricDatePickerCalendarComponent extends FabricReactive implements OnInit {
    private readonly datePickerService;
    private readonly datePickerFormatService;
    private readonly datePickerWeeks;
    private readonly datePickerYears;
    private readonly datePickerYearsService;
    private readonly calendarService;
    private readonly calendarViewService;
    private readonly changeDetectorRef;
    /** Cells representing days in weeks of the active month. */
    weeks: Array<Array<Date>>;
    /** Year cells displayed in years view. */
    years: Array<Array<number>>;
    selectedDate?: Date;
    activeMonth: number;
    activeYear: number;
    datePickerComposition: FabricDatePickerComposition;
    FabricDatePickerComposition: typeof FabricDatePickerComposition;
    FabricCalendarView: typeof FabricCalendarView;
    fabricCalendarView: FabricCalendarView;
    constructor(datePickerService: FabricDatePickerService, datePickerFormatService: FabricDatePickerCompositionService, datePickerWeeks: FabricDatePickerWeeks, datePickerYears: FabricDatePickerYears, datePickerYearsService: FabricDatePickerYearsService, calendarService: FabricDatePickerCalendarService, calendarViewService: FabricDatePickerCalendarViewService, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    getCalendarView(): FabricCalendarView;
    isVisible(activeComposition: FabricDatePickerComposition, checkedComposition: FabricDatePickerComposition): boolean;
    private calculateDatePickerData;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricDatePickerCalendarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FabricDatePickerCalendarComponent, "gui-date-picker-toggle", never, {}, {}, never, never, false>;
}
