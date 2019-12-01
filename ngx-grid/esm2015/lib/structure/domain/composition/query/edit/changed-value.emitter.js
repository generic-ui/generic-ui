/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ReplaySubject } from 'rxjs';
/**
 * @template T
 */
export class ChangedValueEmitter {
    constructor() {
        this.subject$ = new ReplaySubject(1);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    emit(value) {
        this.subject$.next(value);
    }
    /**
     * @return {?}
     */
    select() {
        return this.subject$.asObservable();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ChangedValueEmitter.prototype.subject$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlZC12YWx1ZS5lbWl0dGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9xdWVyeS9lZGl0L2NoYW5nZWQtdmFsdWUuZW1pdHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQUVqRCxNQUFNLE9BQU8sbUJBQW1CO0lBSS9CO1FBRlEsYUFBUSxHQUFHLElBQUksYUFBYSxDQUFJLENBQUMsQ0FBQyxDQUFDO0lBRTVCLENBQUM7Ozs7O0lBRWhCLElBQUksQ0FBQyxLQUFRO1FBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELE1BQU07UUFDTCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckMsQ0FBQztDQUNEOzs7Ozs7SUFYQSx1Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBDaGFuZ2VkVmFsdWVFbWl0dGVyPFQ+IHtcblxuXHRwcml2YXRlIHN1YmplY3QkID0gbmV3IFJlcGxheVN1YmplY3Q8VD4oMSk7XG5cblx0Y29uc3RydWN0b3IoKSB7fVxuXG5cdGVtaXQodmFsdWU6IFQpOiB2b2lkIHtcblx0XHR0aGlzLnN1YmplY3QkLm5leHQodmFsdWUpO1xuXHR9XG5cblx0c2VsZWN0KCk6IE9ic2VydmFibGU8VD4ge1xuXHRcdHJldHVybiB0aGlzLnN1YmplY3QkLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG59XG4iXX0=