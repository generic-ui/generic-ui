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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlZC12YWx1ZS5lbWl0dGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9yZWFkL2VkaXQvY2hhbmdlZC12YWx1ZS5lbWl0dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBRWpEOzs7O0lBSUM7UUFGUSxhQUFRLEdBQUcsSUFBSSxhQUFhLENBQUksQ0FBQyxDQUFDLENBQUM7SUFFNUIsQ0FBQzs7Ozs7SUFFaEIsa0NBQUk7Ozs7SUFBSixVQUFLLEtBQVE7UUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsb0NBQU07OztJQUFOO1FBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFDRiwwQkFBQztBQUFELENBQUMsQUFiRCxJQWFDOzs7Ozs7Ozs7O0lBWEEsdUNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY2xhc3MgQ2hhbmdlZFZhbHVlRW1pdHRlcjxUPiB7XG5cblx0cHJpdmF0ZSBzdWJqZWN0JCA9IG5ldyBSZXBsYXlTdWJqZWN0PFQ+KDEpO1xuXG5cdGNvbnN0cnVjdG9yKCkge31cblxuXHRlbWl0KHZhbHVlOiBUKTogdm9pZCB7XG5cdFx0dGhpcy5zdWJqZWN0JC5uZXh0KHZhbHVlKTtcblx0fVxuXG5cdHNlbGVjdCgpOiBPYnNlcnZhYmxlPFQ+IHtcblx0XHRyZXR1cm4gdGhpcy5zdWJqZWN0JC5hc09ic2VydmFibGUoKTtcblx0fVxufVxuIl19