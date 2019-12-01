/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Paging } from './query/paging';
var PagingConverter = /** @class */ (function () {
    function PagingConverter() {
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    PagingConverter.prototype.convert = /**
     * @param {?} aggregate
     * @return {?}
     */
    function (aggregate) {
        return new Paging(aggregate.isEnabled(), aggregate.getPage(), aggregate.getPageSize(), aggregate.getPageSizes(), aggregate.isPagerTop(), aggregate.isPagerBottom());
    };
    PagingConverter.decorators = [
        { type: Injectable }
    ];
    return PagingConverter;
}());
export { PagingConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vcGFnaW5nL3BhZ2luZy5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3hDO0lBQUE7SUFjQSxDQUFDOzs7OztJQVhBLGlDQUFPOzs7O0lBQVAsVUFBUSxTQUEwQjtRQUNqQyxPQUFPLElBQUksTUFBTSxDQUNoQixTQUFTLENBQUMsU0FBUyxFQUFFLEVBQ3JCLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFDbkIsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUN2QixTQUFTLENBQUMsWUFBWSxFQUFFLEVBQ3hCLFNBQVMsQ0FBQyxVQUFVLEVBQUUsRUFDdEIsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUN6QixDQUFDO0lBQ0gsQ0FBQzs7Z0JBWkQsVUFBVTs7SUFjWCxzQkFBQztDQUFBLEFBZEQsSUFjQztTQWJZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBhZ2luZ0FnZ3JlZ2F0ZSB9IGZyb20gJy4vY29tbWFuZC9wYWdpbmcuYWdncmVnYXRlJztcbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4vcXVlcnkvcGFnaW5nJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnaW5nQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KGFnZ3JlZ2F0ZTogUGFnaW5nQWdncmVnYXRlKTogUGFnaW5nIHtcblx0XHRyZXR1cm4gbmV3IFBhZ2luZyhcblx0XHRcdGFnZ3JlZ2F0ZS5pc0VuYWJsZWQoKSxcblx0XHRcdGFnZ3JlZ2F0ZS5nZXRQYWdlKCksXG5cdFx0XHRhZ2dyZWdhdGUuZ2V0UGFnZVNpemUoKSxcblx0XHRcdGFnZ3JlZ2F0ZS5nZXRQYWdlU2l6ZXMoKSxcblx0XHRcdGFnZ3JlZ2F0ZS5pc1BhZ2VyVG9wKCksXG5cdFx0XHRhZ2dyZWdhdGUuaXNQYWdlckJvdHRvbSgpXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=