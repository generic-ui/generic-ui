/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HermesReplaySubject } from '@generic-ui/hermes';
/**
 * @template T
 */
export class ChangedValueEmitter {
    constructor() {
        this.subject$ = new HermesReplaySubject(1);
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
        return this.subject$.toObservable();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ChangedValueEmitter.prototype.subject$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlZC12YWx1ZS5lbWl0dGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2VkaXQvY2hhbmdlZC12YWx1ZS5lbWl0dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQW9CLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFFM0UsTUFBTSxPQUFPLG1CQUFtQjtJQUkvQjtRQUZRLGFBQVEsR0FBRyxJQUFJLG1CQUFtQixDQUFJLENBQUMsQ0FBQyxDQUFDO0lBR2pELENBQUM7Ozs7O0lBRUQsSUFBSSxDQUFDLEtBQVE7UUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsRUFBRTtRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0NBQ0Q7Ozs7OztJQVpBLHVDQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlcm1lc09ic2VydmFibGUsIEhlcm1lc1JlcGxheVN1YmplY3QgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5leHBvcnQgY2xhc3MgQ2hhbmdlZFZhbHVlRW1pdHRlcjxUPiB7XG5cblx0cHJpdmF0ZSBzdWJqZWN0JCA9IG5ldyBIZXJtZXNSZXBsYXlTdWJqZWN0PFQ+KDEpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0ZW1pdCh2YWx1ZTogVCk6IHZvaWQge1xuXHRcdHRoaXMuc3ViamVjdCQubmV4dCh2YWx1ZSk7XG5cdH1cblxuXHRvbigpOiBIZXJtZXNPYnNlcnZhYmxlPFQ+IHtcblx0XHRyZXR1cm4gdGhpcy5zdWJqZWN0JC50b09ic2VydmFibGUoKTtcblx0fVxufVxuIl19