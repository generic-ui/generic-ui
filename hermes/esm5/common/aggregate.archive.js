/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map, filter } from 'rxjs/operators';
import { ReactiveService } from './reactive.service';
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
        _this.archive = new Map();
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
        return this.archive$
            .asObservable()
            .pipe(this.takeUntil(), map((/**
         * @param {?} map
         * @return {?}
         */
        function (map) {
            return map.get(aggregateId.toString());
        })), filter((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value !== undefined; })), distinctUntilChanged());
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
        return this.archive.get(aggregateId.toString());
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
        this.archive.set(aggregateId.toString(), value);
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
            this.archive.set(defaultValue.aggregateId.toString(), defaultValue.value);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLmFyY2hpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vYWdncmVnYXRlLmFyY2hpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFjLGFBQWEsRUFBVyxNQUFNLE1BQU0sQ0FBQztBQUMzRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR25FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFFckQsNENBR0M7OztJQUZBLDZDQUF5Qjs7SUFDekIsdUNBQVM7Ozs7OztBQUdWOzs7OztJQUFrRCw0Q0FBZTtJQU1oRSwwQkFBc0IsWUFBd0M7UUFBOUQsWUFDQyxpQkFBTyxTQUVQO1FBUE8sYUFBTyxHQUFHLElBQUksR0FBRyxFQUFhLENBQUM7UUFNdEMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQzs7SUFDaEMsQ0FBQzs7Ozs7SUFFRCw2QkFBRTs7OztJQUFGLFVBQUcsV0FBd0I7UUFDMUIsT0FBTyxJQUFJLENBQUMsUUFBUTthQUNkLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLEVBQ2hCLEdBQUc7Ozs7UUFBQyxVQUFDLEdBQW1CO1lBQ3ZCLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLEVBQUMsRUFDRixNQUFNOzs7O1FBQUMsVUFBQyxLQUFRLElBQUssT0FBQSxLQUFLLEtBQUssU0FBUyxFQUFuQixDQUFtQixFQUFDLEVBQ3pDLG9CQUFvQixFQUFFLENBQ3RCLENBQUM7SUFDUixDQUFDOzs7OztJQUVELDhCQUFHOzs7O0lBQUgsVUFBSSxXQUF3QjtRQUMzQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7OztJQUVELCtCQUFJOzs7OztJQUFKLFVBQUssV0FBd0IsRUFBRSxLQUFRO1FBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7O0lBRU8sc0NBQVc7Ozs7O0lBQW5CLFVBQW9CLFlBQXdDO1FBQzNELElBQUksWUFBWSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxlQUFlLENBQWlCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNsRTthQUFNO1lBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGFBQWEsQ0FBaUIsQ0FBQyxDQUFDLENBQUM7U0FDckQ7SUFDRixDQUFDO0lBRUYsdUJBQUM7QUFBRCxDQUFDLEFBMUNELENBQWtELGVBQWUsR0EwQ2hFOzs7Ozs7Ozs7OztJQXhDQSxtQ0FBdUM7Ozs7O0lBRXZDLG9DQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uL2RvbWFpbi9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgUmVhY3RpdmVTZXJ2aWNlIH0gZnJvbSAnLi9yZWFjdGl2ZS5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0QWdncmVnYXRlVmFsdWVzPFQ+IHtcblx0YWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkO1xuXHR2YWx1ZTogVDtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFnZ3JlZ2F0ZUFyY2hpdmU8VD4gZXh0ZW5kcyBSZWFjdGl2ZVNlcnZpY2Uge1xuXG5cdHByaXZhdGUgYXJjaGl2ZSA9IG5ldyBNYXA8c3RyaW5nLCBUPigpO1xuXG5cdHByaXZhdGUgYXJjaGl2ZSQ6IFN1YmplY3Q8TWFwPHN0cmluZywgVD4+O1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcihkZWZhdWx0VmFsdWU/OiBEZWZhdWx0QWdncmVnYXRlVmFsdWVzPFQ+KSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmluaXRBcmNoaXZlKGRlZmF1bHRWYWx1ZSk7XG5cdH1cblxuXHRvbihhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBPYnNlcnZhYmxlPFQ+IHtcblx0XHRyZXR1cm4gdGhpcy5hcmNoaXZlJFxuXHRcdFx0XHQgICAuYXNPYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgdGhpcy50YWtlVW50aWwoKSxcblx0XHRcdFx0XHQgICBtYXAoKG1hcDogTWFwPHN0cmluZywgVD4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBtYXAuZ2V0KGFnZ3JlZ2F0ZUlkLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIGZpbHRlcigodmFsdWU6IFQpID0+IHZhbHVlICE9PSB1bmRlZmluZWQpLFxuXHRcdFx0XHRcdCAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdGdldChhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBUIHtcblx0XHRyZXR1cm4gdGhpcy5hcmNoaXZlLmdldChhZ2dyZWdhdGVJZC50b1N0cmluZygpKTtcblx0fVxuXG5cdG5leHQoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkLCB2YWx1ZTogVCk6IHZvaWQge1xuXHRcdHRoaXMuYXJjaGl2ZS5zZXQoYWdncmVnYXRlSWQudG9TdHJpbmcoKSwgdmFsdWUpO1xuXHRcdHRoaXMuYXJjaGl2ZSQubmV4dCh0aGlzLmFyY2hpdmUpO1xuXHR9XG5cblx0cHJpdmF0ZSBpbml0QXJjaGl2ZShkZWZhdWx0VmFsdWU/OiBEZWZhdWx0QWdncmVnYXRlVmFsdWVzPFQ+KTogdm9pZCB7XG5cdFx0aWYgKGRlZmF1bHRWYWx1ZSkge1xuXHRcdFx0dGhpcy5hcmNoaXZlLnNldChkZWZhdWx0VmFsdWUuYWdncmVnYXRlSWQudG9TdHJpbmcoKSwgZGVmYXVsdFZhbHVlLnZhbHVlKTtcblx0XHRcdHRoaXMuYXJjaGl2ZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE1hcDxzdHJpbmcsIFQ+Pih0aGlzLmFyY2hpdmUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmFyY2hpdmUkID0gbmV3IFJlcGxheVN1YmplY3Q8TWFwPHN0cmluZywgVD4+KDEpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=