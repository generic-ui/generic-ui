/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
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
        })), distinctUntilChanged());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLmFyY2hpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vYWdncmVnYXRlLmFyY2hpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFjLGFBQWEsRUFBVyxNQUFNLE1BQU0sQ0FBQztBQUMzRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztBQUVyRCw0Q0FHQzs7O0lBRkEsNkNBQXlCOztJQUN6Qix1Q0FBUzs7Ozs7O0FBR1Y7Ozs7O0lBQWtELDRDQUFlO0lBTWhFLDBCQUFzQixZQUF3QztRQUE5RCxZQUNDLGlCQUFPLFNBRVA7UUFQTyxhQUFPLEdBQUcsSUFBSSxHQUFHLEVBQWEsQ0FBQztRQU10QyxLQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDOztJQUNoQyxDQUFDOzs7OztJQUVELDZCQUFFOzs7O0lBQUYsVUFBRyxXQUF3QjtRQUMxQixPQUFPLElBQUksQ0FBQyxRQUFRO2FBQ2QsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFDaEIsR0FBRzs7OztRQUFDLFVBQUMsR0FBbUI7WUFDdkIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBQyxFQUNGLG9CQUFvQixFQUFFLENBQ3RCLENBQUM7SUFDUixDQUFDOzs7Ozs7SUFFRCwrQkFBSTs7Ozs7SUFBSixVQUFLLFdBQXdCLEVBQUUsS0FBUTtRQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7OztJQUVPLHNDQUFXOzs7OztJQUFuQixVQUFvQixZQUF3QztRQUMzRCxJQUFJLFlBQVksRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksZUFBZSxDQUFpQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbEU7YUFBTTtZQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxhQUFhLENBQWlCLENBQUMsQ0FBQyxDQUFDO1NBQ3JEO0lBQ0YsQ0FBQztJQUVGLHVCQUFDO0FBQUQsQ0FBQyxBQXJDRCxDQUFrRCxlQUFlLEdBcUNoRTs7Ozs7Ozs7Ozs7SUFuQ0EsbUNBQXVDOzs7OztJQUV2QyxvQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vZG9tYWluL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBSZWFjdGl2ZVNlcnZpY2UgfSBmcm9tICcuL3JlYWN0aXZlLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERlZmF1bHRBZ2dyZWdhdGVWYWx1ZXM8VD4ge1xuXHRhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQ7XG5cdHZhbHVlOiBUO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWdncmVnYXRlQXJjaGl2ZTxUPiBleHRlbmRzIFJlYWN0aXZlU2VydmljZSB7XG5cblx0cHJpdmF0ZSBhcmNoaXZlID0gbmV3IE1hcDxzdHJpbmcsIFQ+KCk7XG5cblx0cHJpdmF0ZSBhcmNoaXZlJDogU3ViamVjdDxNYXA8c3RyaW5nLCBUPj47XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGRlZmF1bHRWYWx1ZT86IERlZmF1bHRBZ2dyZWdhdGVWYWx1ZXM8VD4pIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuaW5pdEFyY2hpdmUoZGVmYXVsdFZhbHVlKTtcblx0fVxuXG5cdG9uKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IE9ic2VydmFibGU8VD4ge1xuXHRcdHJldHVybiB0aGlzLmFyY2hpdmUkXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICB0aGlzLnRha2VVbnRpbCgpLFxuXHRcdFx0XHRcdCAgIG1hcCgobWFwOiBNYXA8c3RyaW5nLCBUPikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1hcC5nZXQoYWdncmVnYXRlSWQudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0bmV4dChhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQsIHZhbHVlOiBUKTogdm9pZCB7XG5cdFx0dGhpcy5hcmNoaXZlLnNldChhZ2dyZWdhdGVJZC50b1N0cmluZygpLCB2YWx1ZSk7XG5cdFx0dGhpcy5hcmNoaXZlJC5uZXh0KHRoaXMuYXJjaGl2ZSk7XG5cdH1cblxuXHRwcml2YXRlIGluaXRBcmNoaXZlKGRlZmF1bHRWYWx1ZT86IERlZmF1bHRBZ2dyZWdhdGVWYWx1ZXM8VD4pOiB2b2lkIHtcblx0XHRpZiAoZGVmYXVsdFZhbHVlKSB7XG5cdFx0XHR0aGlzLmFyY2hpdmUuc2V0KGRlZmF1bHRWYWx1ZS5hZ2dyZWdhdGVJZC50b1N0cmluZygpLCBkZWZhdWx0VmFsdWUudmFsdWUpO1xuXHRcdFx0dGhpcy5hcmNoaXZlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TWFwPHN0cmluZywgVD4+KHRoaXMuYXJjaGl2ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuYXJjaGl2ZSQgPSBuZXcgUmVwbGF5U3ViamVjdDxNYXA8c3RyaW5nLCBUPj4oMSk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==