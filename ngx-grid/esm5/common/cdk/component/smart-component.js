/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StreamCloser } from '../reactive/stream-closer';
import { GuiComponent } from './gui-component';
/**
 * @abstract
 */
var /**
 * @abstract
 */
SmartComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SmartComponent, _super);
    function SmartComponent(detector, elementRef) {
        var _this = _super.call(this, elementRef) || this;
        _this.detector = detector;
        _this.viewInDom = false;
        _this.streamCloser = new StreamCloser();
        return _this;
    }
    /**
     * @return {?}
     */
    SmartComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.viewInDom = true;
    };
    /**
     * @return {?}
     */
    SmartComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.streamCloser.unsubscribe();
    };
    /**
     * @return {?}
     */
    SmartComponent.prototype.reRender = /**
     * @return {?}
     */
    function () {
        if (this.isViewInDom()) {
            this.detector.detectChanges();
        }
    };
    /**
     * @return {?}
     */
    SmartComponent.prototype.isViewInDom = /**
     * @return {?}
     */
    function () {
        return this.viewInDom;
    };
    /**
     * @param {?} obs$
     * @param {?} callback
     * @return {?}
     */
    SmartComponent.prototype.subscribeAndRender = /**
     * @param {?} obs$
     * @param {?} callback
     * @return {?}
     */
    function (obs$, callback) {
        var _this = this;
        return obs$
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} subscribeArguments
         * @return {?}
         */
        function (subscribeArguments) {
            callback(subscribeArguments);
            _this.reRender();
        }));
    };
    /**
     * @param {?} obs$
     * @param {?} callback
     * @return {?}
     */
    SmartComponent.prototype.subscribeWithoutRender = /**
     * @param {?} obs$
     * @param {?} callback
     * @return {?}
     */
    function (obs$, callback) {
        return obs$
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} subscribeArguments
         * @return {?}
         */
        function (subscribeArguments) {
            callback(subscribeArguments);
        }));
    };
    /**
     * @protected
     * @return {?}
     */
    SmartComponent.prototype.unsubscribe = /**
     * @protected
     * @return {?}
     */
    function () {
        this.streamCloser.unsubscribe();
    };
    /**
     * @protected
     * @return {?}
     */
    SmartComponent.prototype.takeUntil = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.streamCloser.takeUntil();
    };
    return SmartComponent;
}(GuiComponent));
/**
 * @abstract
 */
export { SmartComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SmartComponent.prototype.viewInDom;
    /**
     * @type {?}
     * @private
     */
    SmartComponent.prototype.streamCloser;
    /**
     * @type {?}
     * @protected
     */
    SmartComponent.prototype.detector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBRy9DOzs7O0lBQTZDLDBDQUFZO0lBTXhELHdCQUF5QyxRQUEyQixFQUM3RCxVQUFzQjtRQUQ3QixZQUVDLGtCQUFNLFVBQVUsQ0FBQyxTQUNqQjtRQUh3QyxjQUFRLEdBQVIsUUFBUSxDQUFtQjtRQUo1RCxlQUFTLEdBQVksS0FBSyxDQUFDO1FBRWxCLGtCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7SUFLbkQsQ0FBQzs7OztJQUVELHdDQUFlOzs7SUFBZjtRQUNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxvQ0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFRCxpQ0FBUTs7O0lBQVI7UUFDQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQzlCO0lBQ0YsQ0FBQzs7OztJQUVELG9DQUFXOzs7SUFBWDtRQUNDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QixDQUFDOzs7Ozs7SUFFRCwyQ0FBa0I7Ozs7O0lBQWxCLFVBQW1CLElBQVMsRUFBRSxRQUE2QjtRQUEzRCxpQkFTQztRQVJBLE9BQU8sSUFBSTthQUNULElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsa0JBQXVCO1lBQ2xDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVELCtDQUFzQjs7Ozs7SUFBdEIsVUFBdUIsSUFBUyxFQUFFLFFBQTZCO1FBQzlELE9BQU8sSUFBSTthQUNULElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsa0JBQXVCO1lBQ2xDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzlCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFUyxvQ0FBVzs7OztJQUFyQjtRQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFUyxrQ0FBUzs7OztJQUFuQjtRQUNDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUYscUJBQUM7QUFBRCxDQUFDLEFBMURELENBQTZDLFlBQVksR0EwRHhEOzs7Ozs7Ozs7O0lBeERBLG1DQUFtQzs7Ozs7SUFFbkMsc0NBQW1EOzs7OztJQUU3QixrQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJlYW1DbG9zZXIgfSBmcm9tICcuLi9yZWFjdGl2ZS9zdHJlYW0tY2xvc2VyJztcbmltcG9ydCB7IEd1aUNvbXBvbmVudCB9IGZyb20gJy4vZ3VpLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNtYXJ0Q29tcG9uZW50IGV4dGVuZHMgR3VpQ29tcG9uZW50IHtcblxuXHRwcml2YXRlIHZpZXdJbkRvbTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RyZWFtQ2xvc2VyID0gbmV3IFN0cmVhbUNsb3NlcigpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVhZG9ubHkgZGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRcdFx0ICBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy52aWV3SW5Eb20gPSB0cnVlO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5zdHJlYW1DbG9zZXIudW5zdWJzY3JpYmUoKTtcblx0fVxuXG5cdHJlUmVuZGVyKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzVmlld0luRG9tKCkpIHtcblx0XHRcdHRoaXMuZGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdH1cblx0fVxuXG5cdGlzVmlld0luRG9tKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnZpZXdJbkRvbTtcblx0fVxuXG5cdHN1YnNjcmliZUFuZFJlbmRlcihvYnMkOiBhbnksIGNhbGxiYWNrOiAoYXJnczogYW55KSA9PiB2b2lkKTogU3Vic2NyaXB0aW9uIHtcblx0XHRyZXR1cm4gb2JzJFxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHN1YnNjcmliZUFyZ3VtZW50czogYW55KSA9PiB7XG5cdFx0XHRcdGNhbGxiYWNrKHN1YnNjcmliZUFyZ3VtZW50cyk7XG5cdFx0XHRcdHRoaXMucmVSZW5kZXIoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0c3Vic2NyaWJlV2l0aG91dFJlbmRlcihvYnMkOiBhbnksIGNhbGxiYWNrOiAoYXJnczogYW55KSA9PiB2b2lkKTogU3Vic2NyaXB0aW9uIHtcblx0XHRyZXR1cm4gb2JzJFxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHN1YnNjcmliZUFyZ3VtZW50czogYW55KSA9PiB7XG5cdFx0XHRcdGNhbGxiYWNrKHN1YnNjcmliZUFyZ3VtZW50cyk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByb3RlY3RlZCB1bnN1YnNjcmliZSgpOiB2b2lkIHtcblx0XHR0aGlzLnN0cmVhbUNsb3Nlci51bnN1YnNjcmliZSgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIHRha2VVbnRpbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdHJlYW1DbG9zZXIudGFrZVVudGlsKCk7XG5cdH1cblxufVxuIl19