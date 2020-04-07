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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlZC12YWx1ZS5lbWl0dGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vcmVhZC9lZGl0L2NoYW5nZWQtdmFsdWUuZW1pdHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQUVqRCxNQUFNLE9BQU8sbUJBQW1CO0lBSS9CO1FBRlEsYUFBUSxHQUFHLElBQUksYUFBYSxDQUFJLENBQUMsQ0FBQyxDQUFDO0lBRzNDLENBQUM7Ozs7O0lBRUQsSUFBSSxDQUFDLEtBQVE7UUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsRUFBRTtRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0NBQ0Q7Ozs7OztJQVpBLHVDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIENoYW5nZWRWYWx1ZUVtaXR0ZXI8VD4ge1xuXG5cdHByaXZhdGUgc3ViamVjdCQgPSBuZXcgUmVwbGF5U3ViamVjdDxUPigxKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdGVtaXQodmFsdWU6IFQpOiB2b2lkIHtcblx0XHR0aGlzLnN1YmplY3QkLm5leHQodmFsdWUpO1xuXHR9XG5cblx0b24oKTogT2JzZXJ2YWJsZTxUPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3ViamVjdCQuYXNPYnNlcnZhYmxlKCk7XG5cdH1cbn1cbiJdfQ==