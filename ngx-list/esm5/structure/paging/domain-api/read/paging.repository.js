/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { StructureReadModelRepository } from '../../../../lib/structure/domain-api/read/structure.read-model-repository';
var PagingRepository = /** @class */ (function () {
    function PagingRepository(structureRepository) {
        this.structureRepository = structureRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    PagingRepository.prototype.on = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.structureRepository
            .onStructure(structureId)
            .pipe(filter((/**
         * @param {?} structure
         * @return {?}
         */
        function (structure) { return structure.getId().toString() === structureId.toString(); })), map((/**
         * @param {?} structure
         * @return {?}
         */
        function (structure) { return structure.getPaging(); })));
    };
    PagingRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PagingRepository.ctorParameters = function () { return [
        { type: StructureReadModelRepository }
    ]; };
    return PagingRepository;
}());
export { PagingRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingRepository.prototype.structureRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9wYWdpbmcvZG9tYWluLWFwaS9yZWFkL3BhZ2luZy5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFNekg7SUFHQywwQkFBNkIsbUJBQWlEO1FBQWpELHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBOEI7SUFDOUUsQ0FBQzs7Ozs7SUFFRCw2QkFBRTs7OztJQUFGLFVBQUcsV0FBd0I7UUFFMUIsT0FBTyxJQUFJLENBQUMsbUJBQW1CO2FBQ3pCLFdBQVcsQ0FBQyxXQUFXLENBQUM7YUFDeEIsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxVQUFDLFNBQWlDLElBQUssT0FBQSxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUF2RCxDQUF1RCxFQUFDLEVBQ3RHLEdBQUc7Ozs7UUFBQyxVQUFDLFNBQWlDLElBQUssT0FBQSxTQUFTLENBQUMsU0FBUyxFQUFFLEVBQXJCLENBQXFCLEVBQUMsQ0FDakUsQ0FBQztJQUNSLENBQUM7O2dCQWRELFVBQVU7Ozs7Z0JBTkYsNEJBQTRCOztJQXNCckMsdUJBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQWZZLGdCQUFnQjs7Ozs7O0lBRWhCLCtDQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi9wYWdpbmcnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdpbmdSZXBvc2l0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVJlcG9zaXRvcnk6IFN0cnVjdHVyZVJlYWRNb2RlbFJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdG9uKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8UGFnaW5nPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVSZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vblN0cnVjdHVyZShzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChzdHJ1Y3R1cmU6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QpID0+IHN0cnVjdHVyZS5nZXRJZCgpLnRvU3RyaW5nKCkgPT09IHN0cnVjdHVyZUlkLnRvU3RyaW5nKCkpLFxuXHRcdFx0XHRcdCAgIG1hcCgoc3RydWN0dXJlOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290KSA9PiBzdHJ1Y3R1cmUuZ2V0UGFnaW5nKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIl19