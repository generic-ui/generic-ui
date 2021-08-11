/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { EditCommunicationComponent } from '../edit-communication.component';
import { fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';
import { StreamCloser } from '../../../../../common/cdk/reactive/stream-closer';
var DateEditTemplateComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DateEditTemplateComponent, _super);
    function DateEditTemplateComponent(changeDetectorRef, elementRef) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.filterFieldName = 'dateEdit';
        _this.opened = false;
        _this.localStreamCloser = new StreamCloser();
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
        function (e) { return e.keyCode === _this.ENTER_KEY_CODE; })), this.localStreamCloser.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.localStreamCloser.unsubscribe();
            _this.submit();
        }));
        keyup$
            .pipe(filter((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.keyCode === _this.ESC_KEY_CODE; })), this.localStreamCloser.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.localStreamCloser.unsubscribe();
            _this.cancel();
        }));
    };
    /**
     * @return {?}
     */
    DateEditTemplateComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.localStreamCloser.unsubscribe();
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
            this.localStreamCloser.unsubscribe();
            this.submit();
        }
    };
    /**
     * @protected
     * @return {?}
     */
    DateEditTemplateComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-date-edit';
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
        { type: ChangeDetectorRef },
        { type: ElementRef }
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
    DateEditTemplateComponent.prototype.localStreamCloser;
    /**
     * @type {?}
     * @private
     */
    DateEditTemplateComponent.prototype.changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9lZGl0L3RlbXBsYXRlL2RhdGUtZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEksT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFN0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBR2hGO0lBa0IrQyxxREFBZ0M7SUFXOUUsbUNBQTZCLGlCQUFvQyxFQUM5RCxVQUFzQjtRQUR6QixZQUVDLGtCQUFNLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxTQUNwQztRQUg0Qix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBTnhELHFCQUFlLEdBQUcsVUFBVSxDQUFDO1FBRTlCLFlBQU0sR0FBRyxLQUFLLENBQUM7UUFFTix1QkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDOztJQUt4RCxDQUFDOzs7O0lBRUQsbURBQWU7OztJQUFmO1FBQUEsaUJBd0JDOztZQXZCTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDOztZQUV2RixNQUFNLEdBQUcsU0FBUyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUM7UUFFL0MsTUFBTTthQUNKLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsVUFBQyxDQUFNLElBQUssT0FBQSxDQUFDLENBQUMsT0FBTyxLQUFLLEtBQUksQ0FBQyxjQUFjLEVBQWpDLENBQWlDLEVBQUMsRUFDckQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxDQUNsQzthQUNBLFNBQVM7OztRQUFDO1lBQ1YsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFDO1FBRUosTUFBTTthQUNKLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsVUFBQyxDQUFNLElBQUssT0FBQSxDQUFDLENBQUMsT0FBTyxLQUFLLEtBQUksQ0FBQyxZQUFZLEVBQS9CLENBQStCLEVBQUMsRUFDbkQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxDQUNsQzthQUNBLFNBQVM7OztRQUFDO1lBQ1YsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELCtDQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzs7OztJQUVELDBDQUFNOzs7O0lBQU4sVUFBTyxPQUFhO1FBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsZ0RBQVk7Ozs7SUFBWixVQUFhLE1BQWU7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFckIsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNaLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZDtJQUNGLENBQUM7Ozs7O0lBRVMsbURBQWU7Ozs7SUFBekI7UUFDQyxPQUFPLGVBQWUsQ0FBQztJQUN4QixDQUFDOztnQkEvRUQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsMldBWVQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7OztnQkEzQmlDLGlCQUFpQjtnQkFBYSxVQUFVOzs7Z0NBOEJ4RSxTQUFTLFNBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQTZENUQsZ0NBQUM7Q0FBQSxBQWpGRCxDQWtCK0MsMEJBQTBCLEdBK0R4RTtTQS9EWSx5QkFBeUI7OztJQUVyQyxrREFDMEI7O0lBRTFCLG9EQUFzQzs7Ozs7SUFFdEMsMkNBQXVCOzs7OztJQUV2QixzREFBd0Q7Ozs7O0lBRTVDLHNEQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVkaXRDb21tdW5pY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vZWRpdC1jb21tdW5pY2F0aW9uLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTdHJlYW1DbG9zZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlL3N0cmVhbS1jbG9zZXInO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1kYXRlLWVkaXQnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGd1aS1kYXRlLXBpY2tlciAjZGF0ZXBpY2tlclxuXHRcdFx0XHRcdFx0IFtzZWxlY3REYXRlXT1cInZhbHVlXCJcblx0XHRcdFx0XHRcdCBbbmFtZV09XCJmaWx0ZXJGaWVsZE5hbWVcIlxuXHRcdFx0XHRcdFx0IFtvcGVuRGlhbG9nXT1cInRydWVcIlxuXHRcdFx0XHRcdFx0IFtvbmx5RGlhbG9nXT1cImZhbHNlXCJcblx0XHRcdFx0XHRcdCBbcGFyZW50RWxlbWVudF09XCJwYXJlbnRcIlxuXHRcdFx0XHRcdFx0IChkaWFsb2dPcGVuZWQpPVwiZGlhbG9nT3BlbmVkKCRldmVudClcIlxuXHRcdFx0XHRcdFx0IChkYXRlU2VsZWN0ZWQpPVwidG9nZ2xlKCRldmVudClcIj5cblx0XHQ8L2d1aS1kYXRlLXBpY2tlcj5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlRWRpdFRlbXBsYXRlQ29tcG9uZW50IGV4dGVuZHMgRWRpdENvbW11bmljYXRpb25Db21wb25lbnQ8RGF0ZT4ge1xuXG5cdEBWaWV3Q2hpbGQoJ2RhdGVwaWNrZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRkYXRlUGlja2VyUmVmOiBFbGVtZW50UmVmO1xuXG5cdHJlYWRvbmx5IGZpbHRlckZpZWxkTmFtZSA9ICdkYXRlRWRpdCc7XG5cblx0cHJpdmF0ZSBvcGVuZWQgPSBmYWxzZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGxvY2FsU3RyZWFtQ2xvc2VyID0gbmV3IFN0cmVhbUNsb3NlcigpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdGNvbnN0IGlucHV0RWxlbWVudCA9IHRoaXMuZGF0ZVBpY2tlclJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ndWktZGF0ZS1waWNrZXItaW5wdXQnKTtcblxuXHRcdGNvbnN0IGtleXVwJCA9IGZyb21FdmVudChpbnB1dEVsZW1lbnQsICdrZXl1cCcpO1xuXG5cdFx0a2V5dXAkXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZmlsdGVyKChlOiBhbnkpID0+IGUua2V5Q29kZSA9PT0gdGhpcy5FTlRFUl9LRVlfQ09ERSksXG5cdFx0XHRcdHRoaXMubG9jYWxTdHJlYW1DbG9zZXIudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmxvY2FsU3RyZWFtQ2xvc2VyLnVuc3Vic2NyaWJlKCk7XG5cdFx0XHRcdHRoaXMuc3VibWl0KCk7XG5cdFx0XHR9KTtcblxuXHRcdGtleXVwJFxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcigoZTogYW55KSA9PiBlLmtleUNvZGUgPT09IHRoaXMuRVNDX0tFWV9DT0RFKSxcblx0XHRcdFx0dGhpcy5sb2NhbFN0cmVhbUNsb3Nlci50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMubG9jYWxTdHJlYW1DbG9zZXIudW5zdWJzY3JpYmUoKTtcblx0XHRcdFx0dGhpcy5jYW5jZWwoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5sb2NhbFN0cmVhbUNsb3Nlci51bnN1YnNjcmliZSgpO1xuXHR9XG5cblx0dG9nZ2xlKGNoYW5nZWQ6IERhdGUpOiB2b2lkIHtcblx0XHR0aGlzLnZhbHVlQ2hhbmdlcy5lbWl0KGNoYW5nZWQpO1xuXHR9XG5cblx0ZGlhbG9nT3BlbmVkKG9wZW5lZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMub3BlbmVkID0gb3BlbmVkO1xuXG5cdFx0aWYgKCFvcGVuZWQpIHtcblx0XHRcdHRoaXMubG9jYWxTdHJlYW1DbG9zZXIudW5zdWJzY3JpYmUoKTtcblx0XHRcdHRoaXMuc3VibWl0KCk7XG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWRhdGUtZWRpdCc7XG5cdH1cblxufVxuIl19