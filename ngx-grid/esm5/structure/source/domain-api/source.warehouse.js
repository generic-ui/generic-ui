/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { distinctUntilChanged, map, take } from 'rxjs/operators';
import { StructureReadModelRepository } from '../../core/domain-api/read/structure.read-model-repository';
import { StructureSourceOriginRepository } from './origin/structure.source-origin.repository';
import { structureGlobalId } from '../../core/domain-api/structure.global-id';
import { StructurePreparedItemsRepository } from './prepared/structure.prepared-items.repository';
var SourceWarehouse = /** @class */ (function () {
    function SourceWarehouse(structureRepository, structurePreparedItemsRepository, structureSourceOriginRepository) {
        this.structureRepository = structureRepository;
        this.structurePreparedItemsRepository = structurePreparedItemsRepository;
        this.structureSourceOriginRepository = structureSourceOriginRepository;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SourceWarehouse.prototype.getEntities = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        return this.structureRepository.getStructure(structureId).getEntities();
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SourceWarehouse.prototype.onEntities = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        return this.structureRepository
            .onStructure(structureId)
            .pipe(
        // tap(() => {
        //    console.log('onEntities');
        // }),
        map((/**
         * @param {?} structure
         * @return {?}
         */
        function (structure) { return structure.getEntities(); })), distinctUntilChanged((/**
         * @param {?} ents1
         * @param {?} ents2
         * @return {?}
         */
        function (ents1, ents2) {
            if (ents1.length !== ents2.length) {
                return false;
            }
            /** @type {?} */
            var flag = true;
            ents1.forEach((/**
             * @param {?} ent
             * @param {?} index
             * @return {?}
             */
            function (ent, index) {
                if (!ent.equals(ents2[index])) {
                    flag = false;
                    return;
                }
            }));
            return flag;
        })));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SourceWarehouse.prototype.onEntitiesSize = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        return this.onEntities(structureId)
            .pipe(map((/**
         * @param {?} entities
         * @return {?}
         */
        function (entities) {
            return entities.length;
        })));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SourceWarehouse.prototype.onSingleEntities = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        return this.onEntities(structureId)
            .pipe(take(1));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SourceWarehouse.prototype.onOriginSize = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        return this.structureSourceOriginRepository
            .onOrigin(structureId)
            .pipe(map((/**
         * @param {?} origin
         * @return {?}
         */
        function (origin) { return origin.length; })));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SourceWarehouse.prototype.onLoading = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        return this.structureRepository
            .onStructure(structureId)
            .pipe(map((/**
         * @param {?} structure
         * @return {?}
         */
        function (structure) { return structure.getSource().isLoading(); })));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SourceWarehouse.prototype.onPreparedEntities = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        return this.structurePreparedItemsRepository.onPreparedItems(structureId);
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SourceWarehouse.prototype.getPreparedEntities = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        return this.structurePreparedItemsRepository.getPreparedItems(structureId);
    };
    SourceWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SourceWarehouse.ctorParameters = function () { return [
        { type: StructureReadModelRepository },
        { type: StructurePreparedItemsRepository },
        { type: StructureSourceOriginRepository }
    ]; };
    return SourceWarehouse;
}());
export { SourceWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceWarehouse.prototype.structureRepository;
    /**
     * @type {?}
     * @private
     */
    SourceWarehouse.prototype.structurePreparedItemsRepository;
    /**
     * @type {?}
     * @private
     */
    SourceWarehouse.prototype.structureSourceOriginRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9kb21haW4tYXBpL3NvdXJjZS53YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQU8sTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUU5RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUc5RSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUtsRztJQUdDLHlCQUFvQixtQkFBaUQsRUFDMUQsZ0NBQWtFLEVBQ2xFLCtCQUFnRTtRQUZ2RCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQThCO1FBQzFELHFDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBa0M7UUFDbEUsb0NBQStCLEdBQS9CLCtCQUErQixDQUFpQztJQUMzRSxDQUFDOzs7OztJQUVELHFDQUFXOzs7O0lBQVgsVUFBWSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUN2RCxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekUsQ0FBQzs7Ozs7SUFFRCxvQ0FBVTs7OztJQUFWLFVBQVcsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFFdEQsT0FBTyxJQUFJLENBQUMsbUJBQW1CO2FBQ3pCLFdBQVcsQ0FBQyxXQUFXLENBQUM7YUFDeEIsSUFBSTtRQUNKLGNBQWM7UUFDaEIsZ0NBQWdDO1FBQzlCLE1BQU07UUFDTixHQUFHOzs7O1FBQUMsVUFBQyxTQUFpQyxJQUFLLE9BQUEsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUF2QixDQUF1QixFQUFDLEVBQ25FLG9CQUFvQjs7Ozs7UUFBQyxVQUFDLEtBQXdCLEVBQUUsS0FBd0I7WUFDdkUsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0JBQ2xDLE9BQU8sS0FBSyxDQUFDO2FBQ2I7O2dCQUVHLElBQUksR0FBRyxJQUFJO1lBRWYsS0FBSyxDQUFDLE9BQU87Ozs7O1lBQUMsVUFBQyxHQUFHLEVBQUUsS0FBSztnQkFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQzlCLElBQUksR0FBRyxLQUFLLENBQUM7b0JBQ2IsT0FBTztpQkFDUDtZQUNGLENBQUMsRUFBQyxDQUFDO1lBRUgsT0FBTyxJQUFJLENBQUM7UUFDYixDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCx3Q0FBYzs7OztJQUFkLFVBQWUsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFFMUQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQzthQUM3QixJQUFJLENBQ0osR0FBRzs7OztRQUFDLFVBQUMsUUFBMkI7WUFDL0IsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ3hCLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDOzs7OztJQUVELDBDQUFnQjs7OztJQUFoQixVQUFpQixXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUU1RCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO2FBQzdCLElBQUksQ0FDSixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsc0NBQVk7Ozs7SUFBWixVQUFhLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQ3hELE9BQU8sSUFBSSxDQUFDLCtCQUErQjthQUNyQyxRQUFRLENBQUMsV0FBVyxDQUFDO2FBQ3JCLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsTUFBTSxFQUFiLENBQWEsRUFBQyxDQUM1QixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxtQ0FBUzs7OztJQUFULFVBQVUsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDckQsT0FBTyxJQUFJLENBQUMsbUJBQW1CO2FBQ3pCLFdBQVcsQ0FBQyxXQUFXLENBQUM7YUFDeEIsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxVQUFDLFNBQWlDLElBQUssT0FBQSxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQWpDLENBQWlDLEVBQUMsQ0FDN0UsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsNENBQWtCOzs7O0lBQWxCLFVBQW1CLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQzlELE9BQU8sSUFBSSxDQUFDLGdDQUFnQyxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzRSxDQUFDOzs7OztJQUVELDZDQUFtQjs7OztJQUFuQixVQUFvQixXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUMvRCxPQUFPLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1RSxDQUFDOztnQkFoRkQsVUFBVTs7OztnQkFYRiw0QkFBNEI7Z0JBTTVCLGdDQUFnQztnQkFMaEMsK0JBQStCOztJQTRGeEMsc0JBQUM7Q0FBQSxBQWxGRCxJQWtGQztTQWpGWSxlQUFlOzs7Ozs7SUFFZiw4Q0FBeUQ7Ozs7O0lBQ2xFLDJEQUEwRTs7Ozs7SUFDMUUsMERBQXdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgdGFrZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vY29yZS9kb21haW4tYXBpL3JlYWQvc3RydWN0dXJlLnJlYWQtbW9kZWwtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5IH0gZnJvbSAnLi9vcmlnaW4vc3RydWN0dXJlLnNvdXJjZS1vcmlnaW4ucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uLy4uL2NvcmUvZG9tYWluLWFwaS9zdHJ1Y3R1cmUuZ2xvYmFsLWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QgfSBmcm9tICcuLi8uLi9jb3JlL2RvbWFpbi1hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZVByZXBhcmVkSXRlbXNSZXBvc2l0b3J5IH0gZnJvbSAnLi9wcmVwYXJlZC9zdHJ1Y3R1cmUucHJlcGFyZWQtaXRlbXMucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgV2FyZWhvdXNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU291cmNlV2FyZWhvdXNlIGltcGxlbWVudHMgV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZVJlcG9zaXRvcnk6IFN0cnVjdHVyZVJlYWRNb2RlbFJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnk6IFN0cnVjdHVyZVByZXBhcmVkSXRlbXNSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnk6IFN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdGdldEVudGl0aWVzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogQXJyYXk8SXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVJlcG9zaXRvcnkuZ2V0U3RydWN0dXJlKHN0cnVjdHVyZUlkKS5nZXRFbnRpdGllcygpO1xuXHR9XG5cblx0b25FbnRpdGllcyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IE9ic2VydmFibGU8QXJyYXk8SXRlbUVudGl0eT4+IHtcblxuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uU3RydWN0dXJlKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICAvLyB0YXAoKCkgPT4ge1xuXHRcdFx0XHRcdFx0Ly8gICAgY29uc29sZS5sb2coJ29uRW50aXRpZXMnKTtcblx0XHRcdFx0XHQgICAvLyB9KSxcblx0XHRcdFx0XHQgICBtYXAoKHN0cnVjdHVyZTogU3RydWN0dXJlUmVhZE1vZGVsUm9vdCkgPT4gc3RydWN0dXJlLmdldEVudGl0aWVzKCkpLFxuXHRcdFx0XHRcdCAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKChlbnRzMTogQXJyYXk8SXRlbUVudGl0eT4sIGVudHMyOiBBcnJheTxJdGVtRW50aXR5PikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgaWYgKGVudHMxLmxlbmd0aCAhPT0gZW50czIubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRcdCAgIHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdCAgIH1cblxuXHRcdFx0XHRcdFx0ICAgbGV0IGZsYWcgPSB0cnVlO1xuXG5cdFx0XHRcdFx0XHQgICBlbnRzMS5mb3JFYWNoKChlbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRcdCAgIGlmICghZW50LmVxdWFscyhlbnRzMltpbmRleF0pKSB7XG5cdFx0XHRcdFx0XHRcdFx0ICAgZmxhZyA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdCAgIHJldHVybjtcblx0XHRcdFx0XHRcdFx0ICAgfVxuXHRcdFx0XHRcdFx0ICAgfSk7XG5cblx0XHRcdFx0XHRcdCAgIHJldHVybiBmbGFnO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbkVudGl0aWVzU2l6ZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vbkVudGl0aWVzKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGVudGl0aWVzOiBBcnJheTxJdGVtRW50aXR5PikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIGVudGl0aWVzLmxlbmd0aDtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25TaW5nbGVFbnRpdGllcyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IE9ic2VydmFibGU8QXJyYXk8SXRlbUVudGl0eT4+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uRW50aXRpZXMoc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIHRha2UoMSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uT3JpZ2luU2l6ZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub25PcmlnaW4oc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcChvcmlnaW4gPT4gb3JpZ2luLmxlbmd0aClcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uTG9hZGluZyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uU3RydWN0dXJlKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKHN0cnVjdHVyZTogU3RydWN0dXJlUmVhZE1vZGVsUm9vdCkgPT4gc3RydWN0dXJlLmdldFNvdXJjZSgpLmlzTG9hZGluZygpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25QcmVwYXJlZEVudGl0aWVzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogT2JzZXJ2YWJsZTxBcnJheTxPcmlnaW5JdGVtRW50aXR5Pj4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVByZXBhcmVkSXRlbXNSZXBvc2l0b3J5Lm9uUHJlcGFyZWRJdGVtcyhzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRnZXRQcmVwYXJlZEVudGl0aWVzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVByZXBhcmVkSXRlbXNSZXBvc2l0b3J5LmdldFByZXBhcmVkSXRlbXMoc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==