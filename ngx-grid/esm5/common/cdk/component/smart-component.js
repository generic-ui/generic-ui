/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StreamCloser } from '../reactive/stream-closer';
import { GuiComponent } from './gui-component';
import { HermesSubject, hermesTakeUntil } from '@generic-ui/hermes';
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
        _this.hermesUnsubscribe$ = new HermesSubject();
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
        this.hermesUnsubscribe();
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
     * @template T
     * @param {?} stream$
     * @param {?} callback
     * @return {?}
     */
    SmartComponent.prototype.hermesSubscribe = /**
     * @template T
     * @param {?} stream$
     * @param {?} callback
     * @return {?}
     */
    function (stream$, callback) {
        var _this = this;
        stream$
            .pipe(this.hermesTakeUntil())
            .subscribe((/**
         * @param {?} streamValues
         * @return {?}
         */
        function (streamValues) {
            callback(streamValues);
            _this.reRender();
        }));
    };
    /**
     * @template T
     * @param {?} stream$
     * @param {?} callback
     * @return {?}
     */
    SmartComponent.prototype.hermesSubscribeWithoutRender = /**
     * @template T
     * @param {?} stream$
     * @param {?} callback
     * @return {?}
     */
    function (stream$, callback) {
        stream$
            .pipe(this.hermesTakeUntil())
            .subscribe((/**
         * @param {?} streamValues
         * @return {?}
         */
        function (streamValues) {
            callback(streamValues);
        }));
    };
    // for gate
    // for gate
    /**
     * @template V
     * @param {?} stream$
     * @param {?} emitter
     * @param {?=} mapper
     * @return {?}
     */
    SmartComponent.prototype.subscribeAndEmit = 
    // for gate
    /**
     * @template V
     * @param {?} stream$
     * @param {?} emitter
     * @param {?=} mapper
     * @return {?}
     */
    function (stream$, emitter, mapper) {
        if (mapper === void 0) { mapper = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value; }); }
        stream$
            .pipe(this.hermesTakeUntil())
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            emitter.emit(mapper(value));
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
        this.hermesUnsubscribe();
    };
    /**
     * @protected
     * @return {?}
     */
    SmartComponent.prototype.hermesUnsubscribe = /**
     * @protected
     * @return {?}
     */
    function () {
        this.hermesUnsubscribe$.next();
        this.hermesUnsubscribe$.complete();
    };
    /**
     * @protected
     * @return {?}
     */
    SmartComponent.prototype.hermesTakeUntil = /**
     * @protected
     * @return {?}
     */
    function () {
        return hermesTakeUntil(this.hermesUnsubscribe$);
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
     * @private
     */
    SmartComponent.prototype.hermesUnsubscribe$;
    /**
     * @type {?}
     * @protected
     */
    SmartComponent.prototype.detector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBb0IsYUFBYSxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBRXRGOzs7O0lBQTZDLDBDQUFZO0lBUXhELHdCQUF5QyxRQUEyQixFQUM3RCxVQUFzQjtRQUQ3QixZQUVDLGtCQUFNLFVBQVUsQ0FBQyxTQUNqQjtRQUh3QyxjQUFRLEdBQVIsUUFBUSxDQUFtQjtRQU41RCxlQUFTLEdBQVksS0FBSyxDQUFDO1FBRWxCLGtCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVsQyx3QkFBa0IsR0FBRyxJQUFJLGFBQWEsRUFBUSxDQUFDOztJQUtoRSxDQUFDOzs7O0lBRUQsd0NBQWU7OztJQUFmO1FBQ0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELG9DQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELGlDQUFROzs7SUFBUjtRQUNDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDOUI7SUFDRixDQUFDOzs7O0lBRUQsb0NBQVc7OztJQUFYO1FBQ0MsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7Ozs7Ozs7SUFFRCx3Q0FBZTs7Ozs7O0lBQWYsVUFBbUIsT0FBNEIsRUFBRSxRQUE0QjtRQUE3RSxpQkFTQztRQVJBLE9BQU87YUFDTCxJQUFJLENBQ0osSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUN0QjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLFlBQWU7WUFDMUIsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7SUFFRCxxREFBNEI7Ozs7OztJQUE1QixVQUFnQyxPQUE0QixFQUFFLFFBQTRCO1FBQ3pGLE9BQU87YUFDTCxJQUFJLENBQ0osSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUN0QjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLFlBQWU7WUFDMUIsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7Ozs7Ozs7OztJQUNYLHlDQUFnQjs7Ozs7Ozs7O0lBQWhCLFVBQ0MsT0FBNEIsRUFDNUIsT0FBd0IsRUFDeEIsTUFBK0M7UUFBL0MsdUJBQUEsRUFBQTs7OztRQUE0QixVQUFDLEtBQVEsSUFBSyxPQUFBLEtBQUssRUFBTCxDQUFLLENBQUE7UUFFL0MsT0FBTzthQUNMLElBQUksQ0FDSixJQUFJLENBQUMsZUFBZSxFQUFFLENBQ3RCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsS0FBUTtZQUNuQixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzdCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFUyxvQ0FBVzs7OztJQUFyQjtRQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFUywwQ0FBaUI7Ozs7SUFBM0I7UUFDQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRVMsd0NBQWU7Ozs7SUFBekI7UUFDQyxPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUVTLGtDQUFTOzs7O0lBQW5CO1FBQ0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRixxQkFBQztBQUFELENBQUMsQUF0RkQsQ0FBNkMsWUFBWSxHQXNGeEQ7Ozs7Ozs7Ozs7SUFwRkEsbUNBQW1DOzs7OztJQUVuQyxzQ0FBbUQ7Ozs7O0lBRW5ELDRDQUFnRTs7Ozs7SUFFMUMsa0NBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJlYW1DbG9zZXIgfSBmcm9tICcuLi9yZWFjdGl2ZS9zdHJlYW0tY2xvc2VyJztcbmltcG9ydCB7IEd1aUNvbXBvbmVudCB9IGZyb20gJy4vZ3VpLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlLCBIZXJtZXNTdWJqZWN0LCBoZXJtZXNUYWtlVW50aWwgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU21hcnRDb21wb25lbnQgZXh0ZW5kcyBHdWlDb21wb25lbnQge1xuXG5cdHByaXZhdGUgdmlld0luRG9tOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdHJlYW1DbG9zZXIgPSBuZXcgU3RyZWFtQ2xvc2VyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBoZXJtZXNVbnN1YnNjcmliZSQgPSBuZXcgSGVybWVzU3ViamVjdDx2b2lkPigpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVhZG9ubHkgZGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRcdFx0ICBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy52aWV3SW5Eb20gPSB0cnVlO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5zdHJlYW1DbG9zZXIudW5zdWJzY3JpYmUoKTtcblx0XHR0aGlzLmhlcm1lc1Vuc3Vic2NyaWJlKCk7XG5cdH1cblxuXHRyZVJlbmRlcigpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pc1ZpZXdJbkRvbSgpKSB7XG5cdFx0XHR0aGlzLmRldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcblx0XHR9XG5cdH1cblxuXHRpc1ZpZXdJbkRvbSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy52aWV3SW5Eb207XG5cdH1cblxuXHRoZXJtZXNTdWJzY3JpYmU8VD4oc3RyZWFtJDogSGVybWVzT2JzZXJ2YWJsZTxUPiwgY2FsbGJhY2s6ICh2YWx1ZTogVCkgPT4gdm9pZCk6IHZvaWQge1xuXHRcdHN0cmVhbSRcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLmhlcm1lc1Rha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChzdHJlYW1WYWx1ZXM6IFQpID0+IHtcblx0XHRcdFx0Y2FsbGJhY2soc3RyZWFtVmFsdWVzKTtcblx0XHRcdFx0dGhpcy5yZVJlbmRlcigpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRoZXJtZXNTdWJzY3JpYmVXaXRob3V0UmVuZGVyPFQ+KHN0cmVhbSQ6IEhlcm1lc09ic2VydmFibGU8VD4sIGNhbGxiYWNrOiAodmFsdWU6IFQpID0+IHZvaWQpOiB2b2lkIHtcblx0XHRzdHJlYW0kXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy5oZXJtZXNUYWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoc3RyZWFtVmFsdWVzOiBUKSA9PiB7XG5cdFx0XHRcdGNhbGxiYWNrKHN0cmVhbVZhbHVlcyk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdC8vIGZvciBnYXRlXG5cdHN1YnNjcmliZUFuZEVtaXQ8Vj4oXG5cdFx0c3RyZWFtJDogSGVybWVzT2JzZXJ2YWJsZTxWPixcblx0XHRlbWl0dGVyOiBFdmVudEVtaXR0ZXI8Vj4sXG5cdFx0bWFwcGVyOiAodmFsdWU6IFYpID0+IGFueSA9ICh2YWx1ZTogVikgPT4gdmFsdWVcblx0KTogdm9pZCB7XG5cdFx0c3RyZWFtJFxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMuaGVybWVzVGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHZhbHVlOiBWKSA9PiB7XG5cdFx0XHRcdGVtaXR0ZXIuZW1pdChtYXBwZXIodmFsdWUpKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJvdGVjdGVkIHVuc3Vic2NyaWJlKCk6IHZvaWQge1xuXHRcdHRoaXMuc3RyZWFtQ2xvc2VyLnVuc3Vic2NyaWJlKCk7XG5cdFx0dGhpcy5oZXJtZXNVbnN1YnNjcmliZSgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGhlcm1lc1Vuc3Vic2NyaWJlKCk6IHZvaWQge1xuXHRcdHRoaXMuaGVybWVzVW5zdWJzY3JpYmUkLm5leHQoKTtcblx0XHR0aGlzLmhlcm1lc1Vuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGhlcm1lc1Rha2VVbnRpbCgpOiBhbnkge1xuXHRcdHJldHVybiBoZXJtZXNUYWtlVW50aWwodGhpcy5oZXJtZXNVbnN1YnNjcmliZSQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIHRha2VVbnRpbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdHJlYW1DbG9zZXIudGFrZVVudGlsKCk7XG5cdH1cblxufVxuIl19