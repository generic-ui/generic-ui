import { ElementRef, EventEmitter, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FabricInlineDialogService } from '../../layout/inline-dialog/fabric-inline-dialog.service';
import { FabricDatePickerService } from './fabric-date-picker.service';
export declare class FabricDatePickerComponent implements OnInit, OnDestroy {
    private inlineDialogService;
    private datePickerService;
    private formBuilder;
    datePickerRef: ElementRef;
    selectDate: Date;
    dateSelected: EventEmitter<any>;
    datePickerForm: FormGroup;
    pickedDate: Date;
    datePickerSubscription: Subscription;
    datePickerDaySubscription: Subscription;
    constructor(inlineDialogService: FabricInlineDialogService, datePickerService: FabricDatePickerService, formBuilder: FormBuilder);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    openDatePicker(): void;
    private observeDayChanges;
    private parse;
}
