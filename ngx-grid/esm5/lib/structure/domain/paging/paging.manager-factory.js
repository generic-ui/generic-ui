/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Logger } from '../../../../common/cdk/logger/logger';
import { PagingManager } from './paging.manager';
var PagingManagerFactory = /** @class */ (function () {
    function PagingManagerFactory(logger) {
        this.logger = logger;
    }
    /**
     * @return {?}
     */
    PagingManagerFactory.prototype.createDefault = /**
     * @return {?}
     */
    function () {
        return PagingManager.default(this.logger);
    };
    /**
     * @param {?} config
     * @return {?}
     */
    PagingManagerFactory.prototype.createFromConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return PagingManager.fromConfig(config, this.logger);
    };
    PagingManagerFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PagingManagerFactory.ctorParameters = function () { return [
        { type: Logger }
    ]; };
    return PagingManagerFactory;
}());
export { PagingManagerFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingManagerFactory.prototype.logger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLm1hbmFnZXItZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vcGFnaW5nL3BhZ2luZy5tYW5hZ2VyLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRTlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUlqRDtJQUdDLDhCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNsQyxDQUFDOzs7O0lBRUQsNENBQWE7OztJQUFiO1FBQ0MsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVELCtDQUFnQjs7OztJQUFoQixVQUFpQixNQUEwQjtRQUMxQyxPQUFPLGFBQWEsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0RCxDQUFDOztnQkFaRCxVQUFVOzs7O2dCQU5GLE1BQU07O0lBb0JmLDJCQUFDO0NBQUEsQUFkRCxJQWNDO1NBYlksb0JBQW9COzs7Ozs7SUFFcEIsc0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2xvZ2dlci9sb2dnZXInO1xuXG5pbXBvcnQgeyBQYWdpbmdNYW5hZ2VyIH0gZnJvbSAnLi9wYWdpbmcubWFuYWdlcic7XG5pbXBvcnQgeyBQYWdpbmdDb25maWdXaXRoSWQgfSBmcm9tICcuL3BhZ2luZy1jb25maWctd2l0aC1pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhZ2luZ01hbmFnZXJGYWN0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlcjogTG9nZ2VyKSB7XG5cdH1cblxuXHRjcmVhdGVEZWZhdWx0KCk6IFBhZ2luZ01hbmFnZXIge1xuXHRcdHJldHVybiBQYWdpbmdNYW5hZ2VyLmRlZmF1bHQodGhpcy5sb2dnZXIpO1xuXHR9XG5cblx0Y3JlYXRlRnJvbUNvbmZpZyhjb25maWc6IFBhZ2luZ0NvbmZpZ1dpdGhJZCk6IFBhZ2luZ01hbmFnZXIge1xuXHRcdHJldHVybiBQYWdpbmdNYW5hZ2VyLmZyb21Db25maWcoY29uZmlnLCB0aGlzLmxvZ2dlcik7XG5cdH1cblxufVxuIl19