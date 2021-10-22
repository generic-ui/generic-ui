/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ReactiveService } from './reactive.service';
import { KeyMap } from './collections/key-map';
import { Optional } from './optional';
import { hermesFilter } from './stream/operator/hermes.filter';
import { hermesMap } from './stream/operator/hermes.map';
import { hermesDistinctUntilChanged } from './stream/operator/hermes.distinct-until-changed';
import { HermesArchiveSubject } from './stream/observable/hermes.archive-subject';
import { hermesTake } from './stream/operator/hermes.take';
/**
 * @abstract
 * @template K, T
 */
var /**
 * @abstract
 * @template K, T
 */
KeyArchive = /** @class */ (function (_super) {
    tslib_1.__extends(KeyArchive, _super);
    function KeyArchive(defaultValue) {
        var _this = _super.call(this) || this;
        _this.archive = new KeyMap();
        _this.defaultValue = Optional.empty();
        _this.archive$ = HermesArchiveSubject.of();
        if (defaultValue !== undefined && defaultValue !== null) {
            _this.defaultValue = Optional.of(defaultValue);
        }
        return _this;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    KeyArchive.prototype.on = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        var _this = this;
        this.tryToInitDefault(key);
        return this.archive$
            .toObservable()
            .pipe(hermesFilter((/**
         * @return {?}
         */
        function () { return _this.isNotStopped(); })), hermesMap((/**
         * @param {?} map
         * @return {?}
         */
        function (map) {
            return map.get(key);
        })), hermesFilter((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value.isPresent(); })), hermesMap((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value.getValueOrNullOrThrowError(); })), hermesDistinctUntilChanged(this.equals), this.hermesTakeUntil());
    };
    /**
     * @param {?} key
     * @return {?}
     */
    KeyArchive.prototype.once = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.on(key)
            .pipe(hermesTake(1));
    };
    /**
     * @param {?} key
     * @return {?}
     */
    KeyArchive.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        this.tryToInitDefault(key);
        return this.archive.get(key);
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    KeyArchive.prototype.next = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this.archive.set(key, value);
        this.archive$.next(this.archive);
    };
    /**
     * @protected
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    KeyArchive.prototype.equals = /**
     * @protected
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        return a === b;
    };
    /**
     * @protected
     * @param {?} defaultValue
     * @return {?}
     */
    KeyArchive.prototype.createDefaultValue = /**
     * @protected
     * @param {?} defaultValue
     * @return {?}
     */
    function (defaultValue) {
        return defaultValue;
    };
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    KeyArchive.prototype.tryToInitDefault = /**
     * @private
     * @param {?} key
     * @return {?}
     */
    function (key) {
        var _this = this;
        this.defaultValue
            .ifPresent((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!_this.archive.has(key)) {
                _this.next(key, value);
            }
        }));
    };
    return KeyArchive;
}(ReactiveService));
/**
 * @abstract
 * @template K, T
 */
