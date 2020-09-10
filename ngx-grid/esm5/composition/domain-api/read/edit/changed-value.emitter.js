/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ReplaySubject } from 'rxjs';
/**
 * @template T
 */
var /**
 * @template T
 */
ChangedValueEmitter = /** @class */ (function () {
    function ChangedValueEmitter() {
        this.subject$ = new ReplaySubject(1);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ChangedValueEmitter.prototype.emit = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.subject$.next(value);
    };
    /**
     * @return {?}
     */
    ChangedValueEmitter.prototype.on = /**
     * @return {?}
     */
    function () {
        return this.subject$.asObservable();
    };
    return ChangedValueEmitter;
}());
/**
 * @template T
 */
export { ChangedValueEmitter };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ChangedValueEmitter.prototype.subject$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlZC12YWx1ZS5lbWl0dGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9kb21haW4tYXBpL3JlYWQvZWRpdC9jaGFuZ2VkLXZhbHVlLmVtaXR0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFFakQ7Ozs7SUFJQztRQUZRLGFBQVEsR0FBRyxJQUFJLGFBQWEsQ0FBSSxDQUFDLENBQUMsQ0FBQztJQUczQyxDQUFDOzs7OztJQUVELGtDQUFJOzs7O0lBQUosVUFBSyxLQUFRO1FBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELGdDQUFFOzs7SUFBRjtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBQ0YsMEJBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQzs7Ozs7Ozs7OztJQVpBLHVDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIENoYW5nZWRWYWx1ZUVtaXR0ZXI8VD4ge1xuXG5cdHByaXZhdGUgc3ViamVjdCQgPSBuZXcgUmVwbGF5U3ViamVjdDxUPigxKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdGVtaXQodmFsdWU6IFQpOiB2b2lkIHtcblx0XHR0aGlzLnN1YmplY3QkLm5leHQodmFsdWUpO1xuXHR9XG5cblx0b24oKTogT2JzZXJ2YWJsZTxUPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3ViamVjdCQuYXNPYnNlcnZhYmxlKCk7XG5cdH1cbn1cbiJdfQ==