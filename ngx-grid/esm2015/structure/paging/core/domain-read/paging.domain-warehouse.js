/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { hermesTake } from '@generic-ui/hermes';
import { PagingRepository } from '../api/read/paging.repository';
import { PagingWarehouse } from '../api/paging.warehouse';
export class PagingDomainWarehouse extends PagingWarehouse {
    /**
     * @param {?} pagingRepository
     */
    constructor(pagingRepository) {
        super();
        this.pagingRepository = pagingRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onPaging(structureId) {
        return this.pagingRepository.on(structureId);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    oncePaging(structureId) {
        return this.pagingRepository
            .on(structureId)
            .pipe(hermesTake(1));
    }
}
PagingDomainWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PagingDomainWarehouse.ctorParameters = () => [
    { type: PagingRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingDomainWarehouse.prototype.pagingRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmRvbWFpbi13YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9wYWdpbmcvY29yZS9kb21haW4tcmVhZC9wYWdpbmcuZG9tYWluLXdhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQW9CLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUkxRCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsZUFBZTs7OztJQUV6RCxZQUE2QixnQkFBa0M7UUFDOUQsS0FBSyxFQUFFLENBQUM7UUFEb0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUUvRCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxXQUF3QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsV0FBd0I7UUFDbEMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCO2FBQ3RCLEVBQUUsQ0FBQyxXQUFXLENBQUM7YUFDZixJQUFJLENBQ0osVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUNiLENBQUM7SUFDUixDQUFDOzs7WUFqQkQsVUFBVTs7OztZQUxGLGdCQUFnQjs7Ozs7OztJQVFaLGlEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSwgaGVybWVzVGFrZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFBhZ2luZ1JlcG9zaXRvcnkgfSBmcm9tICcuLi9hcGkvcmVhZC9wYWdpbmcucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBQYWdpbmcgfSBmcm9tICcuLi9hcGkvcmVhZC9wYWdpbmcnO1xuaW1wb3J0IHsgUGFnaW5nV2FyZWhvdXNlIH0gZnJvbSAnLi4vYXBpL3BhZ2luZy53YXJlaG91c2UnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdpbmdEb21haW5XYXJlaG91c2UgZXh0ZW5kcyBQYWdpbmdXYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcGFnaW5nUmVwb3NpdG9yeTogUGFnaW5nUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRvblBhZ2luZyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPFBhZ2luZz4ge1xuXHRcdHJldHVybiB0aGlzLnBhZ2luZ1JlcG9zaXRvcnkub24oc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0b25jZVBhZ2luZyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPFBhZ2luZz4ge1xuXHRcdHJldHVybiB0aGlzLnBhZ2luZ1JlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNUYWtlKDEpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIl19