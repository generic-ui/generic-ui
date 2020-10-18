/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Paging } from './paging';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3BhZ2luZy9jb3JlL2FwaS9yZWFkL3BhZ2luZy5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUdsQztJQUFBO0lBbUJBLENBQUM7Ozs7O0lBaEJBLGlDQUFPOzs7O0lBQVAsVUFBUSxTQUF3QjtRQUMvQixPQUFPLElBQUksTUFBTSxDQUNoQixTQUFTLENBQUMsU0FBUyxFQUFFLEVBQ3JCLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFDbkIsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUN2QixTQUFTLENBQUMsWUFBWSxFQUFFLEVBQ3hCLFNBQVMsQ0FBQyxVQUFVLEVBQUUsRUFDdEIsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUN6QixTQUFTLENBQUMsa0JBQWtCLEVBQUUsRUFDOUIsU0FBUyxDQUFDLGtCQUFrQixFQUFFLEVBQzlCLFNBQVMsQ0FBQyxjQUFjLEVBQUUsRUFDMUIsU0FBUyxDQUFDLFlBQVksRUFBRSxFQUN4QixTQUFTLENBQUMsYUFBYSxFQUFFLENBQ3pCLENBQUM7SUFDSCxDQUFDOztnQkFqQkQsVUFBVTs7SUFtQlgsc0JBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWxCWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYWdpbmdNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3BhZ2luZy5tYW5hZ2VyJztcbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4vcGFnaW5nJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnaW5nQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KGFnZ3JlZ2F0ZTogUGFnaW5nTWFuYWdlcik6IFBhZ2luZyB7XG5cdFx0cmV0dXJuIG5ldyBQYWdpbmcoXG5cdFx0XHRhZ2dyZWdhdGUuaXNFbmFibGVkKCksXG5cdFx0XHRhZ2dyZWdhdGUuZ2V0UGFnZSgpLFxuXHRcdFx0YWdncmVnYXRlLmdldFBhZ2VTaXplKCksXG5cdFx0XHRhZ2dyZWdhdGUuZ2V0UGFnZVNpemVzKCksXG5cdFx0XHRhZ2dyZWdhdGUuaXNQYWdlclRvcCgpLFxuXHRcdFx0YWdncmVnYXRlLmlzUGFnZXJCb3R0b20oKSxcblx0XHRcdGFnZ3JlZ2F0ZS5pc05leHRQYWdlRGlzYWJsZWQoKSxcblx0XHRcdGFnZ3JlZ2F0ZS5pc1ByZXZQYWdlRGlzYWJsZWQoKSxcblx0XHRcdGFnZ3JlZ2F0ZS5jYWxjdWxhdGVTdGFydCgpLFxuXHRcdFx0YWdncmVnYXRlLmNhbGN1bGF0ZUVuZCgpLFxuXHRcdFx0YWdncmVnYXRlLmdldFNvdXJjZVNpemUoKVxuXHRcdCk7XG5cdH1cblxufVxuIl19