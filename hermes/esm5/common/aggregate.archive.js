/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { ReactiveService } from './reactive.service';
import { KeyMap } from './collections/key-map';
/**
 * @record
 * @template T
 */
export function DefaultAggregateValues() { }
if (false) {
    /** @type {?} */
    DefaultAggregateValues.prototype.aggregateId;
    /** @type {?} */
    DefaultAggregateValues.prototype.value;
}
/**
 * @abstract
 * @template T
 */
var /**
 * @abstract
 * @template T
 */
AggregateArchive = /** @class */ (function (_super) {
    tslib_1.__extends(AggregateArchive, _super);
    function AggregateArchive(defaultValue) {
        var _this = _super.call(this) || this;
        _this.archive = new KeyMap();
        _this.initArchive(defaultValue);
        return _this;
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    AggregateArchive.prototype.on = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        var _this = this;
        return this.archive$
            .asObservable()
            .pipe(filter((/**
         * @return {?}
         */
        function () { return _this.isNotStopped(); })), map((/**
         * @param {?} map
         * @return {?}
         */
        function (map) {
            return map.get(aggregateId);
        })), filter((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value.isPresent(); })), map((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value.getValueOrNullOrThrowError(); })), distinctUntilChanged(), this.takeUntil());
    };
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    AggregateArchive.prototype.get = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        return this.archive.get(aggregateId);
    };
    /**
     * @param {?} aggregateId
     * @param {?} value
     * @return {?}
     */
    AggregateArchive.prototype.next = /**
     * @param {?} aggregateId
     * @param {?} value
     * @return {?}
     */
    function (aggregateId, value) {
        this.archive.set(aggregateId, value);
        this.archive$.next(this.archive);
    };
    /**
     * @private
     * @param {?=} defaultValue
     * @return {?}
     */
    AggregateArchive.prototype.initArchive = /**
     * @private
     * @param {?=} defaultValue
     * @return {?}
     */
    function (defaultValue) {
        if (defaultValue) {
            this.archive.set(defaultValue.aggregateId, defaultValue.value);
            this.archive$ = new BehaviorSubject(this.archive);
        }
        else {
            this.archive$ = new ReplaySubject(1);
        }
    };
    return AggregateArchive;
}(ReactiveService));
/**
 * @abstract
 * @template T
 */