export { KeyArchive };
if (false) {
    /**
     * @type {?}
     * @private
     */
    KeyArchive.prototype.archive;
    /**
     * @type {?}
     * @private
     */
    KeyArchive.prototype.archive$;
    /**
     * @type {?}
     * @private
     */
    KeyArchive.prototype.defaultValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5LmFyY2hpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24va2V5LmFyY2hpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDdEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUM3RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUVsRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7O0FBSTNEOzs7OztJQUEyRCxzQ0FBZTtJQVF6RSxvQkFBc0IsWUFBZ0I7UUFBdEMsWUFDQyxpQkFBTyxTQU9QO1FBZGdCLGFBQU8sR0FBRyxJQUFJLE1BQU0sRUFBUSxDQUFDO1FBSXRDLGtCQUFZLEdBQWdCLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUtwRCxLQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFvQixDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRTFDLElBQUksWUFBWSxLQUFLLFNBQVMsSUFBSSxZQUFZLEtBQUssSUFBSSxFQUFFO1lBQ3hELEtBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM5Qzs7SUFDRixDQUFDOzs7OztJQUVELHVCQUFFOzs7O0lBQUYsVUFBRyxHQUFNO1FBQVQsaUJBZ0JDO1FBZEEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTNCLE9BQU8sSUFBSSxDQUFDLFFBQVE7YUFDZCxZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osWUFBWTs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxZQUFZLEVBQUUsRUFBbkIsQ0FBbUIsRUFBQyxFQUN2QyxTQUFTOzs7O1FBQUMsVUFBQyxHQUFpQjtZQUMzQixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsQ0FBQyxFQUFDLEVBQ0YsWUFBWTs7OztRQUFDLFVBQUMsS0FBa0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBakIsQ0FBaUIsRUFBQyxFQUN2RCxTQUFTOzs7O1FBQUMsVUFBQyxLQUFrQixJQUFLLE9BQUEsS0FBSyxDQUFDLDBCQUEwQixFQUFFLEVBQWxDLENBQWtDLEVBQUMsRUFDckUsMEJBQTBCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUN2QyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQ3RCLENBQUM7SUFDUixDQUFDOzs7OztJQUVELHlCQUFJOzs7O0lBQUosVUFBSyxHQUFNO1FBRVYsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQzthQUNiLElBQUksQ0FDSixVQUFVLENBQUMsQ0FBQyxDQUFDLENBQ2IsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsd0JBQUc7Ozs7SUFBSCxVQUFJLEdBQU07UUFFVCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFM0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFRCx5QkFBSTs7Ozs7SUFBSixVQUFLLEdBQU0sRUFBRSxLQUFRO1FBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7OztJQUVTLDJCQUFNOzs7Ozs7SUFBaEIsVUFBaUIsQ0FBSSxFQUFFLENBQUk7UUFDMUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQUVTLHVDQUFrQjs7Ozs7SUFBNUIsVUFBNkIsWUFBZTtRQUMzQyxPQUFPLFlBQVksQ0FBQztJQUNyQixDQUFDOzs7Ozs7SUFFTyxxQ0FBZ0I7Ozs7O0lBQXhCLFVBQXlCLEdBQU07UUFBL0IsaUJBU0M7UUFSQSxJQUFJLENBQUMsWUFBWTthQUNmLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQUs7WUFFaEIsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMzQixLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUN0QjtRQUVGLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUVGLGlCQUFDO0FBQUQsQ0FBQyxBQTNFRCxDQUEyRCxlQUFlLEdBMkV6RTs7Ozs7Ozs7Ozs7SUF6RUEsNkJBQThDOzs7OztJQUU5Qyw4QkFBOEQ7Ozs7O0lBRTlELGtDQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0aXZlU2VydmljZSB9IGZyb20gJy4vcmVhY3RpdmUuc2VydmljZSc7XG5pbXBvcnQgeyBLZXlNYXAgfSBmcm9tICcuL2NvbGxlY3Rpb25zL2tleS1tYXAnO1xuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuL29wdGlvbmFsJztcbmltcG9ydCB7IGhlcm1lc0ZpbHRlciB9IGZyb20gJy4vc3RyZWFtL29wZXJhdG9yL2hlcm1lcy5maWx0ZXInO1xuaW1wb3J0IHsgaGVybWVzTWFwIH0gZnJvbSAnLi9zdHJlYW0vb3BlcmF0b3IvaGVybWVzLm1hcCc7XG5pbXBvcnQgeyBoZXJtZXNEaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJy4vc3RyZWFtL29wZXJhdG9yL2hlcm1lcy5kaXN0aW5jdC11bnRpbC1jaGFuZ2VkJztcbmltcG9ydCB7IEhlcm1lc0FyY2hpdmVTdWJqZWN0IH0gZnJvbSAnLi9zdHJlYW0vb2JzZXJ2YWJsZS9oZXJtZXMuYXJjaGl2ZS1zdWJqZWN0JztcbmltcG9ydCB7IEhlcm1lc09ic2VydmFibGUgfSBmcm9tICcuL3N0cmVhbS9vYnNlcnZhYmxlL2hlcm1lcy5vYnNlcnZhYmxlJztcbmltcG9ydCB7IGhlcm1lc1Rha2UgfSBmcm9tICcuL3N0cmVhbS9vcGVyYXRvci9oZXJtZXMudGFrZSc7XG5pbXBvcnQgeyBLZXkgfSBmcm9tICcuL2NvbGxlY3Rpb25zL2tleSc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEtleUFyY2hpdmU8SyBleHRlbmRzIEtleSwgVD4gZXh0ZW5kcyBSZWFjdGl2ZVNlcnZpY2Uge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYXJjaGl2ZSA9IG5ldyBLZXlNYXA8SywgVD4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGFyY2hpdmUkOiBIZXJtZXNBcmNoaXZlU3ViamVjdDxLZXlNYXA8SywgVD4+O1xuXG5cdHByaXZhdGUgZGVmYXVsdFZhbHVlOiBPcHRpb25hbDxUPiA9IE9wdGlvbmFsLmVtcHR5KCk7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGRlZmF1bHRWYWx1ZT86IFQpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5hcmNoaXZlJCA9IEhlcm1lc0FyY2hpdmVTdWJqZWN0Lm9mKCk7XG5cblx0XHRpZiAoZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQgJiYgZGVmYXVsdFZhbHVlICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLmRlZmF1bHRWYWx1ZSA9IE9wdGlvbmFsLm9mKGRlZmF1bHRWYWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0b24oa2V5OiBLKTogSGVybWVzT2JzZXJ2YWJsZTxUPiB7XG5cblx0XHR0aGlzLnRyeVRvSW5pdERlZmF1bHQoa2V5KTtcblxuXHRcdHJldHVybiB0aGlzLmFyY2hpdmUkXG5cdFx0XHRcdCAgIC50b09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNGaWx0ZXIoKCkgPT4gdGhpcy5pc05vdFN0b3BwZWQoKSksXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChtYXA6IEtleU1hcDxLLCBUPikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1hcC5nZXQoa2V5KTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBoZXJtZXNGaWx0ZXIoKHZhbHVlOiBPcHRpb25hbDxUPikgPT4gdmFsdWUuaXNQcmVzZW50KCkpLFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgodmFsdWU6IE9wdGlvbmFsPFQ+KSA9PiB2YWx1ZS5nZXRWYWx1ZU9yTnVsbE9yVGhyb3dFcnJvcigpKSxcblx0XHRcdFx0XHQgICBoZXJtZXNEaXN0aW5jdFVudGlsQ2hhbmdlZCh0aGlzLmVxdWFscyksXG5cdFx0XHRcdFx0ICAgdGhpcy5oZXJtZXNUYWtlVW50aWwoKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25jZShrZXk6IEspOiBIZXJtZXNPYnNlcnZhYmxlPFQ+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uKGtleSlcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzVGFrZSgxKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0Z2V0KGtleTogSyk6IE9wdGlvbmFsPFQ+IHtcblxuXHRcdHRoaXMudHJ5VG9Jbml0RGVmYXVsdChrZXkpO1xuXG5cdFx0cmV0dXJuIHRoaXMuYXJjaGl2ZS5nZXQoa2V5KTtcblx0fVxuXG5cdG5leHQoa2V5OiBLLCB2YWx1ZTogVCk6IHZvaWQge1xuXHRcdHRoaXMuYXJjaGl2ZS5zZXQoa2V5LCB2YWx1ZSk7XG5cdFx0dGhpcy5hcmNoaXZlJC5uZXh0KHRoaXMuYXJjaGl2ZSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZXF1YWxzKGE6IFQsIGI6IFQpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gYSA9PT0gYjtcblx0fVxuXG5cdHByb3RlY3RlZCBjcmVhdGVEZWZhdWx0VmFsdWUoZGVmYXVsdFZhbHVlOiBUKTogVCB7XG5cdFx0cmV0dXJuIGRlZmF1bHRWYWx1ZTtcblx0fVxuXG5cdHByaXZhdGUgdHJ5VG9Jbml0RGVmYXVsdChrZXk6IEspOiB2b2lkIHtcblx0XHR0aGlzLmRlZmF1bHRWYWx1ZVxuXHRcdFx0LmlmUHJlc2VudCgodmFsdWUpID0+IHtcblxuXHRcdFx0XHRpZiAoIXRoaXMuYXJjaGl2ZS5oYXMoa2V5KSkge1xuXHRcdFx0XHRcdHRoaXMubmV4dChrZXksIHZhbHVlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9KTtcblx0fVxuXG59XG4iXX0=