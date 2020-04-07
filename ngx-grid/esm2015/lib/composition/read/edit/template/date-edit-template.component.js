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
						 [parentElement]="parent"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL3JlYWQvZWRpdC90ZW1wbGF0ZS9kYXRlLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFxQnhDLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSwwQkFBZ0M7SUFTOUU7UUFDQyxLQUFLLEVBQUUsQ0FBQztRQUxBLG9CQUFlLEdBQUcsVUFBVSxDQUFDO1FBRTlCLFdBQU0sR0FBRyxLQUFLLENBQUM7SUFJdkIsQ0FBQzs7OztJQUVELGVBQWU7O2NBQ1IsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQzs7Y0FFdkYsTUFBTSxHQUFHLFNBQVMsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDO1FBRS9DLE1BQU07YUFDSixJQUFJLENBQ0osTUFBTTs7OztRQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxjQUFjLEVBQUMsRUFDckQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUNmLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FBQztRQUVKLE1BQU07YUFDSixJQUFJLENBQ0osTUFBTTs7OztRQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxZQUFZLEVBQUMsRUFDbkQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUNmLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE9BQWE7UUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsTUFBZTtRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVyQixJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1osSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNkO0lBQ0YsQ0FBQzs7O1lBcEVELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7RUFZVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7Ozs7OzRCQUdDLFNBQVMsU0FBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7SUFBM0Qsa0RBQzBCOztJQUUxQixvREFBc0M7Ozs7O0lBRXRDLDJDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFZGl0Q29tbXVuaWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL2VkaXQtY29tbXVuaWNhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWRhdGUtZWRpdCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8Z3VpLWRhdGUtcGlja2VyICNkYXRlcGlja2VyXG5cdFx0XHRcdFx0XHQgW3NlbGVjdERhdGVdPVwidmFsdWVcIlxuXHRcdFx0XHRcdFx0IFtuYW1lXT1cImZpbHRlckZpZWxkTmFtZVwiXG5cdFx0XHRcdFx0XHQgW29wZW5EaWFsb2ddPVwidHJ1ZVwiXG5cdFx0XHRcdFx0XHQgW29ubHlEaWFsb2ddPVwiZmFsc2VcIlxuXHRcdFx0XHRcdFx0IFtwYXJlbnRFbGVtZW50XT1cInBhcmVudFwiXG5cdFx0XHRcdFx0XHQgKGRpYWxvZ09wZW5lZCk9XCJkaWFsb2dPcGVuZWQoJGV2ZW50KVwiXG5cdFx0XHRcdFx0XHQgKGRhdGVTZWxlY3RlZCk9XCJ0b2dnbGUoJGV2ZW50KVwiPlxuXHRcdDwvZ3VpLWRhdGUtcGlja2VyPlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIERhdGVFZGl0VGVtcGxhdGVDb21wb25lbnQgZXh0ZW5kcyBFZGl0Q29tbXVuaWNhdGlvbkNvbXBvbmVudDxEYXRlPiB7XG5cblx0QFZpZXdDaGlsZCgnZGF0ZXBpY2tlcicsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGRhdGVQaWNrZXJSZWY6IEVsZW1lbnRSZWY7XG5cblx0cmVhZG9ubHkgZmlsdGVyRmllbGROYW1lID0gJ2RhdGVFZGl0JztcblxuXHRwcml2YXRlIG9wZW5lZCA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0Y29uc3QgaW5wdXRFbGVtZW50ID0gdGhpcy5kYXRlUGlja2VyUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmd1aS1kYXRlLXBpY2tlci1pbnB1dCcpO1xuXG5cdFx0Y29uc3Qga2V5dXAkID0gZnJvbUV2ZW50KGlucHV0RWxlbWVudCwgJ2tleXVwJyk7XG5cblx0XHRrZXl1cCRcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKGU6IGFueSkgPT4gZS5rZXlDb2RlID09PSB0aGlzLkVOVEVSX0tFWV9DT0RFKSxcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMudW5zdWJzY3JpYmUoKTtcblx0XHRcdFx0dGhpcy5zdWJtaXQoKTtcblx0XHRcdH0pO1xuXG5cdFx0a2V5dXAkXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZmlsdGVyKChlOiBhbnkpID0+IGUua2V5Q29kZSA9PT0gdGhpcy5FU0NfS0VZX0NPREUpLFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdFx0dGhpcy51bnN1YnNjcmliZSgpO1xuXHRcdFx0XHR0aGlzLmNhbmNlbCgpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHR0b2dnbGUoY2hhbmdlZDogRGF0ZSk6IHZvaWQge1xuXHRcdHRoaXMudmFsdWVDaGFuZ2VzLmVtaXQoY2hhbmdlZCk7XG5cdH1cblxuXHRkaWFsb2dPcGVuZWQob3BlbmVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5vcGVuZWQgPSBvcGVuZWQ7XG5cblx0XHRpZiAoIW9wZW5lZCkge1xuXHRcdFx0dGhpcy51bnN1YnNjcmliZSgpO1xuXHRcdFx0dGhpcy5zdWJtaXQoKTtcblx0XHR9XG5cdH1cblxufVxuIl19