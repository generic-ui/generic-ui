/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var FabricDatePickerYearsService = /** @class */ (function () {
    function FabricDatePickerYearsService() {
        this.years$ = new Subject();
    }
    /**
     * @return {?}
     */
    FabricDatePickerYearsService.prototype.onYears = /**
     * @return {?}
     */
    function () {
        return this.years$.asObservable();
    };
    /**
     * @param {?} years
     * @return {?}
     */
    FabricDatePickerYearsService.prototype.next = /**
     * @param {?} years
     * @return {?}
     */
    function (years) {
        this.years$.next(years);
    };
    FabricDatePickerYearsService.decorators = [
        { type: Injectable }
    ];
    return FabricDatePickerYearsService;
}());
export { FabricDatePickerYearsService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerYearsService.prototype.years$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLXllYXJzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJmb3JtL2RhdGUtcGlja2VyL2NhbGVuZGFyL3llYXJzL2ZhYnJpYy1kYXRlLXBpY2tlci15ZWFycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFM0M7SUFBQTtRQUdrQixXQUFNLEdBQUcsSUFBSSxPQUFPLEVBQXdCLENBQUM7SUFVL0QsQ0FBQzs7OztJQVJBLDhDQUFPOzs7SUFBUDtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELDJDQUFJOzs7O0lBQUosVUFBSyxLQUEyQjtRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDOztnQkFYRCxVQUFVOztJQWFYLG1DQUFDO0NBQUEsQUFiRCxJQWFDO1NBWlksNEJBQTRCOzs7Ozs7SUFFeEMsOENBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFicmljRGF0ZVBpY2tlclllYXJzU2VydmljZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSB5ZWFycyQgPSBuZXcgU3ViamVjdDxBcnJheTxBcnJheTxudW1iZXI+Pj4oKTtcblxuXHRvblllYXJzKCk6IE9ic2VydmFibGU8QXJyYXk8QXJyYXk8bnVtYmVyPj4+IHtcblx0XHRyZXR1cm4gdGhpcy55ZWFycyQuYXNPYnNlcnZhYmxlKCk7XG5cdH1cblxuXHRuZXh0KHllYXJzOiBBcnJheTxBcnJheTxudW1iZXI+Pik6IHZvaWQge1xuXHRcdHRoaXMueWVhcnMkLm5leHQoeWVhcnMpO1xuXHR9XG5cbn1cbiJdfQ==