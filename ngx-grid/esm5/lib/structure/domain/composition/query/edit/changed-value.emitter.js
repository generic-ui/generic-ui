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
    ChangedValueEmitter.prototype.select = /**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlZC12YWx1ZS5lbWl0dGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9xdWVyeS9lZGl0L2NoYW5nZWQtdmFsdWUuZW1pdHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQUVqRDs7OztJQUlDO1FBRlEsYUFBUSxHQUFHLElBQUksYUFBYSxDQUFJLENBQUMsQ0FBQyxDQUFDO0lBRTVCLENBQUM7Ozs7O0lBRWhCLGtDQUFJOzs7O0lBQUosVUFBSyxLQUFRO1FBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELG9DQUFNOzs7SUFBTjtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBQ0YsMEJBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQzs7Ozs7Ozs7OztJQVhBLHVDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIENoYW5nZWRWYWx1ZUVtaXR0ZXI8VD4ge1xuXG5cdHByaXZhdGUgc3ViamVjdCQgPSBuZXcgUmVwbGF5U3ViamVjdDxUPigxKTtcblxuXHRjb25zdHJ1Y3RvcigpIHt9XG5cblx0ZW1pdCh2YWx1ZTogVCk6IHZvaWQge1xuXHRcdHRoaXMuc3ViamVjdCQubmV4dCh2YWx1ZSk7XG5cdH1cblxuXHRzZWxlY3QoKTogT2JzZXJ2YWJsZTxUPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3ViamVjdCQuYXNPYnNlcnZhYmxlKCk7XG5cdH1cbn1cbiJdfQ==