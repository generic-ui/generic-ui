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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvcmVhZC9lZGl0L3RlbXBsYXRlL2RhdGUtZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEM7SUFrQitDLHFEQUFnQztJQVM5RTtRQUFBLFlBQ0MsaUJBQU8sU0FDUDtRQU5RLHFCQUFlLEdBQUcsVUFBVSxDQUFDO1FBRTlCLFlBQU0sR0FBRyxLQUFLLENBQUM7O0lBSXZCLENBQUM7Ozs7SUFFRCxtREFBZTs7O0lBQWY7UUFBQSxpQkF3QkM7O1lBdkJNLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUM7O1lBRXZGLE1BQU0sR0FBRyxTQUFTLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQztRQUUvQyxNQUFNO2FBQ0osSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxVQUFDLENBQU0sSUFBSyxPQUFBLENBQUMsQ0FBQyxPQUFPLEtBQUssS0FBSSxDQUFDLGNBQWMsRUFBakMsQ0FBaUMsRUFBQyxFQUNyRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7O1FBQUM7WUFDVixLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQUM7UUFFSixNQUFNO2FBQ0osSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxVQUFDLENBQU0sSUFBSyxPQUFBLENBQUMsQ0FBQyxPQUFPLEtBQUssS0FBSSxDQUFDLFlBQVksRUFBL0IsQ0FBK0IsRUFBQyxFQUNuRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7O1FBQUM7WUFDVixLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELDBDQUFNOzs7O0lBQU4sVUFBTyxPQUFhO1FBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsZ0RBQVk7Ozs7SUFBWixVQUFhLE1BQWU7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFckIsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNaLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZDtJQUNGLENBQUM7O2dCQXBFRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSwyV0FZVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7OztnQ0FHQyxTQUFTLFNBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQWtENUQsZ0NBQUM7Q0FBQSxBQXRFRCxDQWtCK0MsMEJBQTBCLEdBb0R4RTtTQXBEWSx5QkFBeUI7OztJQUVyQyxrREFDMEI7O0lBRTFCLG9EQUFzQzs7Ozs7SUFFdEMsMkNBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRWRpdENvbW11bmljYXRpb25Db21wb25lbnQgfSBmcm9tICcuLi9lZGl0LWNvbW11bmljYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1kYXRlLWVkaXQnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGd1aS1kYXRlLXBpY2tlciAjZGF0ZXBpY2tlclxuXHRcdFx0XHRcdFx0IFtzZWxlY3REYXRlXT1cInZhbHVlXCJcblx0XHRcdFx0XHRcdCBbbmFtZV09XCJmaWx0ZXJGaWVsZE5hbWVcIlxuXHRcdFx0XHRcdFx0IFtvcGVuRGlhbG9nXT1cInRydWVcIlxuXHRcdFx0XHRcdFx0IFtvbmx5RGlhbG9nXT1cImZhbHNlXCJcblx0XHRcdFx0XHRcdCBbcGFyZW50RWxlbWVudF09XCJwYXJlbnRcIlxuXHRcdFx0XHRcdFx0IChkaWFsb2dPcGVuZWQpPVwiZGlhbG9nT3BlbmVkKCRldmVudClcIlxuXHRcdFx0XHRcdFx0IChkYXRlU2VsZWN0ZWQpPVwidG9nZ2xlKCRldmVudClcIj5cblx0XHQ8L2d1aS1kYXRlLXBpY2tlcj5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlRWRpdFRlbXBsYXRlQ29tcG9uZW50IGV4dGVuZHMgRWRpdENvbW11bmljYXRpb25Db21wb25lbnQ8RGF0ZT4ge1xuXG5cdEBWaWV3Q2hpbGQoJ2RhdGVwaWNrZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRkYXRlUGlja2VyUmVmOiBFbGVtZW50UmVmO1xuXG5cdHJlYWRvbmx5IGZpbHRlckZpZWxkTmFtZSA9ICdkYXRlRWRpdCc7XG5cblx0cHJpdmF0ZSBvcGVuZWQgPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdGNvbnN0IGlucHV0RWxlbWVudCA9IHRoaXMuZGF0ZVBpY2tlclJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ndWktZGF0ZS1waWNrZXItaW5wdXQnKTtcblxuXHRcdGNvbnN0IGtleXVwJCA9IGZyb21FdmVudChpbnB1dEVsZW1lbnQsICdrZXl1cCcpO1xuXG5cdFx0a2V5dXAkXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZmlsdGVyKChlOiBhbnkpID0+IGUua2V5Q29kZSA9PT0gdGhpcy5FTlRFUl9LRVlfQ09ERSksXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnVuc3Vic2NyaWJlKCk7XG5cdFx0XHRcdHRoaXMuc3VibWl0KCk7XG5cdFx0XHR9KTtcblxuXHRcdGtleXVwJFxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcigoZTogYW55KSA9PiBlLmtleUNvZGUgPT09IHRoaXMuRVNDX0tFWV9DT0RFKSxcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMudW5zdWJzY3JpYmUoKTtcblx0XHRcdFx0dGhpcy5jYW5jZWwoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0dG9nZ2xlKGNoYW5nZWQ6IERhdGUpOiB2b2lkIHtcblx0XHR0aGlzLnZhbHVlQ2hhbmdlcy5lbWl0KGNoYW5nZWQpO1xuXHR9XG5cblx0ZGlhbG9nT3BlbmVkKG9wZW5lZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMub3BlbmVkID0gb3BlbmVkO1xuXG5cdFx0aWYgKCFvcGVuZWQpIHtcblx0XHRcdHRoaXMudW5zdWJzY3JpYmUoKTtcblx0XHRcdHRoaXMuc3VibWl0KCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==