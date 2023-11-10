import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FabricDatePickerService } from './fabric-date-picker.service';
import { FabricDatePickerInlineDialogService } from './fabric-date-picker-inline-dialog.service';
import { FabricReactive } from '../../common/fabric-reactive';
import { Theme } from '../../themes/theme';
import { FabricDatePickerCompositionService } from './fabric-date-picker-composition.service';
import * as i0 from "@angular/core";
export declare class FabricDatePickerComponent extends FabricReactive implements OnChanges, OnInit, AfterViewInit, OnDestroy {
    private readonly fabricDatePickerInlineDialogService;
    private readonly datePickerService;
    private readonly datePickerCompositionService;
    private readonly changeDetectorRef;
    readonly datePickerRef?: ElementRef;
    parentElement?: ElementRef;
    theme?: Theme;
    selectDate?: Date;
    name: string;
    openDialog: boolean;
    onlyDialog: boolean;
    datePipeOptions: string;
    readonly dateSelected: EventEmitter<any>;
    readonly dialogOpened: EventEmitter<any>;
    datePickerForm: FormGroup;
    pickedDate: Date;
    inputDisabled: 'disabled' | '';
    constructor(fabricDatePickerInlineDialogService: FabricDatePickerInlineDialogService, datePickerService: FabricDatePickerService, datePickerCompositionService: FabricDatePickerCompositionService, formBuilder: FormBuilder, changeDetectorRef: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    openDatePicker(): void;
    closeDatePicker(): void;
    private emitSelectedDate;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricDatePickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FabricDatePickerComponent, "gui-date-picker", never, { "parentElement": { "alias": "parentElement"; "required": false; }; "theme": { "alias": "theme"; "required": false; }; "selectDate": { "alias": "selectDate"; "required": false; }; "name": { "alias": "name"; "required": false; }; "openDialog": { "alias": "openDialog"; "required": false; }; "onlyDialog": { "alias": "onlyDialog"; "required": false; }; "datePipeOptions": { "alias": "datePipeOptions"; "required": false; }; }, { "dateSelected": "dateSelected"; "dialogOpened": "dialogOpened"; }, never, never, false, never>;
}
