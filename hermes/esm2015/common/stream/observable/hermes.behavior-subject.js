/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HermesSubject } from './hermes.subject';
/**
 * @template T
 */
export class HermesBehaviorSubject extends HermesSubject {
    /**
     * @param {?} defaultValue
     */
    constructor(defaultValue) {
        super();
        this.lastValue = defaultValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    next(value) {
        this.lastValue = value;
        super.next(value);
    }
    /**
     * @param {?} arg
     * @return {?}
     */
    subscribe(arg) {
        /** @type {?} */
        const subscription = super.subscribe(arguments[0], arguments[1], arguments[2]);
        super.next(this.lastValue);
        return subscription;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    HermesBehaviorSubject.prototype.lastValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLmJlaGF2aW9yLXN1YmplY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vc3RyZWFtL29ic2VydmFibGUvaGVybWVzLmJlaGF2aW9yLXN1YmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQUlqRCxNQUFNLE9BQU8scUJBQXlCLFNBQVEsYUFBZ0I7Ozs7SUFJN0QsWUFBWSxZQUFlO1FBQzFCLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsS0FBUTtRQUNaLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFVRCxTQUFTLENBQ1IsR0FBUTs7Y0FHRixZQUFZLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU5RSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUUzQixPQUFPLFlBQVksQ0FBQztJQUNyQixDQUFDO0NBQ0Q7Ozs7OztJQTlCQSwwQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZXJtZXNTdWJqZWN0IH0gZnJvbSAnLi9oZXJtZXMuc3ViamVjdCc7XG5pbXBvcnQgeyBIZXJtZXNTdWJzY3JpcHRpb24gfSBmcm9tICcuLi9zdWJzY3JpcHRpb24vaGVybWVzLnN1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBIZXJtZXNTdWJzY3JpYmVyIH0gZnJvbSAnLi9zdWJzY3JpYmVyL2hlcm1lcy5zdWJzY3JpYmVyJztcblxuZXhwb3J0IGNsYXNzIEhlcm1lc0JlaGF2aW9yU3ViamVjdDxUPiBleHRlbmRzIEhlcm1lc1N1YmplY3Q8VD4ge1xuXG5cdHByaXZhdGUgbGFzdFZhbHVlOiBUO1xuXG5cdGNvbnN0cnVjdG9yKGRlZmF1bHRWYWx1ZTogVCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5sYXN0VmFsdWUgPSBkZWZhdWx0VmFsdWU7XG5cdH1cblxuXHRuZXh0KHZhbHVlOiBUKSB7XG5cdFx0dGhpcy5sYXN0VmFsdWUgPSB2YWx1ZTtcblx0XHRzdXBlci5uZXh0KHZhbHVlKTtcblx0fVxuXG5cdHN1YnNjcmliZShcblx0XHRuZXh0PzogKHZhbHVlOiBUKSA9PiB2b2lkLFxuXHRcdGVycm9yPzogKGVycm9yOiBhbnkpID0+IHZvaWQsXG5cdFx0Y29tcGxldGU/OiAoKSA9PiB2b2lkXG5cdCk6IEhlcm1lc1N1YnNjcmlwdGlvbjtcblx0c3Vic2NyaWJlKFxuXHRcdHN1YnNjcmliZXI6IEhlcm1lc1N1YnNjcmliZXI8VD5cblx0KTogSGVybWVzU3Vic2NyaXB0aW9uO1xuXHRzdWJzY3JpYmUoXG5cdFx0YXJnOiBhbnlcblx0KTogSGVybWVzU3Vic2NyaXB0aW9uIHtcblxuXHRcdGNvbnN0IHN1YnNjcmlwdGlvbiA9IHN1cGVyLnN1YnNjcmliZShhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcblxuXHRcdHN1cGVyLm5leHQodGhpcy5sYXN0VmFsdWUpO1xuXG5cdFx0cmV0dXJuIHN1YnNjcmlwdGlvbjtcblx0fVxufVxuIl19