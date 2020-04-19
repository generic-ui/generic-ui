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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlLWFwaS9wYWdpbmcvcmVhZC9wYWdpbmcuY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFHbEM7SUFBQTtJQW1CQSxDQUFDOzs7OztJQWhCQSxpQ0FBTzs7OztJQUFQLFVBQVEsU0FBd0I7UUFDL0IsT0FBTyxJQUFJLE1BQU0sQ0FDaEIsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUNyQixTQUFTLENBQUMsT0FBTyxFQUFFLEVBQ25CLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFDdkIsU0FBUyxDQUFDLFlBQVksRUFBRSxFQUN4QixTQUFTLENBQUMsVUFBVSxFQUFFLEVBQ3RCLFNBQVMsQ0FBQyxhQUFhLEVBQUUsRUFDekIsU0FBUyxDQUFDLGtCQUFrQixFQUFFLEVBQzlCLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxFQUM5QixTQUFTLENBQUMsY0FBYyxFQUFFLEVBQzFCLFNBQVMsQ0FBQyxZQUFZLEVBQUUsRUFDeEIsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUN6QixDQUFDO0lBQ0gsQ0FBQzs7Z0JBakJELFVBQVU7O0lBbUJYLHNCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FsQlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnaW5nTWFuYWdlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9wYWdpbmcvcGFnaW5nLm1hbmFnZXInO1xuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi9wYWdpbmcnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdpbmdDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQoYWdncmVnYXRlOiBQYWdpbmdNYW5hZ2VyKTogUGFnaW5nIHtcblx0XHRyZXR1cm4gbmV3IFBhZ2luZyhcblx0XHRcdGFnZ3JlZ2F0ZS5pc0VuYWJsZWQoKSxcblx0XHRcdGFnZ3JlZ2F0ZS5nZXRQYWdlKCksXG5cdFx0XHRhZ2dyZWdhdGUuZ2V0UGFnZVNpemUoKSxcblx0XHRcdGFnZ3JlZ2F0ZS5nZXRQYWdlU2l6ZXMoKSxcblx0XHRcdGFnZ3JlZ2F0ZS5pc1BhZ2VyVG9wKCksXG5cdFx0XHRhZ2dyZWdhdGUuaXNQYWdlckJvdHRvbSgpLFxuXHRcdFx0YWdncmVnYXRlLmlzTmV4dFBhZ2VEaXNhYmxlZCgpLFxuXHRcdFx0YWdncmVnYXRlLmlzUHJldlBhZ2VEaXNhYmxlZCgpLFxuXHRcdFx0YWdncmVnYXRlLmNhbGN1bGF0ZVN0YXJ0KCksXG5cdFx0XHRhZ2dyZWdhdGUuY2FsY3VsYXRlRW5kKCksXG5cdFx0XHRhZ2dyZWdhdGUuZ2V0U291cmNlU2l6ZSgpXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=