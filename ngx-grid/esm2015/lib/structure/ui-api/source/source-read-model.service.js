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
export class SourceReadModelService {
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
    onEntities(structureId = globalStructureId) {
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
    onEntitiesSize(structureId = globalStructureId) {
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
    onSingleEntities(structureId = globalStructureId) {
        return this.onEntities(structureId)
            .pipe(take(1));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onOriginSize(structureId = globalStructureId) {
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
    onLoading(structureId = globalStructureId) {
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
    onPreparedEntities(structureId = globalStructureId) {
        return this.structurePreparedItemsRepository.onPreparedItems(structureId);
    }
}
SourceReadModelService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SourceReadModelService.ctorParameters = () => [
    { type: StructureRepository },
    { type: StructurePreparedItemsRepository },
    { type: StructureSourceOriginRepository }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLXJlYWQtbW9kZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvc291cmNlL3NvdXJjZS1yZWFkLW1vZGVsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN2RixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUVySCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUdyRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUl6SCxNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7SUFFbEMsWUFBb0IsbUJBQXdDLEVBQ2pELGdDQUFrRSxFQUNsRSwrQkFBZ0U7UUFGdkQsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUNqRCxxQ0FBZ0MsR0FBaEMsZ0NBQWdDLENBQWtDO1FBQ2xFLG9DQUErQixHQUEvQiwrQkFBK0IsQ0FBaUM7SUFDM0UsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsY0FBMkIsaUJBQWlCO1FBRXRELE9BQU8sSUFBSSxDQUFDLG1CQUFtQjthQUN6QixXQUFXLENBQUMsV0FBVyxDQUFDO2FBQ3hCLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsQ0FBQyxTQUFvQixFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUMsRUFDdEQsb0JBQW9COzs7OztRQUFDLENBQUMsS0FBd0IsRUFBRSxLQUF3QixFQUFFLEVBQUU7WUFDM0UsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0JBQ2xDLE9BQU8sS0FBSyxDQUFDO2FBQ2I7O2dCQUVHLElBQUksR0FBRyxJQUFJO1lBRWYsS0FBSyxDQUFDLE9BQU87Ozs7O1lBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO29CQUM5QixJQUFJLEdBQUcsS0FBSyxDQUFDO29CQUNiLE9BQU87aUJBQ1A7WUFDRixDQUFDLEVBQUMsQ0FBQztZQUVILE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLGNBQTJCLGlCQUFpQjtRQUUxRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO2FBQzdCLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsQ0FBQyxRQUEyQixFQUFFLEVBQUU7WUFDbkMsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ3hCLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLGNBQTJCLGlCQUFpQjtRQUU1RCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO2FBQzdCLElBQUksQ0FDSixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLGNBQTJCLGlCQUFpQjtRQUN4RCxPQUFPLElBQUksQ0FBQywrQkFBK0I7YUFDckMsUUFBUSxDQUFDLFdBQVcsQ0FBQzthQUNyQixJQUFJLENBQ0osR0FBRzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBQyxDQUM1QixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsY0FBMkIsaUJBQWlCO1FBQ3JELE9BQU8sSUFBSSxDQUFDLG1CQUFtQjthQUN6QixXQUFXLENBQUMsV0FBVyxDQUFDO2FBQ3hCLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsQ0FBQyxTQUFvQixFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUMsQ0FDaEUsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUMsY0FBMkIsaUJBQWlCO1FBQzlELE9BQU8sSUFBSSxDQUFDLGdDQUFnQyxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzRSxDQUFDOzs7WUFyRUQsVUFBVTs7OztZQVRGLG1CQUFtQjtZQU1uQixnQ0FBZ0M7WUFMaEMsK0JBQStCOzs7Ozs7O0lBVzNCLHFEQUFnRDs7Ozs7SUFDekQsa0VBQTBFOzs7OztJQUMxRSxpRUFBd0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9yZWFkL3N0cnVjdHVyZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vc291cmNlL3JlYWQvb3JpZ2luL3N0cnVjdHVyZS5zb3VyY2Utb3JpZ2luLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IGdsb2JhbFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL2dsb2JhbC1zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9yZWFkL3N0cnVjdHVyZSc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3NvdXJjZS9pdGVtLmVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zb3VyY2UvcmVhZC9wcmVwYXJlZC9zdHJ1Y3R1cmUucHJlcGFyZWQtaXRlbXMucmVwb3NpdG9yeSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNvdXJjZVJlYWRNb2RlbFNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlUmVwb3NpdG9yeTogU3RydWN0dXJlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeTogU3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeTogU3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0b25FbnRpdGllcyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8QXJyYXk8SXRlbUVudGl0eT4+IHtcblxuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uU3RydWN0dXJlKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKHN0cnVjdHVyZTogU3RydWN0dXJlKSA9PiBzdHJ1Y3R1cmUuZ2V0RW50aXRpZXMoKSksXG5cdFx0XHRcdFx0ICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKGVudHMxOiBBcnJheTxJdGVtRW50aXR5PiwgZW50czI6IEFycmF5PEl0ZW1FbnRpdHk+KSA9PiB7XG5cdFx0XHRcdFx0XHQgICBpZiAoZW50czEubGVuZ3RoICE9PSBlbnRzMi5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdFx0ICAgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0ICAgfVxuXG5cdFx0XHRcdFx0XHQgICBsZXQgZmxhZyA9IHRydWU7XG5cblx0XHRcdFx0XHRcdCAgIGVudHMxLmZvckVhY2goKGVudCwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRcdFx0ICAgaWYgKCFlbnQuZXF1YWxzKGVudHMyW2luZGV4XSkpIHtcblx0XHRcdFx0XHRcdFx0XHQgICBmbGFnID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFx0ICAgcmV0dXJuO1xuXHRcdFx0XHRcdFx0XHQgICB9XG5cdFx0XHRcdFx0XHQgICB9KTtcblxuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIGZsYWc7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uRW50aXRpZXNTaXplKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uRW50aXRpZXMoc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoZW50aXRpZXM6IEFycmF5PEl0ZW1FbnRpdHk+KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gZW50aXRpZXMubGVuZ3RoO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvblNpbmdsZUVudGl0aWVzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxBcnJheTxJdGVtRW50aXR5Pj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub25FbnRpdGllcyhzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgdGFrZSgxKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25PcmlnaW5TaXplKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbk9yaWdpbihzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKG9yaWdpbiA9PiBvcmlnaW4ubGVuZ3RoKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25Mb2FkaW5nKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub25TdHJ1Y3R1cmUoc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoc3RydWN0dXJlOiBTdHJ1Y3R1cmUpID0+IHN0cnVjdHVyZS5nZXRTb3VyY2UoKS5pc0xvYWRpbmcoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uUHJlcGFyZWRFbnRpdGllcyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnkub25QcmVwYXJlZEl0ZW1zKHN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=