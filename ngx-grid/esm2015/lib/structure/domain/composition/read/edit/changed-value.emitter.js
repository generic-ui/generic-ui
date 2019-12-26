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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlZC12YWx1ZS5lbWl0dGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9yZWFkL2VkaXQvY2hhbmdlZC12YWx1ZS5lbWl0dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBRWpELE1BQU0sT0FBTyxtQkFBbUI7SUFJL0I7UUFGUSxhQUFRLEdBQUcsSUFBSSxhQUFhLENBQUksQ0FBQyxDQUFDLENBQUM7SUFFNUIsQ0FBQzs7Ozs7SUFFaEIsSUFBSSxDQUFDLEtBQVE7UUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsTUFBTTtRQUNMLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0NBQ0Q7Ozs7OztJQVhBLHVDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIENoYW5nZWRWYWx1ZUVtaXR0ZXI8VD4ge1xuXG5cdHByaXZhdGUgc3ViamVjdCQgPSBuZXcgUmVwbGF5U3ViamVjdDxUPigxKTtcblxuXHRjb25zdHJ1Y3RvcigpIHt9XG5cblx0ZW1pdCh2YWx1ZTogVCk6IHZvaWQge1xuXHRcdHRoaXMuc3ViamVjdCQubmV4dCh2YWx1ZSk7XG5cdH1cblxuXHRzZWxlY3QoKTogT2JzZXJ2YWJsZTxUPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3ViamVjdCQuYXNPYnNlcnZhYmxlKCk7XG5cdH1cbn1cbiJdfQ==