/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureFilterRepository } from '../../read/structure/filter/structure.filter.repository';
import { StructureQuickFilterRepository } from '../../read/structure/filter/structure.quick-filter.repository';
var StructureFilterWarehouse = /** @class */ (function () {
    function StructureFilterWarehouse(structureFilterRepository, structureQuickFilterRepository) {
        this.structureFilterRepository = structureFilterRepository;
        this.structureQuickFilterRepository = structureQuickFilterRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureFilterWarehouse.prototype.onFilteringEnabled = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.structureFilterRepository.selectFilterEnabled(structureId);
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureFilterWarehouse.prototype.onQuickFiltersEnabled = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.structureQuickFilterRepository.selectQuickFilterEnabled(structureId);
    };
    StructureFilterWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureFilterWarehouse.ctorParameters = function () { return [
        { type: StructureFilterRepository },
        { type: StructureQuickFilterRepository }
    ]; };
    return StructureFilterWarehouse;
}());
export { StructureFilterWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFilterWarehouse.prototype.structureFilterRepository;
    /**
     * @type {?}
     * @private
     */
    StructureFilterWarehouse.prototype.structureQuickFilterRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWZpbHRlci53YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWktYXBpL2ZpbHRlci9zdHJ1Y3R1cmUtZmlsdGVyLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUkvRztJQUdDLGtDQUFvQix5QkFBb0QsRUFDN0QsOEJBQThEO1FBRHJELDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDN0QsbUNBQThCLEdBQTlCLDhCQUE4QixDQUFnQztJQUN6RSxDQUFDOzs7OztJQUVELHFEQUFrQjs7OztJQUFsQixVQUFtQixXQUF3QjtRQUMxQyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7OztJQUVELHdEQUFxQjs7OztJQUFyQixVQUFzQixXQUF3QjtRQUM3QyxPQUFPLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRixDQUFDOztnQkFiRCxVQUFVOzs7O2dCQUxGLHlCQUF5QjtnQkFDekIsOEJBQThCOztJQW1CdkMsK0JBQUM7Q0FBQSxBQWZELElBZUM7U0FkWSx3QkFBd0I7Ozs7OztJQUV4Qiw2REFBNEQ7Ozs7O0lBQ3JFLGtFQUFzRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlRmlsdGVyUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL3JlYWQvc3RydWN0dXJlL2ZpbHRlci9zdHJ1Y3R1cmUuZmlsdGVyLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlUXVpY2tGaWx0ZXJSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vcmVhZC9zdHJ1Y3R1cmUvZmlsdGVyL3N0cnVjdHVyZS5xdWljay1maWx0ZXIucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVGaWx0ZXJXYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlRmlsdGVyUmVwb3NpdG9yeTogU3RydWN0dXJlRmlsdGVyUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVRdWlja0ZpbHRlclJlcG9zaXRvcnk6IFN0cnVjdHVyZVF1aWNrRmlsdGVyUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0b25GaWx0ZXJpbmdFbmFibGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZUZpbHRlclJlcG9zaXRvcnkuc2VsZWN0RmlsdGVyRW5hYmxlZChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvblF1aWNrRmlsdGVyc0VuYWJsZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlUXVpY2tGaWx0ZXJSZXBvc2l0b3J5LnNlbGVjdFF1aWNrRmlsdGVyRW5hYmxlZChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19