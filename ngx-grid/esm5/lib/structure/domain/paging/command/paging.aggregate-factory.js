/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Logger } from '../../../../../common/cdk/logger/logger';
import { PagingAggregate } from './paging.aggregate';
var PagingAggregateFactory = /** @class */ (function () {
    function PagingAggregateFactory(logger) {
        this.logger = logger;
    }
    /**
     * @return {?}
     */
    PagingAggregateFactory.prototype.createDefault = /**
     * @return {?}
     */
    function () {
        return PagingAggregate.default(this.logger);
    };
    /**
     * @param {?} config
     * @return {?}
     */
    PagingAggregateFactory.prototype.createFromConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return PagingAggregate.fromConfig(config, this.logger);
    };
    PagingAggregateFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PagingAggregateFactory.ctorParameters = function () { return [
        { type: Logger }
    ]; };
    return PagingAggregateFactory;
}());
export { PagingAggregateFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingAggregateFactory.prototype.logger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmFnZ3JlZ2F0ZS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9wYWdpbmcvY29tbWFuZC9wYWdpbmcuYWdncmVnYXRlLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRWpFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUlyRDtJQUdDLGdDQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7Ozs7SUFFdEMsOENBQWE7OztJQUFiO1FBQ0MsT0FBTyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7OztJQUVELGlEQUFnQjs7OztJQUFoQixVQUFpQixNQUEwQjtRQUMxQyxPQUFPLGVBQWUsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4RCxDQUFDOztnQkFYRCxVQUFVOzs7O2dCQU5GLE1BQU07O0lBbUJmLDZCQUFDO0NBQUEsQUFiRCxJQWFDO1NBWlksc0JBQXNCOzs7Ozs7SUFFdEIsd0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2xvZ2dlci9sb2dnZXInO1xuXG5pbXBvcnQgeyBQYWdpbmdBZ2dyZWdhdGUgfSBmcm9tICcuL3BhZ2luZy5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnV2l0aElkIH0gZnJvbSAnLi4vcGFnaW5nLWNvbmZpZy13aXRoLWlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnaW5nQWdncmVnYXRlRmFjdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6IExvZ2dlcikge31cblxuXHRjcmVhdGVEZWZhdWx0KCk6IFBhZ2luZ0FnZ3JlZ2F0ZSB7XG5cdFx0cmV0dXJuIFBhZ2luZ0FnZ3JlZ2F0ZS5kZWZhdWx0KHRoaXMubG9nZ2VyKTtcblx0fVxuXG5cdGNyZWF0ZUZyb21Db25maWcoY29uZmlnOiBQYWdpbmdDb25maWdXaXRoSWQpOiBQYWdpbmdBZ2dyZWdhdGUge1xuXHRcdHJldHVybiBQYWdpbmdBZ2dyZWdhdGUuZnJvbUNvbmZpZyhjb25maWcsIHRoaXMubG9nZ2VyKTtcblx0fVxuXG59XG4iXX0=