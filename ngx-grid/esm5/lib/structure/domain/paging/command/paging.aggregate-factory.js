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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmFnZ3JlZ2F0ZS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9wYWdpbmcvY29tbWFuZC9wYWdpbmcuYWdncmVnYXRlLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRWpFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUlyRDtJQUdDLGdDQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNsQyxDQUFDOzs7O0lBRUQsOENBQWE7OztJQUFiO1FBQ0MsT0FBTyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7OztJQUVELGlEQUFnQjs7OztJQUFoQixVQUFpQixNQUEwQjtRQUMxQyxPQUFPLGVBQWUsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4RCxDQUFDOztnQkFaRCxVQUFVOzs7O2dCQU5GLE1BQU07O0lBb0JmLDZCQUFDO0NBQUEsQUFkRCxJQWNDO1NBYlksc0JBQXNCOzs7Ozs7SUFFdEIsd0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2xvZ2dlci9sb2dnZXInO1xuXG5pbXBvcnQgeyBQYWdpbmdBZ2dyZWdhdGUgfSBmcm9tICcuL3BhZ2luZy5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnV2l0aElkIH0gZnJvbSAnLi4vcGFnaW5nLWNvbmZpZy13aXRoLWlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnaW5nQWdncmVnYXRlRmFjdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6IExvZ2dlcikge1xuXHR9XG5cblx0Y3JlYXRlRGVmYXVsdCgpOiBQYWdpbmdBZ2dyZWdhdGUge1xuXHRcdHJldHVybiBQYWdpbmdBZ2dyZWdhdGUuZGVmYXVsdCh0aGlzLmxvZ2dlcik7XG5cdH1cblxuXHRjcmVhdGVGcm9tQ29uZmlnKGNvbmZpZzogUGFnaW5nQ29uZmlnV2l0aElkKTogUGFnaW5nQWdncmVnYXRlIHtcblx0XHRyZXR1cm4gUGFnaW5nQWdncmVnYXRlLmZyb21Db25maWcoY29uZmlnLCB0aGlzLmxvZ2dlcik7XG5cdH1cblxufVxuIl19