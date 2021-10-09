/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Logger } from '../../../../common/cdk/logger/logger';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLm1hbmFnZXItZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3BhZ2luZy9jb3JlL2RvbWFpbi9wYWdpbmcubWFuYWdlci1mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUU5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFLakQsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUVoQyxZQUE2QixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUMzQyxDQUFDOzs7O0lBRUQsYUFBYTtRQUNaLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxNQUEwQjtRQUMxQyxPQUFPLGFBQWEsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7WUFaRCxVQUFVOzs7O1lBTkYsTUFBTTs7Ozs7OztJQVNGLHNDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9sb2dnZXIvbG9nZ2VyJztcblxuaW1wb3J0IHsgUGFnaW5nTWFuYWdlciB9IGZyb20gJy4vcGFnaW5nLm1hbmFnZXInO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnV2l0aElkIH0gZnJvbSAnLi9wYWdpbmctY29uZmlnLXdpdGgtaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdpbmdNYW5hZ2VyRmFjdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBsb2dnZXI6IExvZ2dlcikge1xuXHR9XG5cblx0Y3JlYXRlRGVmYXVsdCgpOiBQYWdpbmdNYW5hZ2VyIHtcblx0XHRyZXR1cm4gUGFnaW5nTWFuYWdlci5kZWZhdWx0KHRoaXMubG9nZ2VyKTtcblx0fVxuXG5cdGNyZWF0ZUZyb21Db25maWcoY29uZmlnOiBQYWdpbmdDb25maWdXaXRoSWQpOiBQYWdpbmdNYW5hZ2VyIHtcblx0XHRyZXR1cm4gUGFnaW5nTWFuYWdlci5mcm9tQ29uZmlnKGNvbmZpZywgdGhpcy5sb2dnZXIpO1xuXHR9XG5cbn1cbiJdfQ==