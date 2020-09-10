/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { EditCommunicationComponent } from '../edit-communication.component';
import { fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';
var DateEditTemplateComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DateEditTemplateComponent, _super);
    function DateEditTemplateComponent() {
        var _this = _super.call(this) || this;
        _this.filterFieldName = 'dateEdit';
        _this.opened = false;
        return _this;
    }
    /**
     * @return {?}
     */
    DateEditTemplateComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var inputElement = this.datePickerRef.nativeElement.querySelector('.gui-date-picker-input');
        /** @type {?} */
        var keyup$ = fromEvent(inputElement, 'keyup');
        keyup$
            .pipe(filter((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.keyCode === _this.ENTER_KEY_CODE; })), this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.unsubscribe();
            _this.submit();
        }));
        keyup$
            .pipe(filter((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.keyCode === _this.ESC_KEY_CODE; })), this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.unsubscribe();
            _this.cancel();
        }));
    };
    /**
     * @param {?} changed
     * @return {?}
     */
    DateEditTemplateComponent.prototype.toggle = /**
     * @param {?} changed
     * @return {?}
     */
    function (changed) {
        this.valueChanges.emit(changed);
    };
    /**
     * @param {?} opened
     * @return {?}
     */
    DateEditTemplateComponent.prototype.dialogOpened = /**
     * @param {?} opened
     * @return {?}
     */
    function (opened) {
        this.opened = opened;
        if (!opened) {
            this.unsubscribe();
            this.submit();
        }
    };
    DateEditTemplateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-date-edit',
                    template: "\n\n\t\t<gui-date-picker #datepicker\n\t\t\t\t\t\t [selectDate]=\"value\"\n\t\t\t\t\t\t [name]=\"filterFieldName\"\n\t\t\t\t\t\t [openDialog]=\"true\"\n\t\t\t\t\t\t [onlyDialog]=\"false\"\n\t\t\t\t\t\t [parentElement]=\"parent\"\n\t\t\t\t\t\t (dialogOpened)=\"dialogOpened($event)\"\n\t\t\t\t\t\t (dateSelected)=\"toggle($event)\">\n\t\t</gui-date-picker>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    DateEditTemplateComponent.ctorParameters = function () { return []; };
    DateEditTemplateComponent.propDecorators = {
        datePickerRef: [{ type: ViewChild, args: ['datepicker', { read: ElementRef, static: true },] }]
    };
    return DateEditTemplateComponent;
}(EditCommunicationComponent));
export { DateEditTemplateComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vZG9tYWluLWFwaS9yZWFkL2VkaXQvdGVtcGxhdGUvZGF0ZS1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd4QztJQWtCK0MscURBQWdDO0lBUzlFO1FBQUEsWUFDQyxpQkFBTyxTQUNQO1FBTlEscUJBQWUsR0FBRyxVQUFVLENBQUM7UUFFOUIsWUFBTSxHQUFHLEtBQUssQ0FBQzs7SUFJdkIsQ0FBQzs7OztJQUVELG1EQUFlOzs7SUFBZjtRQUFBLGlCQXdCQzs7WUF2Qk0sWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQzs7WUFFdkYsTUFBTSxHQUFHLFNBQVMsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDO1FBRS9DLE1BQU07YUFDSixJQUFJLENBQ0osTUFBTTs7OztRQUFDLFVBQUMsQ0FBTSxJQUFLLE9BQUEsQ0FBQyxDQUFDLE9BQU8sS0FBSyxLQUFJLENBQUMsY0FBYyxFQUFqQyxDQUFpQyxFQUFDLEVBQ3JELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7UUFBQztZQUNWLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FBQztRQUVKLE1BQU07YUFDSixJQUFJLENBQ0osTUFBTTs7OztRQUFDLFVBQUMsQ0FBTSxJQUFLLE9BQUEsQ0FBQyxDQUFDLE9BQU8sS0FBSyxLQUFJLENBQUMsWUFBWSxFQUEvQixDQUErQixFQUFDLEVBQ25ELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7UUFBQztZQUNWLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsMENBQU07Ozs7SUFBTixVQUFPLE9BQWE7UUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCxnREFBWTs7OztJQUFaLFVBQWEsTUFBZTtRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVyQixJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1osSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNkO0lBQ0YsQ0FBQzs7Z0JBcEVELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLDJXQVlUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7O2dDQUdDLFNBQVMsU0FBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0lBa0Q1RCxnQ0FBQztDQUFBLEFBdEVELENBa0IrQywwQkFBMEIsR0FvRHhFO1NBcERZLHlCQUF5Qjs7O0lBRXJDLGtEQUMwQjs7SUFFMUIsb0RBQXNDOzs7OztJQUV0QywyQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFZGl0Q29tbXVuaWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL2VkaXQtY29tbXVuaWNhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWRhdGUtZWRpdCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8Z3VpLWRhdGUtcGlja2VyICNkYXRlcGlja2VyXG5cdFx0XHRcdFx0XHQgW3NlbGVjdERhdGVdPVwidmFsdWVcIlxuXHRcdFx0XHRcdFx0IFtuYW1lXT1cImZpbHRlckZpZWxkTmFtZVwiXG5cdFx0XHRcdFx0XHQgW29wZW5EaWFsb2ddPVwidHJ1ZVwiXG5cdFx0XHRcdFx0XHQgW29ubHlEaWFsb2ddPVwiZmFsc2VcIlxuXHRcdFx0XHRcdFx0IFtwYXJlbnRFbGVtZW50XT1cInBhcmVudFwiXG5cdFx0XHRcdFx0XHQgKGRpYWxvZ09wZW5lZCk9XCJkaWFsb2dPcGVuZWQoJGV2ZW50KVwiXG5cdFx0XHRcdFx0XHQgKGRhdGVTZWxlY3RlZCk9XCJ0b2dnbGUoJGV2ZW50KVwiPlxuXHRcdDwvZ3VpLWRhdGUtcGlja2VyPlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIERhdGVFZGl0VGVtcGxhdGVDb21wb25lbnQgZXh0ZW5kcyBFZGl0Q29tbXVuaWNhdGlvbkNvbXBvbmVudDxEYXRlPiB7XG5cblx0QFZpZXdDaGlsZCgnZGF0ZXBpY2tlcicsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGRhdGVQaWNrZXJSZWY6IEVsZW1lbnRSZWY7XG5cblx0cmVhZG9ubHkgZmlsdGVyRmllbGROYW1lID0gJ2RhdGVFZGl0JztcblxuXHRwcml2YXRlIG9wZW5lZCA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0Y29uc3QgaW5wdXRFbGVtZW50ID0gdGhpcy5kYXRlUGlja2VyUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmd1aS1kYXRlLXBpY2tlci1pbnB1dCcpO1xuXG5cdFx0Y29uc3Qga2V5dXAkID0gZnJvbUV2ZW50KGlucHV0RWxlbWVudCwgJ2tleXVwJyk7XG5cblx0XHRrZXl1cCRcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKGU6IGFueSkgPT4gZS5rZXlDb2RlID09PSB0aGlzLkVOVEVSX0tFWV9DT0RFKSxcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMudW5zdWJzY3JpYmUoKTtcblx0XHRcdFx0dGhpcy5zdWJtaXQoKTtcblx0XHRcdH0pO1xuXG5cdFx0a2V5dXAkXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZmlsdGVyKChlOiBhbnkpID0+IGUua2V5Q29kZSA9PT0gdGhpcy5FU0NfS0VZX0NPREUpLFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdFx0dGhpcy51bnN1YnNjcmliZSgpO1xuXHRcdFx0XHR0aGlzLmNhbmNlbCgpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHR0b2dnbGUoY2hhbmdlZDogRGF0ZSk6IHZvaWQge1xuXHRcdHRoaXMudmFsdWVDaGFuZ2VzLmVtaXQoY2hhbmdlZCk7XG5cdH1cblxuXHRkaWFsb2dPcGVuZWQob3BlbmVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5vcGVuZWQgPSBvcGVuZWQ7XG5cblx0XHRpZiAoIW9wZW5lZCkge1xuXHRcdFx0dGhpcy51bnN1YnNjcmliZSgpO1xuXHRcdFx0dGhpcy5zdWJtaXQoKTtcblx0XHR9XG5cdH1cblxufVxuIl19