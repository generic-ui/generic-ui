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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlZC12YWx1ZS5lbWl0dGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluLWFwaS9yZWFkL2VkaXQvY2hhbmdlZC12YWx1ZS5lbWl0dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBRWpELE1BQU0sT0FBTyxtQkFBbUI7SUFJL0I7UUFGUSxhQUFRLEdBQUcsSUFBSSxhQUFhLENBQUksQ0FBQyxDQUFDLENBQUM7SUFHM0MsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsS0FBUTtRQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxFQUFFO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JDLENBQUM7Q0FDRDs7Ozs7O0lBWkEsdUNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY2xhc3MgQ2hhbmdlZFZhbHVlRW1pdHRlcjxUPiB7XG5cblx0cHJpdmF0ZSBzdWJqZWN0JCA9IG5ldyBSZXBsYXlTdWJqZWN0PFQ+KDEpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0ZW1pdCh2YWx1ZTogVCk6IHZvaWQge1xuXHRcdHRoaXMuc3ViamVjdCQubmV4dCh2YWx1ZSk7XG5cdH1cblxuXHRvbigpOiBPYnNlcnZhYmxlPFQ+IHtcblx0XHRyZXR1cm4gdGhpcy5zdWJqZWN0JC5hc09ic2VydmFibGUoKTtcblx0fVxufVxuIl19