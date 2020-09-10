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
    on() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlZC12YWx1ZS5lbWl0dGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9kb21haW4tYXBpL3JlYWQvZWRpdC9jaGFuZ2VkLXZhbHVlLmVtaXR0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFFakQsTUFBTSxPQUFPLG1CQUFtQjtJQUkvQjtRQUZRLGFBQVEsR0FBRyxJQUFJLGFBQWEsQ0FBSSxDQUFDLENBQUMsQ0FBQztJQUczQyxDQUFDOzs7OztJQUVELElBQUksQ0FBQyxLQUFRO1FBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELEVBQUU7UUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckMsQ0FBQztDQUNEOzs7Ozs7SUFaQSx1Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBDaGFuZ2VkVmFsdWVFbWl0dGVyPFQ+IHtcblxuXHRwcml2YXRlIHN1YmplY3QkID0gbmV3IFJlcGxheVN1YmplY3Q8VD4oMSk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRlbWl0KHZhbHVlOiBUKTogdm9pZCB7XG5cdFx0dGhpcy5zdWJqZWN0JC5uZXh0KHZhbHVlKTtcblx0fVxuXG5cdG9uKCk6IE9ic2VydmFibGU8VD4ge1xuXHRcdHJldHVybiB0aGlzLnN1YmplY3QkLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG59XG4iXX0=