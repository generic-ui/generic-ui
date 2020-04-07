/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureFilterRepository } from '../../../read/structure/filter/structure.filter.repository';
import { StructureQuickFilterRepository } from '../../../read/structure/filter/structure.quick-filter.repository';
export class StructureFilterReadModelWarehouse {
    /**
     * @param {?} structureFilterRepository
     * @param {?} structureQuickFilterRepository
     */
    constructor(structureFilterRepository, structureQuickFilterRepository) {
        this.structureFilterRepository = structureFilterRepository;
        this.structureQuickFilterRepository = structureQuickFilterRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onFilteringEnabled(structureId) {
        return this.structureFilterRepository.selectFilterEnabled(structureId);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onQuickFiltersEnabled(structureId) {
        return this.structureQuickFilterRepository.selectQuickFilterEnabled(structureId);
    }
}
StructureFilterReadModelWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureFilterReadModelWarehouse.ctorParameters = () => [
    { type: StructureFilterRepository },
    { type: StructureQuickFilterRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFilterReadModelWarehouse.prototype.structureFilterRepository;
    /**
     * @type {?}
     * @private
     */
    StructureFilterReadModelWarehouse.prototype.structureQuickFilterRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWZpbHRlci5yZWFkLW1vZGVsLXdhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvc3RydWN0dXJlL2ZpbHRlci9zdHJ1Y3R1cmUtZmlsdGVyLnJlYWQtbW9kZWwtd2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBS2xILE1BQU0sT0FBTyxpQ0FBaUM7Ozs7O0lBRTdDLFlBQW9CLHlCQUFvRCxFQUM3RCw4QkFBOEQ7UUFEckQsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQUM3RCxtQ0FBOEIsR0FBOUIsOEJBQThCLENBQWdDO0lBQ3pFLENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUMsV0FBd0I7UUFDMUMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxXQUF3QjtRQUM3QyxPQUFPLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRixDQUFDOzs7WUFiRCxVQUFVOzs7O1lBTEYseUJBQXlCO1lBQ3pCLDhCQUE4Qjs7Ozs7OztJQU8xQixzRUFBNEQ7Ozs7O0lBQ3JFLDJFQUFzRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlRmlsdGVyUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL3JlYWQvc3RydWN0dXJlL2ZpbHRlci9zdHJ1Y3R1cmUuZmlsdGVyLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlUXVpY2tGaWx0ZXJSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vcmVhZC9zdHJ1Y3R1cmUvZmlsdGVyL3N0cnVjdHVyZS5xdWljay1maWx0ZXIucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVGaWx0ZXJSZWFkTW9kZWxXYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlRmlsdGVyUmVwb3NpdG9yeTogU3RydWN0dXJlRmlsdGVyUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVRdWlja0ZpbHRlclJlcG9zaXRvcnk6IFN0cnVjdHVyZVF1aWNrRmlsdGVyUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0b25GaWx0ZXJpbmdFbmFibGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZUZpbHRlclJlcG9zaXRvcnkuc2VsZWN0RmlsdGVyRW5hYmxlZChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvblF1aWNrRmlsdGVyc0VuYWJsZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlUXVpY2tGaWx0ZXJSZXBvc2l0b3J5LnNlbGVjdFF1aWNrRmlsdGVyRW5hYmxlZChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19