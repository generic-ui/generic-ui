/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { EditCommunicationComponent } from '../edit-communication.component';
import { fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';
var DateEditTemplateComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DateEditTemplateComponent, _super);
    function DateEditTemplateComponent(changeDetectorRef) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
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
    DateEditTemplateComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
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
    /**
     * @type {?}
     * @private
     */
    DateEditTemplateComponent.prototype.changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9lZGl0L3RlbXBsYXRlL2RhdGUtZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEksT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEM7SUFrQitDLHFEQUFnQztJQVM5RSxtQ0FBNkIsaUJBQW9DO1FBQWpFLFlBQ0Msa0JBQU0saUJBQWlCLENBQUMsU0FDeEI7UUFGNEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUp4RCxxQkFBZSxHQUFHLFVBQVUsQ0FBQztRQUU5QixZQUFNLEdBQUcsS0FBSyxDQUFDOztJQUl2QixDQUFDOzs7O0lBRUQsbURBQWU7OztJQUFmO1FBQUEsaUJBd0JDOztZQXZCTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDOztZQUV2RixNQUFNLEdBQUcsU0FBUyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUM7UUFFL0MsTUFBTTthQUNKLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsVUFBQyxDQUFNLElBQUssT0FBQSxDQUFDLENBQUMsT0FBTyxLQUFLLEtBQUksQ0FBQyxjQUFjLEVBQWpDLENBQWlDLEVBQUMsRUFDckQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7OztRQUFDO1lBQ1YsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFDO1FBRUosTUFBTTthQUNKLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsVUFBQyxDQUFNLElBQUssT0FBQSxDQUFDLENBQUMsT0FBTyxLQUFLLEtBQUksQ0FBQyxZQUFZLEVBQS9CLENBQStCLEVBQUMsRUFDbkQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7OztRQUFDO1lBQ1YsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCwwQ0FBTTs7OztJQUFOLFVBQU8sT0FBYTtRQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELGdEQUFZOzs7O0lBQVosVUFBYSxNQUFlO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBRXJCLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Q7SUFDRixDQUFDOztnQkFwRUQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsMldBWVQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7OztnQkF2QmlDLGlCQUFpQjs7O2dDQTBCakQsU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUFrRDVELGdDQUFDO0NBQUEsQUF0RUQsQ0FrQitDLDBCQUEwQixHQW9EeEU7U0FwRFkseUJBQXlCOzs7SUFFckMsa0RBQzBCOztJQUUxQixvREFBc0M7Ozs7O0lBRXRDLDJDQUF1Qjs7Ozs7SUFFWCxzREFBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRWRpdENvbW11bmljYXRpb25Db21wb25lbnQgfSBmcm9tICcuLi9lZGl0LWNvbW11bmljYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1kYXRlLWVkaXQnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGd1aS1kYXRlLXBpY2tlciAjZGF0ZXBpY2tlclxuXHRcdFx0XHRcdFx0IFtzZWxlY3REYXRlXT1cInZhbHVlXCJcblx0XHRcdFx0XHRcdCBbbmFtZV09XCJmaWx0ZXJGaWVsZE5hbWVcIlxuXHRcdFx0XHRcdFx0IFtvcGVuRGlhbG9nXT1cInRydWVcIlxuXHRcdFx0XHRcdFx0IFtvbmx5RGlhbG9nXT1cImZhbHNlXCJcblx0XHRcdFx0XHRcdCBbcGFyZW50RWxlbWVudF09XCJwYXJlbnRcIlxuXHRcdFx0XHRcdFx0IChkaWFsb2dPcGVuZWQpPVwiZGlhbG9nT3BlbmVkKCRldmVudClcIlxuXHRcdFx0XHRcdFx0IChkYXRlU2VsZWN0ZWQpPVwidG9nZ2xlKCRldmVudClcIj5cblx0XHQ8L2d1aS1kYXRlLXBpY2tlcj5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlRWRpdFRlbXBsYXRlQ29tcG9uZW50IGV4dGVuZHMgRWRpdENvbW11bmljYXRpb25Db21wb25lbnQ8RGF0ZT4ge1xuXG5cdEBWaWV3Q2hpbGQoJ2RhdGVwaWNrZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRkYXRlUGlja2VyUmVmOiBFbGVtZW50UmVmO1xuXG5cdHJlYWRvbmx5IGZpbHRlckZpZWxkTmFtZSA9ICdkYXRlRWRpdCc7XG5cblx0cHJpdmF0ZSBvcGVuZWQgPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRjb25zdCBpbnB1dEVsZW1lbnQgPSB0aGlzLmRhdGVQaWNrZXJSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZ3VpLWRhdGUtcGlja2VyLWlucHV0Jyk7XG5cblx0XHRjb25zdCBrZXl1cCQgPSBmcm9tRXZlbnQoaW5wdXRFbGVtZW50LCAna2V5dXAnKTtcblxuXHRcdGtleXVwJFxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcigoZTogYW55KSA9PiBlLmtleUNvZGUgPT09IHRoaXMuRU5URVJfS0VZX0NPREUpLFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdFx0dGhpcy51bnN1YnNjcmliZSgpO1xuXHRcdFx0XHR0aGlzLnN1Ym1pdCgpO1xuXHRcdFx0fSk7XG5cblx0XHRrZXl1cCRcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKGU6IGFueSkgPT4gZS5rZXlDb2RlID09PSB0aGlzLkVTQ19LRVlfQ09ERSksXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnVuc3Vic2NyaWJlKCk7XG5cdFx0XHRcdHRoaXMuY2FuY2VsKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHRvZ2dsZShjaGFuZ2VkOiBEYXRlKTogdm9pZCB7XG5cdFx0dGhpcy52YWx1ZUNoYW5nZXMuZW1pdChjaGFuZ2VkKTtcblx0fVxuXG5cdGRpYWxvZ09wZW5lZChvcGVuZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLm9wZW5lZCA9IG9wZW5lZDtcblxuXHRcdGlmICghb3BlbmVkKSB7XG5cdFx0XHR0aGlzLnVuc3Vic2NyaWJlKCk7XG5cdFx0XHR0aGlzLnN1Ym1pdCgpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=