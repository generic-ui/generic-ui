/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Logger } from '../../../common/cdk/logger/logger';
import { PagingManager } from './paging.manager';
export class PagingManagerFactory {
    /**
     * @param {?} logger
     */
    constructor(logger) {
        this.logger = logger;
    }
    /**
     * @return {?}
     */
    createDefault() {
        return PagingManager.default(this.logger);
    }
    /**
     * @param {?} config
     * @return {?}
     */
    createFromConfig(config) {
        return PagingManager.fromConfig(config, this.logger);
    }
}
PagingManagerFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PagingManagerFactory.ctorParameters = () => [
    { type: Logger }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingManagerFactory.prototype.logger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLm1hbmFnZXItZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3BhZ2luZy9kb21haW4vcGFnaW5nLm1hbmFnZXItZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBS2pELE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFFaEMsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDbEMsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsTUFBMEI7UUFDMUMsT0FBTyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7O1lBWkQsVUFBVTs7OztZQU5GLE1BQU07Ozs7Ozs7SUFTRixzQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvbG9nZ2VyL2xvZ2dlcic7XG5cbmltcG9ydCB7IFBhZ2luZ01hbmFnZXIgfSBmcm9tICcuL3BhZ2luZy5tYW5hZ2VyJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZ1dpdGhJZCB9IGZyb20gJy4vcGFnaW5nLWNvbmZpZy13aXRoLWlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnaW5nTWFuYWdlckZhY3Rvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nZ2VyOiBMb2dnZXIpIHtcblx0fVxuXG5cdGNyZWF0ZURlZmF1bHQoKTogUGFnaW5nTWFuYWdlciB7XG5cdFx0cmV0dXJuIFBhZ2luZ01hbmFnZXIuZGVmYXVsdCh0aGlzLmxvZ2dlcik7XG5cdH1cblxuXHRjcmVhdGVGcm9tQ29uZmlnKGNvbmZpZzogUGFnaW5nQ29uZmlnV2l0aElkKTogUGFnaW5nTWFuYWdlciB7XG5cdFx0cmV0dXJuIFBhZ2luZ01hbmFnZXIuZnJvbUNvbmZpZyhjb25maWcsIHRoaXMubG9nZ2VyKTtcblx0fVxuXG59XG4iXX0=