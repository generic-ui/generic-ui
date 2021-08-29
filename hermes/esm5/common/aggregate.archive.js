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
        if (defaultValue) {
            _this.archive.set(defaultValue.aggregateId, defaultValue.value);
            _this.archive$ = new BehaviorSubject(_this.archive);
        }
        else {
            _this.archive$ = new ReplaySubject(1);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLmFyY2hpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vYWdncmVnYXRlLmFyY2hpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFjLGFBQWEsRUFBVyxNQUFNLE1BQU0sQ0FBQztBQUMzRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR25FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7O0FBRy9DLDRDQUdDOzs7SUFGQSw2Q0FBeUI7O0lBQ3pCLHVDQUFTOzs7Ozs7QUFHVjs7Ozs7SUFBa0QsNENBQWU7SUFNaEUsMEJBQXNCLFlBQXdDO1FBQTlELFlBQ0MsaUJBQU8sU0FPUDtRQVpnQixhQUFPLEdBQUcsSUFBSSxNQUFNLEVBQWtCLENBQUM7UUFNdkQsSUFBSSxZQUFZLEVBQUU7WUFDakIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0QsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBeUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzFFO2FBQU07WUFDTixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksYUFBYSxDQUF5QixDQUFDLENBQUMsQ0FBQztTQUM3RDs7SUFDRixDQUFDOzs7OztJQUVELDZCQUFFOzs7O0lBQUYsVUFBRyxXQUF3QjtRQUEzQixpQkFhQztRQVpBLE9BQU8sSUFBSSxDQUFDLFFBQVE7YUFDZCxZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osTUFBTTs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxZQUFZLEVBQUUsRUFBbkIsQ0FBbUIsRUFBQyxFQUNqQyxHQUFHOzs7O1FBQUMsVUFBQyxHQUEyQjtZQUMvQixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUFDLEVBQ0YsTUFBTTs7OztRQUFDLFVBQUMsS0FBa0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBakIsQ0FBaUIsRUFBQyxFQUNqRCxHQUFHOzs7O1FBQUMsVUFBQyxLQUFrQixJQUFLLE9BQUEsS0FBSyxDQUFDLDBCQUEwQixFQUFFLEVBQWxDLENBQWtDLEVBQUMsRUFDL0Qsb0JBQW9CLEVBQUUsRUFDdEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCw4QkFBRzs7OztJQUFILFVBQUksV0FBd0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7Ozs7SUFFRCwrQkFBSTs7Ozs7SUFBSixVQUFLLFdBQXdCLEVBQUUsS0FBUTtRQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRix1QkFBQztBQUFELENBQUMsQUF4Q0QsQ0FBa0QsZUFBZSxHQXdDaEU7Ozs7Ozs7Ozs7O0lBdENBLG1DQUF3RDs7Ozs7SUFFeEQsb0NBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vY29yZS9kb21haW4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBSZWFjdGl2ZVNlcnZpY2UgfSBmcm9tICcuL3JlYWN0aXZlLnNlcnZpY2UnO1xuaW1wb3J0IHsgS2V5TWFwIH0gZnJvbSAnLi9jb2xsZWN0aW9ucy9rZXktbWFwJztcbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi9vcHRpb25hbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVmYXVsdEFnZ3JlZ2F0ZVZhbHVlczxUPiB7XG5cdGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZDtcblx0dmFsdWU6IFQ7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBZ2dyZWdhdGVBcmNoaXZlPFQ+IGV4dGVuZHMgUmVhY3RpdmVTZXJ2aWNlIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGFyY2hpdmUgPSBuZXcgS2V5TWFwPEFnZ3JlZ2F0ZUlkLCBUPigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYXJjaGl2ZSQ6IFN1YmplY3Q8S2V5TWFwPEFnZ3JlZ2F0ZUlkLCBUPj47XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGRlZmF1bHRWYWx1ZT86IERlZmF1bHRBZ2dyZWdhdGVWYWx1ZXM8VD4pIHtcblx0XHRzdXBlcigpO1xuXHRcdGlmIChkZWZhdWx0VmFsdWUpIHtcblx0XHRcdHRoaXMuYXJjaGl2ZS5zZXQoZGVmYXVsdFZhbHVlLmFnZ3JlZ2F0ZUlkLCBkZWZhdWx0VmFsdWUudmFsdWUpO1xuXHRcdFx0dGhpcy5hcmNoaXZlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8S2V5TWFwPEFnZ3JlZ2F0ZUlkLCBUPj4odGhpcy5hcmNoaXZlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5hcmNoaXZlJCA9IG5ldyBSZXBsYXlTdWJqZWN0PEtleU1hcDxBZ2dyZWdhdGVJZCwgVD4+KDEpO1xuXHRcdH1cblx0fVxuXG5cdG9uKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IE9ic2VydmFibGU8VD4ge1xuXHRcdHJldHVybiB0aGlzLmFyY2hpdmUkXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKCkgPT4gdGhpcy5pc05vdFN0b3BwZWQoKSksXG5cdFx0XHRcdFx0ICAgbWFwKChtYXA6IEtleU1hcDxBZ2dyZWdhdGVJZCwgVD4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBtYXAuZ2V0KGFnZ3JlZ2F0ZUlkKTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBmaWx0ZXIoKHZhbHVlOiBPcHRpb25hbDxUPikgPT4gdmFsdWUuaXNQcmVzZW50KCkpLFxuXHRcdFx0XHRcdCAgIG1hcCgodmFsdWU6IE9wdGlvbmFsPFQ+KSA9PiB2YWx1ZS5nZXRWYWx1ZU9yTnVsbE9yVGhyb3dFcnJvcigpKSxcblx0XHRcdFx0XHQgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuXHRcdFx0XHRcdCAgIHRoaXMudGFrZVVudGlsKClcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdGdldChhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBPcHRpb25hbDxUPiB7XG5cdFx0cmV0dXJuIHRoaXMuYXJjaGl2ZS5nZXQoYWdncmVnYXRlSWQpO1xuXHR9XG5cblx0bmV4dChhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQsIHZhbHVlOiBUKTogdm9pZCB7XG5cdFx0dGhpcy5hcmNoaXZlLnNldChhZ2dyZWdhdGVJZCwgdmFsdWUpO1xuXHRcdHRoaXMuYXJjaGl2ZSQubmV4dCh0aGlzLmFyY2hpdmUpO1xuXHR9XG5cbn1cbiJdfQ==