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
export class StructureSourceReadModelWarehouse {
    /**
     * @param {?} structureRepository
     * @param {?} structurePreparedItemsRepository
     * @param {?} structureSourceOriginRepository
     */
    constructor(structureRepository, structurePreparedItemsRepository, structureSourceOriginRepository) {
        this.structureRepository = structureRepository;
        this.structurePreparedItemsRepository = structurePreparedItemsRepository;
        this.structureSourceOriginRepository = structureSourceOriginRepository;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onEntities(structureId = structureGlobalId) {
        return this.structureRepository
            .onStructure(structureId)
            .pipe(map((/**
         * @param {?} structure
         * @return {?}
         */
        (structure) => structure.getEntities())), distinctUntilChanged((/**
         * @param {?} ents1
         * @param {?} ents2
         * @return {?}
         */
        (ents1, ents2) => {
            if (ents1.length !== ents2.length) {
                return false;
            }
            /** @type {?} */
            let flag = true;
            ents1.forEach((/**
             * @param {?} ent
             * @param {?} index
             * @return {?}
             */
            (ent, index) => {
                if (!ent.equals(ents2[index])) {
                    flag = false;
                    return;
                }
            }));
            return flag;
        })));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onEntitiesSize(structureId = structureGlobalId) {
        return this.onEntities(structureId)
            .pipe(map((/**
         * @param {?} entities
         * @return {?}
         */
        (entities) => {
            return entities.length;
        })));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onSingleEntities(structureId = structureGlobalId) {
        return this.onEntities(structureId)
            .pipe(take(1));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onOriginSize(structureId = structureGlobalId) {
        return this.structureSourceOriginRepository
            .onOrigin(structureId)
            .pipe(map((/**
         * @param {?} origin
         * @return {?}
         */
        origin => origin.length)));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onLoading(structureId = structureGlobalId) {
        return this.structureRepository
            .onStructure(structureId)
            .pipe(map((/**
         * @param {?} structure
         * @return {?}
         */
        (structure) => structure.getSource().isLoading())));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onPreparedEntities(structureId = structureGlobalId) {
        return this.structurePreparedItemsRepository.onPreparedItems(structureId);
    }
}
StructureSourceReadModelWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSourceReadModelWarehouse.ctorParameters = () => [
    { type: StructureReadModelRepository },
    { type: StructurePreparedItemsRepository },
    { type: StructureSourceOriginRepository }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXNvdXJjZS5yZWFkLW1vZGVsLXdhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvc291cmNlL3N0cnVjdHVyZS1zb3VyY2UucmVhZC1tb2RlbC13YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNwRyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUU5RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUczRCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUlsSCxNQUFNLE9BQU8saUNBQWlDOzs7Ozs7SUFFN0MsWUFBb0IsbUJBQWlELEVBQzFELGdDQUFrRSxFQUNsRSwrQkFBZ0U7UUFGdkQsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUE4QjtRQUMxRCxxQ0FBZ0MsR0FBaEMsZ0NBQWdDLENBQWtDO1FBQ2xFLG9DQUErQixHQUEvQiwrQkFBK0IsQ0FBaUM7SUFDM0UsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsY0FBMkIsaUJBQWlCO1FBRXRELE9BQU8sSUFBSSxDQUFDLG1CQUFtQjthQUN6QixXQUFXLENBQUMsV0FBVyxDQUFDO2FBQ3hCLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsQ0FBQyxTQUFpQyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUMsRUFDbkUsb0JBQW9COzs7OztRQUFDLENBQUMsS0FBd0IsRUFBRSxLQUF3QixFQUFFLEVBQUU7WUFDM0UsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0JBQ2xDLE9BQU8sS0FBSyxDQUFDO2FBQ2I7O2dCQUVHLElBQUksR0FBRyxJQUFJO1lBRWYsS0FBSyxDQUFDLE9BQU87Ozs7O1lBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO29CQUM5QixJQUFJLEdBQUcsS0FBSyxDQUFDO29CQUNiLE9BQU87aUJBQ1A7WUFDRixDQUFDLEVBQUMsQ0FBQztZQUVILE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLGNBQTJCLGlCQUFpQjtRQUUxRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO2FBQzdCLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsQ0FBQyxRQUEyQixFQUFFLEVBQUU7WUFDbkMsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ3hCLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLGNBQTJCLGlCQUFpQjtRQUU1RCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO2FBQzdCLElBQUksQ0FDSixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLGNBQTJCLGlCQUFpQjtRQUN4RCxPQUFPLElBQUksQ0FBQywrQkFBK0I7YUFDckMsUUFBUSxDQUFDLFdBQVcsQ0FBQzthQUNyQixJQUFJLENBQ0osR0FBRzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBQyxDQUM1QixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsY0FBMkIsaUJBQWlCO1FBQ3JELE9BQU8sSUFBSSxDQUFDLG1CQUFtQjthQUN6QixXQUFXLENBQUMsV0FBVyxDQUFDO2FBQ3hCLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsQ0FBQyxTQUFpQyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUMsQ0FDN0UsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUMsY0FBMkIsaUJBQWlCO1FBQzlELE9BQU8sSUFBSSxDQUFDLGdDQUFnQyxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzRSxDQUFDOzs7WUFyRUQsVUFBVTs7OztZQVRGLDRCQUE0QjtZQU01QixnQ0FBZ0M7WUFMaEMsK0JBQStCOzs7Ozs7O0lBVzNCLGdFQUF5RDs7Ozs7SUFDbEUsNkVBQTBFOzs7OztJQUMxRSw0RUFBd0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vcmVhZC9zdHJ1Y3R1cmUvc3RydWN0dXJlLnJlYWQtbW9kZWwtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vcmVhZC9zb3VyY2Uvb3JpZ2luL3N0cnVjdHVyZS5zb3VyY2Utb3JpZ2luLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi4vc3RydWN0dXJlLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290IH0gZnJvbSAnLi4vLi4vcmVhZC9zdHJ1Y3R1cmUvc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdCc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3NvdXJjZS9pdGVtLmVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL3JlYWQvc291cmNlL3ByZXBhcmVkL3N0cnVjdHVyZS5wcmVwYXJlZC1pdGVtcy5yZXBvc2l0b3J5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU291cmNlUmVhZE1vZGVsV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZVJlcG9zaXRvcnk6IFN0cnVjdHVyZVJlYWRNb2RlbFJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnk6IFN0cnVjdHVyZVByZXBhcmVkSXRlbXNSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnk6IFN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdG9uRW50aXRpZXMoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiBPYnNlcnZhYmxlPEFycmF5PEl0ZW1FbnRpdHk+PiB7XG5cblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVSZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vblN0cnVjdHVyZShzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChzdHJ1Y3R1cmU6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QpID0+IHN0cnVjdHVyZS5nZXRFbnRpdGllcygpKSxcblx0XHRcdFx0XHQgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgoZW50czE6IEFycmF5PEl0ZW1FbnRpdHk+LCBlbnRzMjogQXJyYXk8SXRlbUVudGl0eT4pID0+IHtcblx0XHRcdFx0XHRcdCAgIGlmIChlbnRzMS5sZW5ndGggIT09IGVudHMyLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHQgICByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHQgICB9XG5cblx0XHRcdFx0XHRcdCAgIGxldCBmbGFnID0gdHJ1ZTtcblxuXHRcdFx0XHRcdFx0ICAgZW50czEuZm9yRWFjaCgoZW50LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdFx0XHQgICBpZiAoIWVudC5lcXVhbHMoZW50czJbaW5kZXhdKSkge1xuXHRcdFx0XHRcdFx0XHRcdCAgIGZsYWcgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHQgICByZXR1cm47XG5cdFx0XHRcdFx0XHRcdCAgIH1cblx0XHRcdFx0XHRcdCAgIH0pO1xuXG5cdFx0XHRcdFx0XHQgICByZXR1cm4gZmxhZztcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25FbnRpdGllc1NpemUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub25FbnRpdGllcyhzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChlbnRpdGllczogQXJyYXk8SXRlbUVudGl0eT4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBlbnRpdGllcy5sZW5ndGg7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uU2luZ2xlRW50aXRpZXMoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiBPYnNlcnZhYmxlPEFycmF5PEl0ZW1FbnRpdHk+PiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vbkVudGl0aWVzKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICB0YWtlKDEpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbk9yaWdpblNpemUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uT3JpZ2luKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAob3JpZ2luID0+IG9yaWdpbi5sZW5ndGgpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbkxvYWRpbmcoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVSZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vblN0cnVjdHVyZShzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChzdHJ1Y3R1cmU6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QpID0+IHN0cnVjdHVyZS5nZXRTb3VyY2UoKS5pc0xvYWRpbmcoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uUHJlcGFyZWRFbnRpdGllcyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnkub25QcmVwYXJlZEl0ZW1zKHN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=