/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
    SmartComponent.prototype.hermesUnsubscribe$;
    /**
     * @type {?}
     * @protected
     */
    SmartComponent.prototype.detector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFvQixhQUFhLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFFdEY7Ozs7SUFBNkMsMENBQVk7SUFNeEQsd0JBQXlDLFFBQTJCLEVBQzdELFVBQXNCO1FBRDdCLFlBRUMsa0JBQU0sVUFBVSxDQUFDLFNBQ2pCO1FBSHdDLGNBQVEsR0FBUixRQUFRLENBQW1CO1FBSjVELGVBQVMsR0FBWSxLQUFLLENBQUM7UUFFbEIsd0JBQWtCLEdBQUcsSUFBSSxhQUFhLEVBQVEsQ0FBQzs7SUFLaEUsQ0FBQzs7OztJQUVELHdDQUFlOzs7SUFBZjtRQUNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxvQ0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsaUNBQVE7OztJQUFSO1FBQ0MsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUM5QjtJQUNGLENBQUM7Ozs7SUFFRCxvQ0FBVzs7O0lBQVg7UUFDQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQzs7Ozs7OztJQUVELHdDQUFlOzs7Ozs7SUFBZixVQUFtQixPQUE0QixFQUFFLFFBQTRCO1FBQTdFLGlCQVNDO1FBUkEsT0FBTzthQUNMLElBQUksQ0FDSixJQUFJLENBQUMsZUFBZSxFQUFFLENBQ3RCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsWUFBZTtZQUMxQixRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdkIsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7OztJQUVELHFEQUE0Qjs7Ozs7O0lBQTVCLFVBQWdDLE9BQTRCLEVBQUUsUUFBNEI7UUFDekYsT0FBTzthQUNMLElBQUksQ0FDSixJQUFJLENBQUMsZUFBZSxFQUFFLENBQ3RCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsWUFBZTtZQUMxQixRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVzs7Ozs7Ozs7O0lBQ1gseUNBQWdCOzs7Ozs7Ozs7SUFBaEIsVUFDQyxPQUE0QixFQUM1QixPQUF3QixFQUN4QixNQUErQztRQUEvQyx1QkFBQSxFQUFBOzs7O1FBQTRCLFVBQUMsS0FBUSxJQUFLLE9BQUEsS0FBSyxFQUFMLENBQUssQ0FBQTtRQUUvQyxPQUFPO2FBQ0wsSUFBSSxDQUNKLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FDdEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxLQUFRO1lBQ25CLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVTLG9DQUFXOzs7O0lBQXJCO1FBQ0MsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFUywwQ0FBaUI7Ozs7SUFBM0I7UUFDQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRVMsd0NBQWU7Ozs7SUFBekI7UUFDQyxPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUYscUJBQUM7QUFBRCxDQUFDLEFBOUVELENBQTZDLFlBQVksR0E4RXhEOzs7Ozs7Ozs7O0lBNUVBLG1DQUFtQzs7Ozs7SUFFbkMsNENBQWdFOzs7OztJQUUxQyxrQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHdWlDb21wb25lbnQgfSBmcm9tICcuL2d1aS1jb21wb25lbnQnO1xuaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSwgSGVybWVzU3ViamVjdCwgaGVybWVzVGFrZVVudGlsIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNtYXJ0Q29tcG9uZW50IGV4dGVuZHMgR3VpQ29tcG9uZW50IHtcblxuXHRwcml2YXRlIHZpZXdJbkRvbTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgaGVybWVzVW5zdWJzY3JpYmUkID0gbmV3IEhlcm1lc1N1YmplY3Q8dm9pZD4oKTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJvdGVjdGVkIHJlYWRvbmx5IGRldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0XHRcdCAgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHRoaXMudmlld0luRG9tID0gdHJ1ZTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuaGVybWVzVW5zdWJzY3JpYmUoKTtcblx0fVxuXG5cdHJlUmVuZGVyKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzVmlld0luRG9tKCkpIHtcblx0XHRcdHRoaXMuZGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdH1cblx0fVxuXG5cdGlzVmlld0luRG9tKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnZpZXdJbkRvbTtcblx0fVxuXG5cdGhlcm1lc1N1YnNjcmliZTxUPihzdHJlYW0kOiBIZXJtZXNPYnNlcnZhYmxlPFQ+LCBjYWxsYmFjazogKHZhbHVlOiBUKSA9PiB2b2lkKTogdm9pZCB7XG5cdFx0c3RyZWFtJFxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMuaGVybWVzVGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHN0cmVhbVZhbHVlczogVCkgPT4ge1xuXHRcdFx0XHRjYWxsYmFjayhzdHJlYW1WYWx1ZXMpO1xuXHRcdFx0XHR0aGlzLnJlUmVuZGVyKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGhlcm1lc1N1YnNjcmliZVdpdGhvdXRSZW5kZXI8VD4oc3RyZWFtJDogSGVybWVzT2JzZXJ2YWJsZTxUPiwgY2FsbGJhY2s6ICh2YWx1ZTogVCkgPT4gdm9pZCk6IHZvaWQge1xuXHRcdHN0cmVhbSRcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLmhlcm1lc1Rha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChzdHJlYW1WYWx1ZXM6IFQpID0+IHtcblx0XHRcdFx0Y2FsbGJhY2soc3RyZWFtVmFsdWVzKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0Ly8gZm9yIGdhdGVcblx0c3Vic2NyaWJlQW5kRW1pdDxWPihcblx0XHRzdHJlYW0kOiBIZXJtZXNPYnNlcnZhYmxlPFY+LFxuXHRcdGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxWPixcblx0XHRtYXBwZXI6ICh2YWx1ZTogVikgPT4gYW55ID0gKHZhbHVlOiBWKSA9PiB2YWx1ZVxuXHQpOiB2b2lkIHtcblx0XHRzdHJlYW0kXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy5oZXJtZXNUYWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgodmFsdWU6IFYpID0+IHtcblx0XHRcdFx0ZW1pdHRlci5lbWl0KG1hcHBlcih2YWx1ZSkpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgdW5zdWJzY3JpYmUoKTogdm9pZCB7XG5cdFx0dGhpcy5oZXJtZXNVbnN1YnNjcmliZSgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGhlcm1lc1Vuc3Vic2NyaWJlKCk6IHZvaWQge1xuXHRcdHRoaXMuaGVybWVzVW5zdWJzY3JpYmUkLm5leHQoKTtcblx0XHR0aGlzLmhlcm1lc1Vuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGhlcm1lc1Rha2VVbnRpbCgpOiBhbnkge1xuXHRcdHJldHVybiBoZXJtZXNUYWtlVW50aWwodGhpcy5oZXJtZXNVbnN1YnNjcmliZSQpO1xuXHR9XG5cbn1cbiJdfQ==