/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Paging } from './read/paging';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vcGFnaW5nL3BhZ2luZy5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd2QztJQUFBO0lBY0EsQ0FBQzs7Ozs7SUFYQSxpQ0FBTzs7OztJQUFQLFVBQVEsU0FBMEI7UUFDakMsT0FBTyxJQUFJLE1BQU0sQ0FDaEIsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUNyQixTQUFTLENBQUMsT0FBTyxFQUFFLEVBQ25CLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFDdkIsU0FBUyxDQUFDLFlBQVksRUFBRSxFQUN4QixTQUFTLENBQUMsVUFBVSxFQUFFLEVBQ3RCLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FDekIsQ0FBQztJQUNILENBQUM7O2dCQVpELFVBQVU7O0lBY1gsc0JBQUM7Q0FBQSxBQWRELElBY0M7U0FiWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYWdpbmdBZ2dyZWdhdGUgfSBmcm9tICcuL2NvbW1hbmQvcGFnaW5nLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBQYWdpbmcgfSBmcm9tICcuL3JlYWQvcGFnaW5nJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnaW5nQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KGFnZ3JlZ2F0ZTogUGFnaW5nQWdncmVnYXRlKTogUGFnaW5nIHtcblx0XHRyZXR1cm4gbmV3IFBhZ2luZyhcblx0XHRcdGFnZ3JlZ2F0ZS5pc0VuYWJsZWQoKSxcblx0XHRcdGFnZ3JlZ2F0ZS5nZXRQYWdlKCksXG5cdFx0XHRhZ2dyZWdhdGUuZ2V0UGFnZVNpemUoKSxcblx0XHRcdGFnZ3JlZ2F0ZS5nZXRQYWdlU2l6ZXMoKSxcblx0XHRcdGFnZ3JlZ2F0ZS5pc1BhZ2VyVG9wKCksXG5cdFx0XHRhZ2dyZWdhdGUuaXNQYWdlckJvdHRvbSgpXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=