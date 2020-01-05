/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { distinctUntilChanged, map, take } from 'rxjs/operators';
import { StructureRepository } from '../../domain/structure/read/structure.repository';
import { StructureSourceOriginRepository } from '../../domain/source/read/origin/structure.source-origin.repository';
import { globalStructureId } from '../../domain/global-structure-id';
import { StructurePreparedItemsRepository } from '../../domain/source/read/prepared/structure.prepared-items.repository';
var SourceReadModelService = /** @class */ (function () {
    function SourceReadModelService(structureRepository, structurePreparedItemsRepository, structureSourceOriginRepository) {
        this.structureRepository = structureRepository;
        this.structurePreparedItemsRepository = structurePreparedItemsRepository;
        this.structureSourceOriginRepository = structureSourceOriginRepository;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SourceReadModelService.prototype.onEntities = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
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
    SourceReadModelService.prototype.onEntitiesSize = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
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
    SourceReadModelService.prototype.onSingleEntities = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        return this.onEntities(structureId)
            .pipe(take(1));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SourceReadModelService.prototype.onOriginSize = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
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
    SourceReadModelService.prototype.onLoading = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
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
    SourceReadModelService.prototype.onPreparedEntities = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        return this.structurePreparedItemsRepository.onPreparedItems(structureId);
    };
    SourceReadModelService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SourceReadModelService.ctorParameters = function () { return [
        { type: StructureRepository },
        { type: StructurePreparedItemsRepository },
        { type: StructureSourceOriginRepository }
    ]; };
    return SourceReadModelService;
}());
export { SourceReadModelService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceReadModelService.prototype.structureRepository;
    /**
     * @type {?}
     * @private
     */
    SourceReadModelService.prototype.structurePreparedItemsRepository;
    /**
     * @type {?}
     * @private
     */
    SourceReadModelService.prototype.structureSourceOriginRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLXJlYWQtbW9kZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvc291cmNlL3NvdXJjZS1yZWFkLW1vZGVsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN2RixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUVySCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUdyRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUd6SDtJQUdDLGdDQUFvQixtQkFBd0MsRUFDakQsZ0NBQWtFLEVBQ2xFLCtCQUFnRTtRQUZ2RCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ2pELHFDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBa0M7UUFDbEUsb0NBQStCLEdBQS9CLCtCQUErQixDQUFpQztJQUMzRSxDQUFDOzs7OztJQUVELDJDQUFVOzs7O0lBQVYsVUFBVyxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUV0RCxPQUFPLElBQUksQ0FBQyxtQkFBbUI7YUFDekIsV0FBVyxDQUFDLFdBQVcsQ0FBQzthQUN4QixJQUFJLENBQ0osR0FBRzs7OztRQUFDLFVBQUMsU0FBb0IsSUFBSyxPQUFBLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBdkIsQ0FBdUIsRUFBQyxFQUN0RCxvQkFBb0I7Ozs7O1FBQUMsVUFBQyxLQUF3QixFQUFFLEtBQXdCO1lBQ3ZFLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUNsQyxPQUFPLEtBQUssQ0FBQzthQUNiOztnQkFFRyxJQUFJLEdBQUcsSUFBSTtZQUVmLEtBQUssQ0FBQyxPQUFPOzs7OztZQUFDLFVBQUMsR0FBRyxFQUFFLEtBQUs7Z0JBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO29CQUM5QixJQUFJLEdBQUcsS0FBSyxDQUFDO29CQUNiLE9BQU87aUJBQ1A7WUFDRixDQUFDLEVBQUMsQ0FBQztZQUVILE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsK0NBQWM7Ozs7SUFBZCxVQUFlLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBRTFELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7YUFDN0IsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxVQUFDLFFBQTJCO1lBQy9CLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUN4QixDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxpREFBZ0I7Ozs7SUFBaEIsVUFBaUIsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFFNUQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQzthQUM3QixJQUFJLENBQ0osSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNQLENBQUM7SUFDUixDQUFDOzs7OztJQUVELDZDQUFZOzs7O0lBQVosVUFBYSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUN4RCxPQUFPLElBQUksQ0FBQywrQkFBK0I7YUFDckMsUUFBUSxDQUFDLFdBQVcsQ0FBQzthQUNyQixJQUFJLENBQ0osR0FBRzs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE1BQU0sRUFBYixDQUFhLEVBQUMsQ0FDNUIsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsMENBQVM7Ozs7SUFBVCxVQUFVLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQ3JELE9BQU8sSUFBSSxDQUFDLG1CQUFtQjthQUN6QixXQUFXLENBQUMsV0FBVyxDQUFDO2FBQ3hCLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsVUFBQyxTQUFvQixJQUFLLE9BQUEsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFqQyxDQUFpQyxFQUFDLENBQ2hFLENBQUM7SUFDUixDQUFDOzs7OztJQUVELG1EQUFrQjs7OztJQUFsQixVQUFtQixXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUM5RCxPQUFPLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0UsQ0FBQzs7Z0JBckVELFVBQVU7Ozs7Z0JBVEYsbUJBQW1CO2dCQU1uQixnQ0FBZ0M7Z0JBTGhDLCtCQUErQjs7SUErRXhDLDZCQUFDO0NBQUEsQUF2RUQsSUF1RUM7U0F0RVksc0JBQXNCOzs7Ozs7SUFFdEIscURBQWdEOzs7OztJQUN6RCxrRUFBMEU7Ozs7O0lBQzFFLGlFQUF3RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL3JlYWQvc3RydWN0dXJlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zb3VyY2UvcmVhZC9vcmlnaW4vc3RydWN0dXJlLnNvdXJjZS1vcmlnaW4ucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgZ2xvYmFsU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vZ2xvYmFsLXN0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmUgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL3JlYWQvc3RydWN0dXJlJztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9kb21haW4vc291cmNlL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZVByZXBhcmVkSXRlbXNSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3NvdXJjZS9yZWFkL3ByZXBhcmVkL3N0cnVjdHVyZS5wcmVwYXJlZC1pdGVtcy5yZXBvc2l0b3J5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU291cmNlUmVhZE1vZGVsU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZVByZXBhcmVkSXRlbXNSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5OiBTdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRvbkVudGl0aWVzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxBcnJheTxJdGVtRW50aXR5Pj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub25TdHJ1Y3R1cmUoc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoc3RydWN0dXJlOiBTdHJ1Y3R1cmUpID0+IHN0cnVjdHVyZS5nZXRFbnRpdGllcygpKSxcblx0XHRcdFx0XHQgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgoZW50czE6IEFycmF5PEl0ZW1FbnRpdHk+LCBlbnRzMjogQXJyYXk8SXRlbUVudGl0eT4pID0+IHtcblx0XHRcdFx0XHRcdCAgIGlmIChlbnRzMS5sZW5ndGggIT09IGVudHMyLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHQgICByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHQgICB9XG5cblx0XHRcdFx0XHRcdCAgIGxldCBmbGFnID0gdHJ1ZTtcblxuXHRcdFx0XHRcdFx0ICAgZW50czEuZm9yRWFjaCgoZW50LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdFx0XHQgICBpZiAoIWVudC5lcXVhbHMoZW50czJbaW5kZXhdKSkge1xuXHRcdFx0XHRcdFx0XHRcdCAgIGZsYWcgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHQgICByZXR1cm47XG5cdFx0XHRcdFx0XHRcdCAgIH1cblx0XHRcdFx0XHRcdCAgIH0pO1xuXG5cdFx0XHRcdFx0XHQgICByZXR1cm4gZmxhZztcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25FbnRpdGllc1NpemUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub25FbnRpdGllcyhzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChlbnRpdGllczogQXJyYXk8SXRlbUVudGl0eT4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBlbnRpdGllcy5sZW5ndGg7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uU2luZ2xlRW50aXRpZXMoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPEFycmF5PEl0ZW1FbnRpdHk+PiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vbkVudGl0aWVzKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICB0YWtlKDEpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbk9yaWdpblNpemUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uT3JpZ2luKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAob3JpZ2luID0+IG9yaWdpbi5sZW5ndGgpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbkxvYWRpbmcoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVSZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vblN0cnVjdHVyZShzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChzdHJ1Y3R1cmU6IFN0cnVjdHVyZSkgPT4gc3RydWN0dXJlLmdldFNvdXJjZSgpLmlzTG9hZGluZygpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25QcmVwYXJlZEVudGl0aWVzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeS5vblByZXBhcmVkSXRlbXMoc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==