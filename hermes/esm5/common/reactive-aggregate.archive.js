/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
/**
 * @abstract
 * @template T
 */
var /**
 * @abstract
 * @template T
 */
ReactiveAggregateArchive = /** @class */ (function () {
    function ReactiveAggregateArchive() {
        this.archive = new Map();
        this.archive$ = new ReplaySubject();
    }
    /**
     * @param {?} aggregateId
     * @param {?} value
     * @return {?}
     */
    ReactiveAggregateArchive.prototype.set = /**
     * @param {?} aggregateId
     * @param {?} value
     * @return {?}
     */
    function (aggregateId, value) {
        this.archive.set(aggregateId.toString(), value);
        this.archive$.next(this.archive);
    };
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    ReactiveAggregateArchive.prototype.select = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        return this.archive$
            .asObservable()
            .pipe(map((/**
         * @param {?} map
         * @return {?}
         */
        function (map) {
            return map.get(aggregateId.toString());
        })), distinctUntilChanged());
    };
    return ReactiveAggregateArchive;
}());
/**
 * @abstract
 * @template T
 */
export { ReactiveAggregateArchive };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReactiveAggregateArchive.prototype.archive;
    /**
     * @type {?}
     * @private
     */
    ReactiveAggregateArchive.prototype.archive$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RpdmUtYWdncmVnYXRlLmFyY2hpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vcmVhY3RpdmUtYWdncmVnYXRlLmFyY2hpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQUkzRDs7Ozs7SUFNQztRQUpRLFlBQU8sR0FBRyxJQUFJLEdBQUcsRUFBYSxDQUFDO1FBRXRCLGFBQVEsR0FBRyxJQUFJLGFBQWEsRUFBa0IsQ0FBQztJQUdoRSxDQUFDOzs7Ozs7SUFFRCxzQ0FBRzs7Ozs7SUFBSCxVQUFJLFdBQXdCLEVBQUUsS0FBUTtRQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQseUNBQU07Ozs7SUFBTixVQUFPLFdBQXdCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLFFBQVE7YUFDZCxZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osR0FBRzs7OztRQUFDLFVBQUMsR0FBbUI7WUFDdkIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBQyxFQUNGLG9CQUFvQixFQUFFLENBQ3RCLENBQUM7SUFDUixDQUFDO0lBRUYsK0JBQUM7QUFBRCxDQUFDLEFBekJELElBeUJDOzs7Ozs7Ozs7OztJQXZCQSwyQ0FBdUM7Ozs7O0lBRXZDLDRDQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vZG9tYWluL2FnZ3JlZ2F0ZS1pZCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSZWFjdGl2ZUFnZ3JlZ2F0ZUFyY2hpdmU8VD4ge1xuXG5cdHByaXZhdGUgYXJjaGl2ZSA9IG5ldyBNYXA8c3RyaW5nLCBUPigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYXJjaGl2ZSQgPSBuZXcgUmVwbGF5U3ViamVjdDxNYXA8c3RyaW5nLCBUPj4oKTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRzZXQoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkLCB2YWx1ZTogVCk6IHZvaWQge1xuXHRcdHRoaXMuYXJjaGl2ZS5zZXQoYWdncmVnYXRlSWQudG9TdHJpbmcoKSwgdmFsdWUpO1xuXHRcdHRoaXMuYXJjaGl2ZSQubmV4dCh0aGlzLmFyY2hpdmUpO1xuXHR9XG5cblx0c2VsZWN0KGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IE9ic2VydmFibGU8VD4ge1xuXHRcdHJldHVybiB0aGlzLmFyY2hpdmUkXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKG1hcDogTWFwPHN0cmluZywgVD4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBtYXAuZ2V0KGFnZ3JlZ2F0ZUlkLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=