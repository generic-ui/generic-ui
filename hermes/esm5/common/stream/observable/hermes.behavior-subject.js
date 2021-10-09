/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HermesSubject } from './hermes.subject';
/**
 * @template T
 */
var /**
 * @template T
 */
HermesBehaviorSubject = /** @class */ (function (_super) {
    tslib_1.__extends(HermesBehaviorSubject, _super);
    function HermesBehaviorSubject(defaultValue) {
        var _this = _super.call(this) || this;
        _this.lastValue = defaultValue;
        return _this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    HermesBehaviorSubject.prototype.next = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.lastValue = value;
        _super.prototype.next.call(this, value);
    };
    /**
     * @param {?} arg
     * @return {?}
     */
    HermesBehaviorSubject.prototype.subscribe = /**
     * @param {?} arg
     * @return {?}
     */
    function (arg) {
        /** @type {?} */
        var subscription = _super.prototype.subscribe.call(this, arguments[0], arguments[1], arguments[2]);
        _super.prototype.next.call(this, this.lastValue);
        return subscription;
    };
    return HermesBehaviorSubject;
}(HermesSubject));
/**
 * @template T
 */
export { HermesBehaviorSubject };
if (false) {
    /**
     * @type {?}
     * @private
     */
    HermesBehaviorSubject.prototype.lastValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLmJlaGF2aW9yLXN1YmplY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vc3RyZWFtL29ic2VydmFibGUvaGVybWVzLmJlaGF2aW9yLXN1YmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFJakQ7Ozs7SUFBOEMsaURBQWdCO0lBSTdELCtCQUFZLFlBQWU7UUFBM0IsWUFDQyxpQkFBTyxTQUVQO1FBREEsS0FBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7O0lBQy9CLENBQUM7Ozs7O0lBRUQsb0NBQUk7Ozs7SUFBSixVQUFLLEtBQVE7UUFDWixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixpQkFBTSxJQUFJLFlBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFVRCx5Q0FBUzs7OztJQUFULFVBQ0MsR0FBUTs7WUFHRixZQUFZLEdBQUcsaUJBQU0sU0FBUyxZQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTlFLGlCQUFNLElBQUksWUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFM0IsT0FBTyxZQUFZLENBQUM7SUFDckIsQ0FBQztJQUNGLDRCQUFDO0FBQUQsQ0FBQyxBQWhDRCxDQUE4QyxhQUFhLEdBZ0MxRDs7Ozs7Ozs7OztJQTlCQSwwQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZXJtZXNTdWJqZWN0IH0gZnJvbSAnLi9oZXJtZXMuc3ViamVjdCc7XG5pbXBvcnQgeyBIZXJtZXNTdWJzY3JpcHRpb24gfSBmcm9tICcuLi9zdWJzY3JpcHRpb24vaGVybWVzLnN1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBIZXJtZXNTdWJzY3JpYmVyIH0gZnJvbSAnLi9zdWJzY3JpYmVyL2hlcm1lcy5zdWJzY3JpYmVyJztcblxuZXhwb3J0IGNsYXNzIEhlcm1lc0JlaGF2aW9yU3ViamVjdDxUPiBleHRlbmRzIEhlcm1lc1N1YmplY3Q8VD4ge1xuXG5cdHByaXZhdGUgbGFzdFZhbHVlOiBUO1xuXG5cdGNvbnN0cnVjdG9yKGRlZmF1bHRWYWx1ZTogVCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5sYXN0VmFsdWUgPSBkZWZhdWx0VmFsdWU7XG5cdH1cblxuXHRuZXh0KHZhbHVlOiBUKSB7XG5cdFx0dGhpcy5sYXN0VmFsdWUgPSB2YWx1ZTtcblx0XHRzdXBlci5uZXh0KHZhbHVlKTtcblx0fVxuXG5cdHN1YnNjcmliZShcblx0XHRuZXh0PzogKHZhbHVlOiBUKSA9PiB2b2lkLFxuXHRcdGVycm9yPzogKGVycm9yOiBhbnkpID0+IHZvaWQsXG5cdFx0Y29tcGxldGU/OiAoKSA9PiB2b2lkXG5cdCk6IEhlcm1lc1N1YnNjcmlwdGlvbjtcblx0c3Vic2NyaWJlKFxuXHRcdHN1YnNjcmliZXI6IEhlcm1lc1N1YnNjcmliZXI8VD5cblx0KTogSGVybWVzU3Vic2NyaXB0aW9uO1xuXHRzdWJzY3JpYmUoXG5cdFx0YXJnOiBhbnlcblx0KTogSGVybWVzU3Vic2NyaXB0aW9uIHtcblxuXHRcdGNvbnN0IHN1YnNjcmlwdGlvbiA9IHN1cGVyLnN1YnNjcmliZShhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcblxuXHRcdHN1cGVyLm5leHQodGhpcy5sYXN0VmFsdWUpO1xuXG5cdFx0cmV0dXJuIHN1YnNjcmlwdGlvbjtcblx0fVxufVxuIl19