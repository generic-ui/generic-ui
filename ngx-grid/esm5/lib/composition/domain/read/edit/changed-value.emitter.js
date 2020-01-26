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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlZC12YWx1ZS5lbWl0dGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL3JlYWQvZWRpdC9jaGFuZ2VkLXZhbHVlLmVtaXR0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFFakQ7Ozs7SUFJQztRQUZRLGFBQVEsR0FBRyxJQUFJLGFBQWEsQ0FBSSxDQUFDLENBQUMsQ0FBQztJQUU1QixDQUFDOzs7OztJQUVoQixrQ0FBSTs7OztJQUFKLFVBQUssS0FBUTtRQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxvQ0FBTTs7O0lBQU47UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUNGLDBCQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7Ozs7Ozs7Ozs7SUFYQSx1Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBDaGFuZ2VkVmFsdWVFbWl0dGVyPFQ+IHtcblxuXHRwcml2YXRlIHN1YmplY3QkID0gbmV3IFJlcGxheVN1YmplY3Q8VD4oMSk7XG5cblx0Y29uc3RydWN0b3IoKSB7fVxuXG5cdGVtaXQodmFsdWU6IFQpOiB2b2lkIHtcblx0XHR0aGlzLnN1YmplY3QkLm5leHQodmFsdWUpO1xuXHR9XG5cblx0c2VsZWN0KCk6IE9ic2VydmFibGU8VD4ge1xuXHRcdHJldHVybiB0aGlzLnN1YmplY3QkLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG59XG4iXX0=