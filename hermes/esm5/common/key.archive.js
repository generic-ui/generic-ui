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
        function (value) { return value.getValueOrNullOrThrowError(); })), hermesDistinctUntilChanged(), this.hermesTakeUntil());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5LmFyY2hpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24va2V5LmFyY2hpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDdEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUM3RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUVsRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7O0FBSTNEOzs7OztJQUEyRCxzQ0FBZTtJQVF6RSxvQkFBc0IsWUFBZ0I7UUFBdEMsWUFDQyxpQkFBTyxTQU9QO1FBZGdCLGFBQU8sR0FBRyxJQUFJLE1BQU0sRUFBUSxDQUFDO1FBSXRDLGtCQUFZLEdBQWdCLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUtwRCxLQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFvQixDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRTFDLElBQUksWUFBWSxLQUFLLFNBQVMsSUFBSSxZQUFZLEtBQUssSUFBSSxFQUFFO1lBQ3hELEtBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM5Qzs7SUFDRixDQUFDOzs7OztJQUVELHVCQUFFOzs7O0lBQUYsVUFBRyxHQUFNO1FBQVQsaUJBZ0JDO1FBZEEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTNCLE9BQU8sSUFBSSxDQUFDLFFBQVE7YUFDZCxZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osWUFBWTs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxZQUFZLEVBQUUsRUFBbkIsQ0FBbUIsRUFBQyxFQUN2QyxTQUFTOzs7O1FBQUMsVUFBQyxHQUFpQjtZQUMzQixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsQ0FBQyxFQUFDLEVBQ0YsWUFBWTs7OztRQUFDLFVBQUMsS0FBa0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBakIsQ0FBaUIsRUFBQyxFQUN2RCxTQUFTOzs7O1FBQUMsVUFBQyxLQUFrQixJQUFLLE9BQUEsS0FBSyxDQUFDLDBCQUEwQixFQUFFLEVBQWxDLENBQWtDLEVBQUMsRUFDckUsMEJBQTBCLEVBQUUsRUFDNUIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUN0QixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCx5QkFBSTs7OztJQUFKLFVBQUssR0FBTTtRQUVWLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7YUFDYixJQUFJLENBQ0osVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUNiLENBQUM7SUFDUixDQUFDOzs7OztJQUVELHdCQUFHOzs7O0lBQUgsVUFBSSxHQUFNO1FBRVQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTNCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBRUQseUJBQUk7Ozs7O0lBQUosVUFBSyxHQUFNLEVBQUUsS0FBUTtRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7OztJQUVPLHFDQUFnQjs7Ozs7SUFBeEIsVUFBeUIsR0FBTTtRQUEvQixpQkFTQztRQVJBLElBQUksQ0FBQyxZQUFZO2FBQ2YsU0FBUzs7OztRQUFDLFVBQUMsS0FBSztZQUVoQixJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzNCLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3RCO1FBRUYsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBRUYsaUJBQUM7QUFBRCxDQUFDLEFBbkVELENBQTJELGVBQWUsR0FtRXpFOzs7Ozs7Ozs7OztJQWpFQSw2QkFBOEM7Ozs7O0lBRTlDLDhCQUE4RDs7Ozs7SUFFOUQsa0NBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhY3RpdmVTZXJ2aWNlIH0gZnJvbSAnLi9yZWFjdGl2ZS5zZXJ2aWNlJztcbmltcG9ydCB7IEtleU1hcCB9IGZyb20gJy4vY29sbGVjdGlvbnMva2V5LW1hcCc7XG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4vb3B0aW9uYWwnO1xuaW1wb3J0IHsgaGVybWVzRmlsdGVyIH0gZnJvbSAnLi9zdHJlYW0vb3BlcmF0b3IvaGVybWVzLmZpbHRlcic7XG5pbXBvcnQgeyBoZXJtZXNNYXAgfSBmcm9tICcuL3N0cmVhbS9vcGVyYXRvci9oZXJtZXMubWFwJztcbmltcG9ydCB7IGhlcm1lc0Rpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAnLi9zdHJlYW0vb3BlcmF0b3IvaGVybWVzLmRpc3RpbmN0LXVudGlsLWNoYW5nZWQnO1xuaW1wb3J0IHsgSGVybWVzQXJjaGl2ZVN1YmplY3QgfSBmcm9tICcuL3N0cmVhbS9vYnNlcnZhYmxlL2hlcm1lcy5hcmNoaXZlLXN1YmplY3QnO1xuaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJy4vc3RyZWFtL29ic2VydmFibGUvaGVybWVzLm9ic2VydmFibGUnO1xuaW1wb3J0IHsgaGVybWVzVGFrZSB9IGZyb20gJy4vc3RyZWFtL29wZXJhdG9yL2hlcm1lcy50YWtlJztcbmltcG9ydCB7IEtleSB9IGZyb20gJy4vY29sbGVjdGlvbnMva2V5JztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgS2V5QXJjaGl2ZTxLIGV4dGVuZHMgS2V5LCBUPiBleHRlbmRzIFJlYWN0aXZlU2VydmljZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBhcmNoaXZlID0gbmV3IEtleU1hcDxLLCBUPigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYXJjaGl2ZSQ6IEhlcm1lc0FyY2hpdmVTdWJqZWN0PEtleU1hcDxLLCBUPj47XG5cblx0cHJpdmF0ZSBkZWZhdWx0VmFsdWU6IE9wdGlvbmFsPFQ+ID0gT3B0aW9uYWwuZW1wdHkoKTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoZGVmYXVsdFZhbHVlPzogVCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmFyY2hpdmUkID0gSGVybWVzQXJjaGl2ZVN1YmplY3Qub2YoKTtcblxuXHRcdGlmIChkZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCAmJiBkZWZhdWx0VmFsdWUgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuZGVmYXVsdFZhbHVlID0gT3B0aW9uYWwub2YoZGVmYXVsdFZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRvbihrZXk6IEspOiBIZXJtZXNPYnNlcnZhYmxlPFQ+IHtcblxuXHRcdHRoaXMudHJ5VG9Jbml0RGVmYXVsdChrZXkpO1xuXG5cdFx0cmV0dXJuIHRoaXMuYXJjaGl2ZSRcblx0XHRcdFx0ICAgLnRvT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc0ZpbHRlcigoKSA9PiB0aGlzLmlzTm90U3RvcHBlZCgpKSxcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKG1hcDogS2V5TWFwPEssIFQ+KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gbWFwLmdldChrZXkpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIGhlcm1lc0ZpbHRlcigodmFsdWU6IE9wdGlvbmFsPFQ+KSA9PiB2YWx1ZS5pc1ByZXNlbnQoKSksXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKCh2YWx1ZTogT3B0aW9uYWw8VD4pID0+IHZhbHVlLmdldFZhbHVlT3JOdWxsT3JUaHJvd0Vycm9yKCkpLFxuXHRcdFx0XHRcdCAgIGhlcm1lc0Rpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG5cdFx0XHRcdFx0ICAgdGhpcy5oZXJtZXNUYWtlVW50aWwoKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25jZShrZXk6IEspOiBIZXJtZXNPYnNlcnZhYmxlPFQ+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uKGtleSlcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzVGFrZSgxKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0Z2V0KGtleTogSyk6IE9wdGlvbmFsPFQ+IHtcblxuXHRcdHRoaXMudHJ5VG9Jbml0RGVmYXVsdChrZXkpO1xuXG5cdFx0cmV0dXJuIHRoaXMuYXJjaGl2ZS5nZXQoa2V5KTtcblx0fVxuXG5cdG5leHQoa2V5OiBLLCB2YWx1ZTogVCk6IHZvaWQge1xuXHRcdHRoaXMuYXJjaGl2ZS5zZXQoa2V5LCB2YWx1ZSk7XG5cdFx0dGhpcy5hcmNoaXZlJC5uZXh0KHRoaXMuYXJjaGl2ZSk7XG5cdH1cblxuXHRwcml2YXRlIHRyeVRvSW5pdERlZmF1bHQoa2V5OiBLKTogdm9pZCB7XG5cdFx0dGhpcy5kZWZhdWx0VmFsdWVcblx0XHRcdC5pZlByZXNlbnQoKHZhbHVlKSA9PiB7XG5cblx0XHRcdFx0aWYgKCF0aGlzLmFyY2hpdmUuaGFzKGtleSkpIHtcblx0XHRcdFx0XHR0aGlzLm5leHQoa2V5LCB2YWx1ZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSk7XG5cdH1cblxufVxuIl19