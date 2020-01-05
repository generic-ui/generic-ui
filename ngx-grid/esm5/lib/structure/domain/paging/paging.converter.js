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
        return new Paging(aggregate.isEnabled(), aggregate.getPage(), aggregate.getPageSize(), aggregate.getPageSizes(), aggregate.isPagerTop(), aggregate.isPagerBottom(), aggregate.isNextPageDisabled(), aggregate.isPrevPageDisabled(), aggregate.calculateStart(), aggregate.calculateEnd(), aggregate.getSourceSize());
    };
    PagingConverter.decorators = [
        { type: Injectable }
    ];
    return PagingConverter;
}());
export { PagingConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vcGFnaW5nL3BhZ2luZy5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd2QztJQUFBO0lBbUJBLENBQUM7Ozs7O0lBaEJBLGlDQUFPOzs7O0lBQVAsVUFBUSxTQUEwQjtRQUNqQyxPQUFPLElBQUksTUFBTSxDQUNoQixTQUFTLENBQUMsU0FBUyxFQUFFLEVBQ3JCLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFDbkIsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUN2QixTQUFTLENBQUMsWUFBWSxFQUFFLEVBQ3hCLFNBQVMsQ0FBQyxVQUFVLEVBQUUsRUFDdEIsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUN6QixTQUFTLENBQUMsa0JBQWtCLEVBQUUsRUFDOUIsU0FBUyxDQUFDLGtCQUFrQixFQUFFLEVBQzlCLFNBQVMsQ0FBQyxjQUFjLEVBQUUsRUFDMUIsU0FBUyxDQUFDLFlBQVksRUFBRSxFQUN4QixTQUFTLENBQUMsYUFBYSxFQUFFLENBQ3pCLENBQUM7SUFDSCxDQUFDOztnQkFqQkQsVUFBVTs7SUFtQlgsc0JBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWxCWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYWdpbmdBZ2dyZWdhdGUgfSBmcm9tICcuL2NvbW1hbmQvcGFnaW5nLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBQYWdpbmcgfSBmcm9tICcuL3JlYWQvcGFnaW5nJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnaW5nQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KGFnZ3JlZ2F0ZTogUGFnaW5nQWdncmVnYXRlKTogUGFnaW5nIHtcblx0XHRyZXR1cm4gbmV3IFBhZ2luZyhcblx0XHRcdGFnZ3JlZ2F0ZS5pc0VuYWJsZWQoKSxcblx0XHRcdGFnZ3JlZ2F0ZS5nZXRQYWdlKCksXG5cdFx0XHRhZ2dyZWdhdGUuZ2V0UGFnZVNpemUoKSxcblx0XHRcdGFnZ3JlZ2F0ZS5nZXRQYWdlU2l6ZXMoKSxcblx0XHRcdGFnZ3JlZ2F0ZS5pc1BhZ2VyVG9wKCksXG5cdFx0XHRhZ2dyZWdhdGUuaXNQYWdlckJvdHRvbSgpLFxuXHRcdFx0YWdncmVnYXRlLmlzTmV4dFBhZ2VEaXNhYmxlZCgpLFxuXHRcdFx0YWdncmVnYXRlLmlzUHJldlBhZ2VEaXNhYmxlZCgpLFxuXHRcdFx0YWdncmVnYXRlLmNhbGN1bGF0ZVN0YXJ0KCksXG5cdFx0XHRhZ2dyZWdhdGUuY2FsY3VsYXRlRW5kKCksXG5cdFx0XHRhZ2dyZWdhdGUuZ2V0U291cmNlU2l6ZSgpXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=