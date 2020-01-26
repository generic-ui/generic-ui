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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlZC12YWx1ZS5lbWl0dGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL3JlYWQvZWRpdC9jaGFuZ2VkLXZhbHVlLmVtaXR0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFFakQsTUFBTSxPQUFPLG1CQUFtQjtJQUkvQjtRQUZRLGFBQVEsR0FBRyxJQUFJLGFBQWEsQ0FBSSxDQUFDLENBQUMsQ0FBQztJQUU1QixDQUFDOzs7OztJQUVoQixJQUFJLENBQUMsS0FBUTtRQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0wsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JDLENBQUM7Q0FDRDs7Ozs7O0lBWEEsdUNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY2xhc3MgQ2hhbmdlZFZhbHVlRW1pdHRlcjxUPiB7XG5cblx0cHJpdmF0ZSBzdWJqZWN0JCA9IG5ldyBSZXBsYXlTdWJqZWN0PFQ+KDEpO1xuXG5cdGNvbnN0cnVjdG9yKCkge31cblxuXHRlbWl0KHZhbHVlOiBUKTogdm9pZCB7XG5cdFx0dGhpcy5zdWJqZWN0JC5uZXh0KHZhbHVlKTtcblx0fVxuXG5cdHNlbGVjdCgpOiBPYnNlcnZhYmxlPFQ+IHtcblx0XHRyZXR1cm4gdGhpcy5zdWJqZWN0JC5hc09ic2VydmFibGUoKTtcblx0fVxufVxuIl19