export { AggregateArchive };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AggregateArchive.prototype.archive;
    /**
     * @type {?}
     * @private
     */
    AggregateArchive.prototype.archive$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLmFyY2hpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vYWdncmVnYXRlLmFyY2hpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFjLGFBQWEsRUFBVyxNQUFNLE1BQU0sQ0FBQztBQUMzRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR25FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7O0FBRy9DLDRDQUdDOzs7SUFGQSw2Q0FBeUI7O0lBQ3pCLHVDQUFTOzs7Ozs7QUFHVjs7Ozs7SUFBa0QsNENBQWU7SUFNaEUsMEJBQXNCLFlBQXdDO1FBQTlELFlBQ0MsaUJBQU8sU0FFUDtRQVBPLGFBQU8sR0FBRyxJQUFJLE1BQU0sRUFBa0IsQ0FBQztRQU05QyxLQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDOztJQUNoQyxDQUFDOzs7OztJQUVELDZCQUFFOzs7O0lBQUYsVUFBRyxXQUF3QjtRQUEzQixpQkFhQztRQVpBLE9BQU8sSUFBSSxDQUFDLFFBQVE7YUFDZCxZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osTUFBTTs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxZQUFZLEVBQUUsRUFBbkIsQ0FBbUIsRUFBQyxFQUNqQyxHQUFHOzs7O1FBQUMsVUFBQyxHQUEyQjtZQUMvQixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUFDLEVBQ0YsTUFBTTs7OztRQUFDLFVBQUMsS0FBa0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBakIsQ0FBaUIsRUFBQyxFQUNqRCxHQUFHOzs7O1FBQUMsVUFBQyxLQUFrQixJQUFLLE9BQUEsS0FBSyxDQUFDLDBCQUEwQixFQUFFLEVBQWxDLENBQWtDLEVBQUMsRUFDL0Qsb0JBQW9CLEVBQUUsRUFDdEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCw4QkFBRzs7OztJQUFILFVBQUksV0FBd0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7Ozs7SUFFRCwrQkFBSTs7Ozs7SUFBSixVQUFLLFdBQXdCLEVBQUUsS0FBUTtRQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7OztJQUVPLHNDQUFXOzs7OztJQUFuQixVQUFvQixZQUF3QztRQUMzRCxJQUFJLFlBQVksRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksZUFBZSxDQUF5QixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDMUU7YUFBTTtZQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxhQUFhLENBQXlCLENBQUMsQ0FBQyxDQUFDO1NBQzdEO0lBQ0YsQ0FBQztJQUVGLHVCQUFDO0FBQUQsQ0FBQyxBQTVDRCxDQUFrRCxlQUFlLEdBNENoRTs7Ozs7Ozs7Ozs7SUExQ0EsbUNBQStDOzs7OztJQUUvQyxvQ0FBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi9jb3JlL2RvbWFpbi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IFJlYWN0aXZlU2VydmljZSB9IGZyb20gJy4vcmVhY3RpdmUuc2VydmljZSc7XG5pbXBvcnQgeyBLZXlNYXAgfSBmcm9tICcuL2NvbGxlY3Rpb25zL2tleS1tYXAnO1xuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuL29wdGlvbmFsJztcblxuZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0QWdncmVnYXRlVmFsdWVzPFQ+IHtcblx0YWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkO1xuXHR2YWx1ZTogVDtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFnZ3JlZ2F0ZUFyY2hpdmU8VD4gZXh0ZW5kcyBSZWFjdGl2ZVNlcnZpY2Uge1xuXG5cdHByaXZhdGUgYXJjaGl2ZSA9IG5ldyBLZXlNYXA8QWdncmVnYXRlSWQsIFQ+KCk7XG5cblx0cHJpdmF0ZSBhcmNoaXZlJDogU3ViamVjdDxLZXlNYXA8QWdncmVnYXRlSWQsIFQ+PjtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoZGVmYXVsdFZhbHVlPzogRGVmYXVsdEFnZ3JlZ2F0ZVZhbHVlczxUPikge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5pbml0QXJjaGl2ZShkZWZhdWx0VmFsdWUpO1xuXHR9XG5cblx0b24oYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogT2JzZXJ2YWJsZTxUPiB7XG5cdFx0cmV0dXJuIHRoaXMuYXJjaGl2ZSRcblx0XHRcdFx0ICAgLmFzT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoKSA9PiB0aGlzLmlzTm90U3RvcHBlZCgpKSxcblx0XHRcdFx0XHQgICBtYXAoKG1hcDogS2V5TWFwPEFnZ3JlZ2F0ZUlkLCBUPikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1hcC5nZXQoYWdncmVnYXRlSWQpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIGZpbHRlcigodmFsdWU6IE9wdGlvbmFsPFQ+KSA9PiB2YWx1ZS5pc1ByZXNlbnQoKSksXG5cdFx0XHRcdFx0ICAgbWFwKCh2YWx1ZTogT3B0aW9uYWw8VD4pID0+IHZhbHVlLmdldFZhbHVlT3JOdWxsT3JUaHJvd0Vycm9yKCkpLFxuXHRcdFx0XHRcdCAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG5cdFx0XHRcdFx0ICAgdGhpcy50YWtlVW50aWwoKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0Z2V0KGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IE9wdGlvbmFsPFQ+IHtcblx0XHRyZXR1cm4gdGhpcy5hcmNoaXZlLmdldChhZ2dyZWdhdGVJZCk7XG5cdH1cblxuXHRuZXh0KGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCwgdmFsdWU6IFQpOiB2b2lkIHtcblx0XHR0aGlzLmFyY2hpdmUuc2V0KGFnZ3JlZ2F0ZUlkLCB2YWx1ZSk7XG5cdFx0dGhpcy5hcmNoaXZlJC5uZXh0KHRoaXMuYXJjaGl2ZSk7XG5cdH1cblxuXHRwcml2YXRlIGluaXRBcmNoaXZlKGRlZmF1bHRWYWx1ZT86IERlZmF1bHRBZ2dyZWdhdGVWYWx1ZXM8VD4pOiB2b2lkIHtcblx0XHRpZiAoZGVmYXVsdFZhbHVlKSB7XG5cdFx0XHR0aGlzLmFyY2hpdmUuc2V0KGRlZmF1bHRWYWx1ZS5hZ2dyZWdhdGVJZCwgZGVmYXVsdFZhbHVlLnZhbHVlKTtcblx0XHRcdHRoaXMuYXJjaGl2ZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEtleU1hcDxBZ2dyZWdhdGVJZCwgVD4+KHRoaXMuYXJjaGl2ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuYXJjaGl2ZSQgPSBuZXcgUmVwbGF5U3ViamVjdDxLZXlNYXA8QWdncmVnYXRlSWQsIFQ+PigxKTtcblx0XHR9XG5cdH1cblxufVxuIl19