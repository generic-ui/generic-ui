/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { EditCommunicationComponent } from '../edit-communication.component';
import { fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';
export class DateEditTemplateComponent extends EditCommunicationComponent {
    constructor() {
        super();
        this.filterFieldName = 'dateEdit';
        this.opened = false;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const inputElement = this.datePickerRef.nativeElement.querySelector('.gui-date-picker-input');
        /** @type {?} */
        const keyup$ = fromEvent(inputElement, 'keyup');
        keyup$
            .pipe(filter((/**
         * @param {?} e
         * @return {?}
         */
        (e) => e.keyCode === this.ENTER_KEY_CODE)), this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.unsubscribe();
            this.submit();
        }));
        keyup$
            .pipe(filter((/**
         * @param {?} e
         * @return {?}
         */
        (e) => e.keyCode === this.ESC_KEY_CODE)), this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.unsubscribe();
            this.cancel();
        }));
    }
    /**
     * @param {?} changed
     * @return {?}
     */
    toggle(changed) {
        this.valueChanges.emit(changed);
    }
    /**
     * @param {?} opened
     * @return {?}
     */
    dialogOpened(opened) {
        this.opened = opened;
        if (!opened) {
            this.unsubscribe();
            this.submit();
        }
    }
}
DateEditTemplateComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-date-edit',
                template: `

		<gui-date-picker #datepicker
						 [selectDate]="value"
						 [name]="filterFieldName"
						 [openDialog]="true"
						 [onlyDialog]="false"
						 (dialogOpened)="dialogOpened($event)"
						 (dateSelected)="toggle($event)">
		</gui-date-picker>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
DateEditTemplateComponent.ctorParameters = () => [];
DateEditTemplateComponent.propDecorators = {
    datePickerRef: [{ type: ViewChild, args: ['datepicker', { read: ElementRef, static: true },] }]
};
if (false) {
    /** @type {?} */
    DateEditTemplateComponent.prototype.datePickerRef;
    /** @type {?} */
    DateEditTemplateComponent.prototype.filterFieldName;
    /**
     * @type {?}
     * @private
     */
    DateEditTemplateComponent.prototype.opened;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9yZWFkL2VkaXQvdGVtcGxhdGUvZGF0ZS1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakMsT0FBTyxFQUFnQixNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQW9CdEQsTUFBTSxPQUFPLHlCQUEwQixTQUFRLDBCQUFnQztJQVM5RTtRQUNDLEtBQUssRUFBRSxDQUFDO1FBTEEsb0JBQWUsR0FBRyxVQUFVLENBQUM7UUFFOUIsV0FBTSxHQUFHLEtBQUssQ0FBQztJQUl2QixDQUFDOzs7O0lBRUQsZUFBZTs7Y0FDUixZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDOztjQUV2RixNQUFNLEdBQUcsU0FBUyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUM7UUFFL0MsTUFBTTthQUNKLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLGNBQWMsRUFBQyxFQUNyRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFDO1FBRUosTUFBTTthQUNKLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLFlBQVksRUFBQyxFQUNuRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBYTtRQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxNQUFlO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBRXJCLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Q7SUFDRixDQUFDOzs7WUFuRUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7O0VBV1Q7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOzs7Ozs0QkFHQyxTQUFTLFNBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzs7O0lBQTNELGtEQUMwQjs7SUFFMUIsb0RBQXNDOzs7OztJQUV0QywyQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFZGl0Q29tbXVuaWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL2VkaXQtY29tbXVuaWNhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktZGF0ZS1lZGl0Jyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxndWktZGF0ZS1waWNrZXIgI2RhdGVwaWNrZXJcblx0XHRcdFx0XHRcdCBbc2VsZWN0RGF0ZV09XCJ2YWx1ZVwiXG5cdFx0XHRcdFx0XHQgW25hbWVdPVwiZmlsdGVyRmllbGROYW1lXCJcblx0XHRcdFx0XHRcdCBbb3BlbkRpYWxvZ109XCJ0cnVlXCJcblx0XHRcdFx0XHRcdCBbb25seURpYWxvZ109XCJmYWxzZVwiXG5cdFx0XHRcdFx0XHQgKGRpYWxvZ09wZW5lZCk9XCJkaWFsb2dPcGVuZWQoJGV2ZW50KVwiXG5cdFx0XHRcdFx0XHQgKGRhdGVTZWxlY3RlZCk9XCJ0b2dnbGUoJGV2ZW50KVwiPlxuXHRcdDwvZ3VpLWRhdGUtcGlja2VyPlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIERhdGVFZGl0VGVtcGxhdGVDb21wb25lbnQgZXh0ZW5kcyBFZGl0Q29tbXVuaWNhdGlvbkNvbXBvbmVudDxEYXRlPiB7XG5cblx0QFZpZXdDaGlsZCgnZGF0ZXBpY2tlcicsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGRhdGVQaWNrZXJSZWY6IEVsZW1lbnRSZWY7XG5cblx0cmVhZG9ubHkgZmlsdGVyRmllbGROYW1lID0gJ2RhdGVFZGl0JztcblxuXHRwcml2YXRlIG9wZW5lZCA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0Y29uc3QgaW5wdXRFbGVtZW50ID0gdGhpcy5kYXRlUGlja2VyUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmd1aS1kYXRlLXBpY2tlci1pbnB1dCcpO1xuXG5cdFx0Y29uc3Qga2V5dXAkID0gZnJvbUV2ZW50KGlucHV0RWxlbWVudCwgJ2tleXVwJyk7XG5cblx0XHRrZXl1cCRcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKGU6IGFueSkgPT4gZS5rZXlDb2RlID09PSB0aGlzLkVOVEVSX0tFWV9DT0RFKSxcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMudW5zdWJzY3JpYmUoKTtcblx0XHRcdFx0dGhpcy5zdWJtaXQoKTtcblx0XHRcdH0pO1xuXG5cdFx0a2V5dXAkXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZmlsdGVyKChlOiBhbnkpID0+IGUua2V5Q29kZSA9PT0gdGhpcy5FU0NfS0VZX0NPREUpLFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdFx0dGhpcy51bnN1YnNjcmliZSgpO1xuXHRcdFx0XHR0aGlzLmNhbmNlbCgpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHR0b2dnbGUoY2hhbmdlZDogRGF0ZSk6IHZvaWQge1xuXHRcdHRoaXMudmFsdWVDaGFuZ2VzLmVtaXQoY2hhbmdlZCk7XG5cdH1cblxuXHRkaWFsb2dPcGVuZWQob3BlbmVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5vcGVuZWQgPSBvcGVuZWQ7XG5cblx0XHRpZiAoIW9wZW5lZCkge1xuXHRcdFx0dGhpcy51bnN1YnNjcmliZSgpO1xuXHRcdFx0dGhpcy5zdWJtaXQoKTtcblx0XHR9XG5cdH1cblxufVxuIl19