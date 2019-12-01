/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { StructureRepository } from '../../structure/query/structure.repository';
var SchemaRepository = /** @class */ (function () {
    function SchemaRepository(structureRepository) {
        this.structureRepository = structureRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    SchemaRepository.prototype.select = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.structureRepository
            .select(structureId)
            .pipe(filter((/**
         * @param {?} structure
         * @return {?}
         */
        function (structure) { return structure.getId().toString() === structureId.toString(); })), map((/**
         * @param {?} structure
         * @return {?}
         */
        function (structure) { return structure.getSchema(); })));
    };
    SchemaRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SchemaRepository.ctorParameters = function () { return [
        { type: StructureRepository }
    ]; };
    return SchemaRepository;
}());
export { SchemaRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaRepository.prototype.structureRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3NjaGVtYS9xdWVyeS9zY2hlbWEtcmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBTWpGO0lBR0MsMEJBQW9CLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBQzVELENBQUM7Ozs7O0lBRUQsaUNBQU07Ozs7SUFBTixVQUFPLFdBQXdCO1FBRTlCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQjthQUN6QixNQUFNLENBQUMsV0FBVyxDQUFDO2FBQ25CLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsVUFBQyxTQUFvQixJQUFLLE9BQUEsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBdkQsQ0FBdUQsRUFBQyxFQUN6RixHQUFHOzs7O1FBQUMsVUFBQyxTQUFvQixJQUFLLE9BQUEsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFyQixDQUFxQixFQUFDLENBQ3BELENBQUM7SUFDUixDQUFDOztnQkFkRCxVQUFVOzs7O2dCQU5GLG1CQUFtQjs7SUFzQjVCLHVCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FmWSxnQkFBZ0I7Ozs7OztJQUVoQiwrQ0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN0cnVjdHVyZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUvcXVlcnkvc3RydWN0dXJlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuaW1wb3J0IHsgU3RydWN0dXJlIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlL3F1ZXJ5L3N0cnVjdHVyZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVtYVJlcG9zaXRvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlUmVwb3NpdG9yeTogU3RydWN0dXJlUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0c2VsZWN0KHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8U2NoZW1hPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVSZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5zZWxlY3Qoc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoc3RydWN0dXJlOiBTdHJ1Y3R1cmUpID0+IHN0cnVjdHVyZS5nZXRJZCgpLnRvU3RyaW5nKCkgPT09IHN0cnVjdHVyZUlkLnRvU3RyaW5nKCkpLFxuXHRcdFx0XHRcdCAgIG1hcCgoc3RydWN0dXJlOiBTdHJ1Y3R1cmUpID0+IHN0cnVjdHVyZS5nZXRTY2hlbWEoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=