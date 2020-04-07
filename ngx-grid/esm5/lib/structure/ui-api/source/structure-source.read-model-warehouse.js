/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { distinctUntilChanged, map, take } from 'rxjs/operators';
import { StructureReadModelRepository } from '../../read/structure/structure.read-model-repository';
import { StructureSourceOriginRepository } from '../../read/source/origin/structure.source-origin.repository';
import { structureGlobalId } from '../structure.global-id';
import { StructurePreparedItemsRepository } from '../../read/source/prepared/structure.prepared-items.repository';
var StructureSourceReadModelWarehouse = /** @class */ (function () {
    function StructureSourceReadModelWarehouse(structureRepository, structurePreparedItemsRepository, structureSourceOriginRepository) {
        this.structureRepository = structureRepository;
        this.structurePreparedItemsRepository = structurePreparedItemsRepository;
        this.structureSourceOriginRepository = structureSourceOriginRepository;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    StructureSourceReadModelWarehouse.prototype.onEntities = /**
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
    StructureSourceReadModelWarehouse.prototype.onEntitiesSize = /**
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
    StructureSourceReadModelWarehouse.prototype.onSingleEntities = /**
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
    StructureSourceReadModelWarehouse.prototype.onOriginSize = /**
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
    StructureSourceReadModelWarehouse.prototype.onLoading = /**
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
    StructureSourceReadModelWarehouse.prototype.onPreparedEntities = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        return this.structurePreparedItemsRepository.onPreparedItems(structureId);
    };
    StructureSourceReadModelWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSourceReadModelWarehouse.ctorParameters = function () { return [
        { type: StructureReadModelRepository },
        { type: StructurePreparedItemsRepository },
        { type: StructureSourceOriginRepository }
    ]; };
    return StructureSourceReadModelWarehouse;
}());
export { StructureSourceReadModelWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSourceReadModelWarehouse.prototype.structureRepository;
    /**
     * @type {?}
     * @private
     */
    StructureSourceReadModelWarehouse.prototype.structurePreparedItemsRepository;
    /**
     * @type {?}
     * @private
     */
    StructureSourceReadModelWarehouse.prototype.structureSourceOriginRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXNvdXJjZS5yZWFkLW1vZGVsLXdhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvc291cmNlL3N0cnVjdHVyZS1zb3VyY2UucmVhZC1tb2RlbC13YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNwRyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUU5RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUczRCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUdsSDtJQUdDLDJDQUFvQixtQkFBaUQsRUFDMUQsZ0NBQWtFLEVBQ2xFLCtCQUFnRTtRQUZ2RCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQThCO1FBQzFELHFDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBa0M7UUFDbEUsb0NBQStCLEdBQS9CLCtCQUErQixDQUFpQztJQUMzRSxDQUFDOzs7OztJQUVELHNEQUFVOzs7O0lBQVYsVUFBVyxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUV0RCxPQUFPLElBQUksQ0FBQyxtQkFBbUI7YUFDekIsV0FBVyxDQUFDLFdBQVcsQ0FBQzthQUN4QixJQUFJLENBQ0osR0FBRzs7OztRQUFDLFVBQUMsU0FBaUMsSUFBSyxPQUFBLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBdkIsQ0FBdUIsRUFBQyxFQUNuRSxvQkFBb0I7Ozs7O1FBQUMsVUFBQyxLQUF3QixFQUFFLEtBQXdCO1lBQ3ZFLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUNsQyxPQUFPLEtBQUssQ0FBQzthQUNiOztnQkFFRyxJQUFJLEdBQUcsSUFBSTtZQUVmLEtBQUssQ0FBQyxPQUFPOzs7OztZQUFDLFVBQUMsR0FBRyxFQUFFLEtBQUs7Z0JBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO29CQUM5QixJQUFJLEdBQUcsS0FBSyxDQUFDO29CQUNiLE9BQU87aUJBQ1A7WUFDRixDQUFDLEVBQUMsQ0FBQztZQUVILE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsMERBQWM7Ozs7SUFBZCxVQUFlLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBRTFELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7YUFDN0IsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxVQUFDLFFBQTJCO1lBQy9CLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUN4QixDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCw0REFBZ0I7Ozs7SUFBaEIsVUFBaUIsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFFNUQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQzthQUM3QixJQUFJLENBQ0osSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNQLENBQUM7SUFDUixDQUFDOzs7OztJQUVELHdEQUFZOzs7O0lBQVosVUFBYSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUN4RCxPQUFPLElBQUksQ0FBQywrQkFBK0I7YUFDckMsUUFBUSxDQUFDLFdBQVcsQ0FBQzthQUNyQixJQUFJLENBQ0osR0FBRzs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE1BQU0sRUFBYixDQUFhLEVBQUMsQ0FDNUIsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQscURBQVM7Ozs7SUFBVCxVQUFVLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQ3JELE9BQU8sSUFBSSxDQUFDLG1CQUFtQjthQUN6QixXQUFXLENBQUMsV0FBVyxDQUFDO2FBQ3hCLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsVUFBQyxTQUFpQyxJQUFLLE9BQUEsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFqQyxDQUFpQyxFQUFDLENBQzdFLENBQUM7SUFDUixDQUFDOzs7OztJQUVELDhEQUFrQjs7OztJQUFsQixVQUFtQixXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUM5RCxPQUFPLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0UsQ0FBQzs7Z0JBckVELFVBQVU7Ozs7Z0JBVEYsNEJBQTRCO2dCQU01QixnQ0FBZ0M7Z0JBTGhDLCtCQUErQjs7SUErRXhDLHdDQUFDO0NBQUEsQUF2RUQsSUF1RUM7U0F0RVksaUNBQWlDOzs7Ozs7SUFFakMsZ0VBQXlEOzs7OztJQUNsRSw2RUFBMEU7Ozs7O0lBQzFFLDRFQUF3RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9yZWFkL3N0cnVjdHVyZS9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9yZWFkL3NvdXJjZS9vcmlnaW4vc3RydWN0dXJlLnNvdXJjZS1vcmlnaW4ucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgc3RydWN0dXJlR2xvYmFsSWQgfSBmcm9tICcuLi9zdHJ1Y3R1cmUuZ2xvYmFsLWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QgfSBmcm9tICcuLi8uLi9yZWFkL3N0cnVjdHVyZS9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9kb21haW4vc291cmNlL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZVByZXBhcmVkSXRlbXNSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vcmVhZC9zb3VyY2UvcHJlcGFyZWQvc3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLnJlcG9zaXRvcnknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTb3VyY2VSZWFkTW9kZWxXYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlUmVwb3NpdG9yeTogU3RydWN0dXJlUmVhZE1vZGVsUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeTogU3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeTogU3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0b25FbnRpdGllcyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IE9ic2VydmFibGU8QXJyYXk8SXRlbUVudGl0eT4+IHtcblxuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uU3RydWN0dXJlKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKHN0cnVjdHVyZTogU3RydWN0dXJlUmVhZE1vZGVsUm9vdCkgPT4gc3RydWN0dXJlLmdldEVudGl0aWVzKCkpLFxuXHRcdFx0XHRcdCAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKChlbnRzMTogQXJyYXk8SXRlbUVudGl0eT4sIGVudHMyOiBBcnJheTxJdGVtRW50aXR5PikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgaWYgKGVudHMxLmxlbmd0aCAhPT0gZW50czIubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRcdCAgIHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdCAgIH1cblxuXHRcdFx0XHRcdFx0ICAgbGV0IGZsYWcgPSB0cnVlO1xuXG5cdFx0XHRcdFx0XHQgICBlbnRzMS5mb3JFYWNoKChlbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRcdCAgIGlmICghZW50LmVxdWFscyhlbnRzMltpbmRleF0pKSB7XG5cdFx0XHRcdFx0XHRcdFx0ICAgZmxhZyA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdCAgIHJldHVybjtcblx0XHRcdFx0XHRcdFx0ICAgfVxuXHRcdFx0XHRcdFx0ICAgfSk7XG5cblx0XHRcdFx0XHRcdCAgIHJldHVybiBmbGFnO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbkVudGl0aWVzU2l6ZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vbkVudGl0aWVzKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGVudGl0aWVzOiBBcnJheTxJdGVtRW50aXR5PikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIGVudGl0aWVzLmxlbmd0aDtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25TaW5nbGVFbnRpdGllcyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IE9ic2VydmFibGU8QXJyYXk8SXRlbUVudGl0eT4+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uRW50aXRpZXMoc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIHRha2UoMSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uT3JpZ2luU2l6ZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub25PcmlnaW4oc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcChvcmlnaW4gPT4gb3JpZ2luLmxlbmd0aClcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uTG9hZGluZyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uU3RydWN0dXJlKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKHN0cnVjdHVyZTogU3RydWN0dXJlUmVhZE1vZGVsUm9vdCkgPT4gc3RydWN0dXJlLmdldFNvdXJjZSgpLmlzTG9hZGluZygpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25QcmVwYXJlZEVudGl0aWVzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeS5vblByZXBhcmVkSXRlbXMoc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==