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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3BhZ2luZy9kb21haW4tYXBpL3JlYWQvcGFnaW5nLmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBR2xDO0lBQUE7SUFtQkEsQ0FBQzs7Ozs7SUFoQkEsaUNBQU87Ozs7SUFBUCxVQUFRLFNBQXdCO1FBQy9CLE9BQU8sSUFBSSxNQUFNLENBQ2hCLFNBQVMsQ0FBQyxTQUFTLEVBQUUsRUFDckIsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUNuQixTQUFTLENBQUMsV0FBVyxFQUFFLEVBQ3ZCLFNBQVMsQ0FBQyxZQUFZLEVBQUUsRUFDeEIsU0FBUyxDQUFDLFVBQVUsRUFBRSxFQUN0QixTQUFTLENBQUMsYUFBYSxFQUFFLEVBQ3pCLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxFQUM5QixTQUFTLENBQUMsa0JBQWtCLEVBQUUsRUFDOUIsU0FBUyxDQUFDLGNBQWMsRUFBRSxFQUMxQixTQUFTLENBQUMsWUFBWSxFQUFFLEVBQ3hCLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FDekIsQ0FBQztJQUNILENBQUM7O2dCQWpCRCxVQUFVOztJQW1CWCxzQkFBQztDQUFBLEFBbkJELElBbUJDO1NBbEJZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBhZ2luZ01hbmFnZXIgfSBmcm9tICcuLi8uLi9kb21haW4vcGFnaW5nLm1hbmFnZXInO1xuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi9wYWdpbmcnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdpbmdDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQoYWdncmVnYXRlOiBQYWdpbmdNYW5hZ2VyKTogUGFnaW5nIHtcblx0XHRyZXR1cm4gbmV3IFBhZ2luZyhcblx0XHRcdGFnZ3JlZ2F0ZS5pc0VuYWJsZWQoKSxcblx0XHRcdGFnZ3JlZ2F0ZS5nZXRQYWdlKCksXG5cdFx0XHRhZ2dyZWdhdGUuZ2V0UGFnZVNpemUoKSxcblx0XHRcdGFnZ3JlZ2F0ZS5nZXRQYWdlU2l6ZXMoKSxcblx0XHRcdGFnZ3JlZ2F0ZS5pc1BhZ2VyVG9wKCksXG5cdFx0XHRhZ2dyZWdhdGUuaXNQYWdlckJvdHRvbSgpLFxuXHRcdFx0YWdncmVnYXRlLmlzTmV4dFBhZ2VEaXNhYmxlZCgpLFxuXHRcdFx0YWdncmVnYXRlLmlzUHJldlBhZ2VEaXNhYmxlZCgpLFxuXHRcdFx0YWdncmVnYXRlLmNhbGN1bGF0ZVN0YXJ0KCksXG5cdFx0XHRhZ2dyZWdhdGUuY2FsY3VsYXRlRW5kKCksXG5cdFx0XHRhZ2dyZWdhdGUuZ2V0U291cmNlU2l6ZSgpXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=